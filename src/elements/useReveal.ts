import { useLayoutEffect } from 'react';

const SELECTORS = [
  '.apartment-container', '.facilities-grid li',
  '.reviews-scores__card', '.reviews-grid li', '.location-map__map',
  '.apartments-section__mountains', '.location-map__distances > li',
].join(',');

// fades each matched element up once it enters the viewport, staggered within its row
const useReveal = () => {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const phone = window.matchMedia('(max-width: 640px)').matches;
    // on phones the reviews are a swipe carousel, so they must stay visible instead of waiting to enter the screen
    const items = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS))
      .filter(el => !(phone && el.matches('.reviews-grid li')));
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => {
      const parent = el.parentElement;
      const siblings = parent ? Array.from(parent.children) : [];
      // stagger by column, so cards in one row arrive left to right and a single column has no delay
      const columns = parent ? getComputedStyle(parent).gridTemplateColumns.split(' ').filter(Boolean).length || 1 : 1;
      const step = el.matches('.location-map__distances > li') ? siblings.indexOf(el) * 170 : (siblings.indexOf(el) % columns) * 140;
      el.style.setProperty('--reveal-delay', `${step}ms`);
      el.classList.add('reveal');
      io.observe(el);
    });

    // the ridge above the footer rises once the footer comes into view
    const footer = document.querySelector<HTMLElement>('.location-map + .site-footer');
    let ridgeIo: IntersectionObserver | undefined;
    if (footer) {
      footer.classList.add('ridge-hidden');
      ridgeIo = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        footer.classList.remove('ridge-hidden');
        ridgeIo?.disconnect();
      }, { threshold: 0.05 });
      ridgeIo.observe(footer);
    }
    return () => { io.disconnect(); ridgeIo?.disconnect(); };
  }, []);
};

export default useReveal;
