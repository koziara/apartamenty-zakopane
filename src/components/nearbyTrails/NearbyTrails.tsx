import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiClock, FiMapPin, FiTrendingUp } from 'react-icons/fi';
import { Navbar, ScrollToTop } from '../../elements';
import { LangLink, useI18n } from '../../i18n';
import PageMeta from '../../seo/PageMeta';
import Footer from '../footer/Footer';
import TrailIllustration from './TrailIllustration';
import { trails, trailMapUrl } from './trails';
import './nearbyTrails.css';

const NearbyTrails = () => {
  const { messages, lang } = useI18n();
  const copy = messages.nearbyTrails;
  return (
    <div className='trails-page navbar-theme-home'>
      <PageMeta
        title={copy.metaTitle}
        description={copy.metaDescription}
        path='/Szlaki'
      />
      <ScrollToTop />
      <Navbar dark />
      <main>
        <header className='trails-hero trails-page__container'>
          <div className='trails-hero__content'>
            <div className='trails-hero__copy'>
              <h1>{copy.heroLine1}<br /><em>{copy.heroLine2}</em></h1>
              <p className='trails-hero__intro'>{copy.intro}</p>
              <a className='trails-button' href='#szlaki'>{copy.explore} <FiArrowDown aria-hidden='true' /></a>
            </div>
            <a className='trails-hero__map' href='/img/mapa-szlakow-w-poblizu-apartamentow-dolina-strazyska.png' target='_blank' rel='noopener noreferrer' aria-label={`${copy.enlargeMap} (${copy.newTab})`}>
              <img src='/img/mapa-szlakow-w-poblizu-apartamentow-dolina-strazyska.png' alt={copy.mapAlt} width={1536} height={1024} />
              <span className='trails-hero__map-caption'><span>{copy.mapCaption}</span><span>{copy.enlargeMap} <FiArrowUpRight aria-hidden='true' /></span></span>
            </a>
          </div>
          <div className='trails-hero__location'><FiMapPin aria-hidden='true' /><span>{copy.locationIntro}</span><span className='trails-hero__address'>Strążyska 4A · Zakopane</span></div>
        </header>

        <section id='szlaki' className='trails-collection' aria-labelledby='trails-heading'>
          <div className='trails-page__container'>
            <div className='trails-collection__heading'>
              <h2 id='trails-heading'>{copy.heading}</h2>
            </div>
            <div className='trails-grid'>
              {trails.map((trail, index) => {
                const text = copy.items[index];
                return (
                  <article key={trail.id} className={`trail-card${index === 0 ? ' trail-card--featured' : ''}`}>
                    <div className='trail-card__visual'>
                      {trail.photo ? <img className='trail-card__photo' src={trail.photo} alt={lang === 'pl' ? trail.photoAlt : text.name} loading='lazy' width={800} height={560} /> : <TrailIllustration variant={trail.illustration} />}
                      <span className='trail-card__number'>{String(index + 1).padStart(2, '0')}</span>
                      {index === 0 && <span className='trail-card__tag'>{copy.featured}</span>}
                    </div>
                    <div className='trail-card__body'>
                      <div className='trail-card__heading'>
                        <h3>{text.name}</h3>
                        <span className='trail-card__difficulty'><FiTrendingUp aria-hidden='true' /><span className='trails-sr-only'>{copy.labels.difficulty}: </span>{text.difficulty}</span>
                      </div>
                      <p className='trail-card__description'>{text.description}</p>
                      <div className='trail-card__meta'>
                        <span><FiClock aria-hidden='true' /><span className='trails-sr-only'>{copy.labels.time}: </span>{text.duration}</span>
                        <span><FiMapPin aria-hidden='true' /><span className='trails-sr-only'>{copy.labels.destination}: </span>{text.via}</span>
                      </div>
                      <a className='trail-card__link' href={trailMapUrl(trail.mapQuery)} target='_blank' rel='noopener noreferrer' aria-label={`${text.name} - ${copy.mapLink} (${copy.newTab})`}>{copy.mapLink} <FiArrowUpRight aria-hidden='true' /></a>
                    </div>
                  </article>
                );
              })}
            </div>
            <aside className='trails-information' aria-labelledby='trails-information-heading'>
              <h3 id='trails-information-heading'>{copy.informationHeading}</h3>
              <p className='trails-time-note'>{copy.timeNote}</p>
            </aside>
            <div className='trails-footnote'><span aria-hidden='true'>↗</span><p>{copy.conditionsNote}</p><a href='https://tpn.gov.pl/' target='_blank' rel='noopener noreferrer'>{copy.parkInfo} <FiArrowUpRight aria-hidden='true' /></a></div>
          </div>
        </section>

        <section className='trails-stay trails-page__container' aria-labelledby='trails-stay-heading'>
          <div className='trails-stay__inner'>
            <img className='trails-stay__icon' src='/img/location-icons/02_dolina_strazyska_gory.svg' alt='' width={68} height={68} aria-hidden='true' />
            <div className='trails-stay__copy'>
              <h2 id='trails-stay-heading'>{copy.stayHeading}</h2>
              <p>{copy.stayText}</p>
            </div>
            <LangLink className='trails-button' to='/' state={{ scrollTo: 'apartments' }}>{copy.viewApartments} <FiArrowRight aria-hidden='true' /></LangLink>
          </div>
        </section>
      </main>
      <Footer visible />
    </div>
  );
};

export default NearbyTrails;
