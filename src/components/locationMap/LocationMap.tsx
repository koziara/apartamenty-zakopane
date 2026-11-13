import { useI18n } from '../../i18n';
import './locationMap.css';

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Strążyska 4A, 34-500 Zakopane, Polska')}`;

const walkingDistances = [
  { place: 'krupowki', minutes: '12', icon: '/img/location-icons/01_krupowki_torba.svg' },
  { place: 'valley', minutes: '12', icon: '/img/location-icons/02_dolina_strazyska_gory.svg' },
  { place: 'museum', minutes: '8–10', icon: '/img/location-icons/03_willa_atma_muzeum.svg' },
] as const;

const LocationMap = () => {
  const { t } = useI18n();
  return (
  <section className='location-map' aria-labelledby='location-heading'>
    <div className='location-map__header'>
      <h2 id='location-heading'>{t('location.title')}</h2>
      <p className='location-map__subtitle'>{t('location.subtitle')}</p>
      <LocationInfo />
    </div>
    <div className='location-map__map'>
      <img
        className='location-map__image'
        src='/img/map.webp'
        alt={t('location.mapAlt')}
        width={1890}
        height={863}
        loading='lazy'
      />
      <span className='location-map__pulse' aria-hidden='true' />
    </div>
  </section>
  );
};

const LocationInfo = () => {
  const { t } = useI18n();
  return (
  <div className='location-map__info'>
    <ul className='location-map__distances' aria-label={t('location.distancesLabel')}>
      {walkingDistances.map(({ place, minutes, icon }) => (
        <li key={place}>
          <img className='location-map__place-icon' src={icon} alt='' aria-hidden='true' width={48} height={48} />
          <div>
            <p className='location-map__place-name'>{t(`location.places.${place}`)}</p>
            <p className='location-map__walking-time'>{t('location.walking', { minutes })}</p>
          </div>
        </li>
      ))}
    </ul>
    <div className='location-map__action'>
      <a className='location-map__directions' href={directionsUrl} target='_blank' rel='noopener noreferrer'>
        {t('location.directions')} <img src='/img/location-icons/04_strzalka_dojazd.svg' alt='' aria-hidden='true' width={32} height={32} />
      </a>
    </div>
  </div>
  );
};

export default LocationMap;
