import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header, Apartments, Features, Reviews, Footer } from './components';
import { useReveal } from './elements';
import LocationMap from './components/locationMap/LocationMap';
import PageMeta, { SITE_URL } from './seo/PageMeta';
import { lodgingJsonLd } from './seo/structuredData';
import { useI18n } from './i18n';

function App() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { t, lang, intl } = useI18n();
  useReveal();
  useEffect(() => {
    if (!state?.scrollTo) return;
    document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    // router state survives a refresh, so clear it or reloading would scroll here again
    navigate('.', { replace: true, state: null });
  }, [state, navigate]);

  return (
    <div className="App">
        <PageMeta
          title={t('meta.title')}
          description={t('meta.description')}
          path='/'
          jsonLd={lodgingJsonLd(t('brand.name'), t('meta.description'), `${SITE_URL}${lang === 'pl' ? '' : `/${lang}`}/`, intl, {
            parking: t('facilities.items.parking.title'),
            wifi: t('facilities.items.wifi.title'),
          })}
        />
        <Header />
        <Apartments />
        <Features />
        <Reviews />
        <LocationMap />
        <Footer visible={true}/>
    </div>
  );
}

export default App;
