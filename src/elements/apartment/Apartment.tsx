import React, { useEffect, useRef, useState } from 'react';
import './apartment.css';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiMaximize, FiUsers } from 'react-icons/fi';
import { useI18n, LangLink } from '../../i18n';

const VISIBLE_DOTS = 3;
const DRAG_START = 8;
const SWIPE_FRACTION = 0.2;
const SWIPE_VELOCITY = 0.4;

// photo that blurs in once it has loaded; also handles images already in the cache
const Slide = ({ src, alt, hidden }: { src?: string; alt: string; hidden: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => { if (ref.current?.complete && ref.current.naturalWidth) setLoaded(true); }, [src]);
  return (
    <div className='apartment-container__slide' aria-hidden={hidden}>
      {src && <img ref={ref} src={src} alt={alt} draggable={false} className={loaded ? 'is-loaded' : ''} onLoad={() => setLoaded(true)} />}
    </div>
  );
};

type ListProps = {
    id: number;
    index: number;
    photos: string[];
    title: string;
    capacity: string;
    size:string;
    highlight?: {
      label?: string;
      icon: string;
    };
};

const Apartment = (props:ListProps) => {
  const { t, photoAlt } = useI18n();
  const [current, setCurrent] = useState(0);
  const [reached, setReached] = useState(0);
  const [dragX, setDragX] = useState<number | null>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; t: number; active: boolean } | null>(null);
  const dragged = useRef(false);
  const total = props.photos.length;
  const highlight = {
    label: props.highlight?.label || t('card.defaultHighlight'),
    icon: props.highlight?.icon || '/img/icon-mountain.png',
  };
  // first visible dot; the window only slides once the active dot runs past its edge
  const [start, setStart] = useState(0);

  // stop at the first and last photo, wrapping made the dots jump from one end to the other
  const go = (to: number) => {
    const next = Math.max(0, Math.min(total - 1, to));
    setCurrent(next);
    setReached(r => Math.max(r, next));
    setStart(s => next < s ? next : next > s + VISIBLE_DOTS - 1 ? next - (VISIBLE_DOTS - 1) : s);
  };

  // controls sit inside the card link, so stop the click from opening the details page
  const control = (e: React.MouseEvent, next: number) => {
    e.preventDefault();
    e.stopPropagation();
    go(next);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, y: e.clientY, t: e.timeStamp, active: false };
    dragged.current = false;
  };

  // the photos follow the finger once the gesture is clearly horizontal; vertical moves scroll the page
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.active) {
      if (Math.abs(dx) < DRAG_START || Math.abs(dx) < Math.abs(e.clientY - d.y)) return;
      d.active = true;
      wrap.current?.setPointerCapture(e.pointerId);
    }
    const atEdge = (current === 0 && dx > 0) || (current === total - 1 && dx < 0);
    setDragX(atEdge ? dx * 0.3 : dx);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const d = drag.current;
    drag.current = null;
    if (!d?.active) return;
    const dx = e.clientX - d.x;
    const width = wrap.current?.offsetWidth || 1;
    const fast = Math.abs(dx) / Math.max(e.timeStamp - d.t, 1) > SWIPE_VELOCITY;
    dragged.current = true;
    setDragX(null);
    if (Math.abs(dx) > width * SWIPE_FRACTION || (fast && Math.abs(dx) > DRAG_START * 2)) go(current + (dx < 0 ? 1 : -1));
  };

  const onPointerCancel = () => { drag.current = null; setDragX(null); };

  // a swipe must not count as a click on the card
  const onImageClick = (e: React.MouseEvent) => {
    if (dragged.current) {
      e.preventDefault();
      dragged.current = false;
    }
  };

  return (
    <LangLink to={`/Apartament/${props.id}`} className='apartment-container'>
      <div
        ref={wrap}
        className='apartment-container__image-wrap'
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onClick={onImageClick}
      >
        <div
          className={`apartment-container__track${dragX !== null ? ' is-dragging' : ''}`}
          style={{ transform: `translateX(calc(${-current * 100}% + ${dragX ?? 0}px))` }}
        >
          {props.photos.map((photo, i) => (
            <Slide key={photo} src={i <= reached + 1 ? photo : undefined} alt={photoAlt(props.id, i, props.title)} hidden={i !== current} />
          ))}
        </div>
        <span className='apartment-container__number'>
          {String(props.index).padStart(2, '0')}
        </span>
        {/* arrows stay on the first/last photo (dimmed) so a tap there never falls through to the card link */}
        <button type='button' className={`apartment-container__arrow prev${current === 0 ? ' is-edge' : ''}`} aria-label={t('card.previousPhoto')} aria-disabled={current === 0} onClick={e => control(e, current - 1)}>
          <FiChevronLeft />
        </button>
        <button type='button' className={`apartment-container__arrow next${current === total - 1 ? ' is-edge' : ''}`} aria-label={t('card.nextPhoto')} aria-disabled={current === total - 1} onClick={e => control(e, current + 1)}>
          <FiChevronRight />
        </button>
        <div className='apartment-container__dots'>
          {Array.from({ length: Math.min(VISIBLE_DOTS, total) }, (_, k) => {
            const i = start + k;
            const hasMoreBeyond = (k === 0 && start > 0) || (k === VISIBLE_DOTS - 1 && start + k < total - 1);
            const cls = i === current ? 'active' : hasMoreBeyond ? 'small' : '';
            return (
              <button
                key={i}
                type='button'
                className={cls}
                aria-label={t('card.photoOf', { current: i + 1, total })}
                onClick={e => control(e, i)}
              />
            );
          })}
        </div>
      </div>

      <div className='apartment-container__content'>
        <h3>{props.title}</h3>

        <div className='apartment-container__details'>
          <span><FiUsers aria-hidden='true' /> {t('card.capacity', { count: props.capacity })}</span>
          <span><FiMaximize aria-hidden='true' /> {props.size}</span>
          <span><img src={highlight.icon} alt='' aria-hidden='true' draggable={false} />{highlight.label}</span>
        </div>

        <span className='apartment-container__button'>
          {t('card.view')} <FiArrowRight aria-hidden='true' />
        </span>
      </div>
    </LangLink>
  );
};

export default Apartment
