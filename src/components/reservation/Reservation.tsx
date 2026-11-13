import { useEffect } from 'react';
import { FiArrowLeft, FiPhone } from 'react-icons/fi';
import { ScrollToTop } from '../../elements';
import PageMeta from '../../seo/PageMeta';
import { useI18n, LangLink } from '../../i18n';
import Footer from '../footer/Footer';
import './reservation.css';

const WIDGET_SRC = 'https://booking.sohis.pl/v4/assets/sohis_sri_webc_index.js';

// the booking widget is only needed on this page, so it is loaded here instead of on every page
const loadBookingWidget = () => {
  if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;
  const script = document.createElement('script');
  script.type = 'module';
  script.crossOrigin = '';
  script.src = WIDGET_SRC;
  document.body.appendChild(script);
};

const Reservation = () => {
  const { t, lang } = useI18n();
  useEffect(loadBookingWidget, []);
  return (
  <div className="reservation-page">
    <PageMeta title={t('meta.reservationTitle')} description={t('meta.reservationDescription')} path='/Rezerwacje' />
    <ScrollToTop />
    <main className="reservation-page__main">
      <LangLink className="reservation-page__back" to="/" state={{ scrollTo: 'apartments' }}>
        <FiArrowLeft aria-hidden="true" /> {t('reservation.back')}
      </LangLink>
      <header className="reservation-page__intro">
        <h1>{t('reservation.title')}</h1>
        <p>{t('reservation.intro')}</p>
      </header>
      <section className="reservation-page__booking" aria-label={t('reservation.bookingLabel')}>
        <sohis-booking key={lang} id-place="690" lang={lang} className="reservation-page__widget" />
      </section>
      <div className="reservation-page__help">
        <p>{t('reservation.help')}</p>
        <a href="tel:+48607601471"><FiPhone aria-hidden="true" /> +48 607 601 471</a>
        <LangLink to="/Kontakt">{t('reservation.writeToUs')}</LangLink>
      </div>
    </main>
    <Footer visible={true} />
  </div>
  );
};

export default Reservation;
