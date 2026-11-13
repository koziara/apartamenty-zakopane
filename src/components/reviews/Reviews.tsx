import React, { useEffect, useRef, useState } from 'react';
import { LuStar, LuMessageCircle, LuCalendar } from 'react-icons/lu';
import { FiArrowUpRight } from 'react-icons/fi';
import reviewsData from '../../lists/reviews.json';
import { useI18n } from '../../i18n';
import './reviews.css';

const Stars = ({ count }: { count: number }) => (
  <span className='reviews-stars' aria-hidden='true'>
    {Array.from({ length: count }, (_, i) => <LuStar key={i} fill='currentColor' />)}
  </span>
);

// counts the score up from 0 the first time it scrolls into view
const CountUp = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    setShown(0);
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1300, 1);
        setShown(value * (1 - Math.pow(1 - t, 3)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);

  return <span ref={ref}>{shown.toFixed(1)}</span>;
};

// "2026-09" -> "September 2026", "2025" -> "2025", formatted for the active language
const formatReviewDate = (date: string, intl: string) => {
  const [year, month] = date.split('-').map(Number);
  return month
    ? new Intl.DateTimeFormat(intl, { month: 'long', year: 'numeric' }).format(new Date(year, month - 1, 1))
    : String(year);
};

const Reviews = () => {
  const { t, tp, messages, intl } = useI18n();
  const grid = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = grid.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    setActive(Math.round(el.scrollLeft / (first.offsetWidth + 16)));
  };

  const goTo = (i: number) => {
    const el = grid.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (el && first) el.scrollTo({ left: i * (first.offsetWidth + 16), behavior: 'smooth' });
  };

  return (
    <section className='reviews-section' id='reviews'>
      <div className='reviews-section__inner'>
        <header className='reviews-section__header'>
          <h2>{t('reviews.title')}</h2>
          <p>{t('reviews.intro')}</p>
        </header>

        <div className='reviews-scores'>
          {reviewsData.scores.map(({ source, logo, value, max, count, url }) => {
            const content = (
              <>
                <span className='reviews-scores__source'>
                  <img src={logo} alt='' draggable={false} />
                  {source}
                </span>
                <span className='reviews-scores__rating'>
                  <span className='reviews-scores__value'><CountUp value={value} /><small>/{max}</small></span>
                  <Stars count={Math.round((value / max) * 5)} />
                </span>
                <span className='reviews-scores__count'>
                  <LuMessageCircle aria-hidden='true' />
                  {tp('reviews.count', count)}
                  {url && <FiArrowUpRight className='reviews-scores__link' aria-hidden='true' />}
                </span>
              </>
            );
            return url
              ? <a key={source} className='reviews-scores__card' href={url} target='_blank' rel='noopener noreferrer'>{content}</a>
              : <div key={source} className='reviews-scores__card'>{content}</div>;
          })}
        </div>

        <ul className='reviews-grid' ref={grid} onScroll={onScroll}>
          {reviewsData.reviews.map(({ id, name, source, date }) => {
            const logo = reviewsData.scores.find((score) => score.source === source)?.logo;
            return (
              <li key={id}>
                <Stars count={5} />
                <h3>{name}</h3>
                <blockquote>{messages.reviews.texts[id]}</blockquote>
                <footer>
                  <span className='reviews-grid__source'>
                    {logo && <img src={logo} alt='' draggable={false} />}
                    {source}
                  </span>
                  {date && (
                    <span className='reviews-grid__date'>
                      <LuCalendar aria-hidden='true' />
                      {formatReviewDate(date, intl)}
                    </span>
                  )}
                </footer>
              </li>
            );
          })}
        </ul>
        <div className='reviews-dots' aria-hidden='true'>
          {reviewsData.reviews.map(({ id }, i) => (
            <button key={id} type='button' tabIndex={-1} className={i === active ? 'active' : ''} onClick={() => goTo(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews
