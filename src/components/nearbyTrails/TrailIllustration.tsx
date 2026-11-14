import type { Trail } from './trails';

// Decorative artwork reserves the photo composition until the real images arrive.
const TrailIllustration = ({ variant }: { variant: Trail['illustration'] }) => (
  <svg className={`trail-illustration trail-illustration--${variant}`} viewBox='0 0 800 560' fill='none' aria-hidden='true' focusable='false' preserveAspectRatio='xMidYMid slice'>
    <rect width='800' height='560' fill='var(--art-sky)' />
    <circle cx={variant === 'summit' ? 600 : 570} cy='130' r='48' fill='var(--art-sun)' />
    <g stroke='var(--art-line)' strokeWidth='1' opacity='.25'>
      <path d='M-40 150C100 30 180 240 350 115S640 70 850 150' />
      <path d='M-40 172C100 52 180 262 350 137S640 92 850 172' />
      <path d='M-40 194C100 74 180 284 350 159S640 114 850 194' />
    </g>
    <path d='M-70 400 160 170 250 260 390 90 570 300 650 210 870 430V560H-70Z' fill='var(--art-back)' />
    <path d='m250 260 140-170 69 81-60-25-27 38-29-13-41 61Z' fill='var(--art-snow)' />
    <path d='m40 390 120-220 90 90-65-36-24 27-16-13Z' fill='var(--art-snow)' opacity='.7' />
    <path d='M-50 410C110 280 240 350 350 330S600 260 850 400V560H-50Z' fill='var(--art-mid)' />
    {variant === 'waterfall' ? (
      <>
        <path d='M400 305 386 405 420 435 401 560H482L456 432 422 399 431 302Z' fill='var(--art-water)' />
        <path d='m411 327-9 72 35 38-13 71' stroke='var(--art-snow)' strokeWidth='4' opacity='.8' />
      </>
    ) : (
      <path d='M437 321C330 375 520 401 395 441S300 510 335 560H475C380 508 421 483 478 449S448 390 437 378 410 354 455 321Z' fill='var(--art-water)' />
    )}
    <path d='M-30 462C130 370 233 444 350 510L307 560H-30Z' fill='var(--art-front)' />
    <path d='M830 430C680 390 570 459 473 560H830Z' fill='var(--art-front)' />
    <g fill='var(--art-tree)'>
      {[{ x: 74, y: 302, s: 1.2 }, { x: 146, y: 346, s: .8 }, { x: 675, y: 290, s: 1.35 }, { x: 608, y: 365, s: .75 }, { x: 734, y: 380, s: .9 }].map(({ x, y, s }) => (
        <path key={x} d='M0 0-21 41H-11L-32 72H-17L-41 109H-4V137H4V109H41L17 72H32L11 41H21Z' transform={`translate(${x} ${y}) scale(${s})`} />
      ))}
    </g>
    <path d='M0 530C160 475 190 575 340 541S620 496 800 535' stroke='var(--art-line)' strokeWidth='1' opacity='.25' />
  </svg>
);

export default TrailIllustration;
