import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { FiArrowRight, FiCheck, FiChevronLeft, FiChevronRight, FiMaximize, FiMinimize, FiUsers } from 'react-icons/fi';
import list from '../../lists/apartmentList.json';
import accessoryList from '../../lists/accessoryList.json';
import { Navbar, Room, ScrollToTop} from '../../elements';
import type { Arrangement } from '../../elements/room/Room';
import { useI18n, LangLink } from '../../i18n';
import { Footer } from '../';
import ErrorPage from '../errorPage/ErrorPage';
import PageMeta, { SITE_URL, shorten } from '../../seo/PageMeta';
import { apartmentJsonLd } from '../../seo/structuredData';
import ApartmentDescription from './ApartmentDescription';
import ApartmentEquipment from './ApartmentEquipment';
import 'react-image-gallery/styles/css/image-gallery.css';
import './apartmentDetails.css';
import './apartmentOverview.css';

type Item = {
  apartmentId: number;
  sohisRoomId?: number;
  photo: string;
  capacity: string;
  noOfRooms: number;
  price: number;
};

const ApartmentDetails = () => {
  const { t, tp, lang, intl, photoAlt, apartment: apartmentText } = useI18n();
  const { id } = useParams<{ id: string }>();
  const apartmentId = id ? parseInt(id, 10) : null;
  const apartment = list.find((item: Item) => item.apartmentId === apartmentId);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setIsWideScreen(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



  if (!apartment) {
    return <ErrorPage />;
  }
    const sohisRoomId = (apartment as Item).sohisRoomId;
    const text = apartmentText(apartment.apartmentId);
    const amenities = [
      t('details.amenities.bathroom'),
      t('details.amenities.kitchen'),
      t('details.amenities.parking'),
      ...(apartment.balcony ? [t('details.amenities.balcony')] : []),
      tp('details.amenities.rooms', apartment.noOfRooms),
    ];
    const mountainView = accessoryList.find(accessory => accessory.accessoryId === 10);
    const images = [
      apartment.photo, apartment.photo2, apartment.photo3, apartment.photo4,
      apartment.photo5, apartment.photo6, apartment.photo7,
    ].filter((photo): photo is string => typeof photo === 'string' && photo.length > 0)
      .map((photo, index) => ({
        original: photo,
        thumbnail: photo,
        originalTitle: text.title,
        originalAlt: photoAlt(apartment.apartmentId, index, text.title),
        thumbnailAlt: t('details.thumbnailAlt', { title: text.title, number: index + 1 }),
      }));
    return (

      <div>
        <PageMeta
          title={t('meta.apartmentTitle', { title: text.title })}
          description={shorten(text.description.split('\n\n')[0])}
          path={`/Apartament/${apartment.apartmentId}`}
          image={apartment.photo}
          jsonLd={apartmentJsonLd(apartment, text, `${SITE_URL}${lang === 'pl' ? '' : `/${lang}`}/Apartament/${apartment.apartmentId}`, intl)}
        />
        <div className='details-container'>
          <Navbar />
          <ScrollToTop />
          <div className="details-container_content">
            <div className='details-container_content-photos apartment-gallery-card'>
              <ImageGallery
                items={images}
                additionalClass='apartment-gallery'
                showPlayButton={false}
                thumbnailPosition={isWideScreen > 1200 ? 'right' : 'bottom'}
                renderLeftNav={(onClick, disabled) => (
                  <button type='button' className='apartment-gallery__nav apartment-gallery__nav--previous' onClick={onClick} disabled={disabled} aria-label={t('details.previousPhoto')}>
                    <FiChevronLeft aria-hidden='true' />
                  </button>
                )}
                renderRightNav={(onClick, disabled) => (
                  <button type='button' className='apartment-gallery__nav apartment-gallery__nav--next' onClick={onClick} disabled={disabled} aria-label={t('details.nextPhoto')}>
                    <FiChevronRight aria-hidden='true' />
                  </button>
                )}
                renderFullscreenButton={(onClick, isFullscreen) => (
                  <button type='button' className='apartment-gallery__fullscreen' onClick={onClick} aria-label={isFullscreen ? t('details.closeFullscreen') : t('details.openFullscreen')} aria-pressed={isFullscreen}>
                    {isFullscreen ? <FiMinimize aria-hidden='true' /> : <FiMaximize aria-hidden='true' />}
                  </button>
                )}
              />
            </div>
            <section className='apartment-summary' aria-labelledby='apartment-title'>
              <h1 id='apartment-title'>{text.title}</h1>
              <ul className='apartment-summary__facts' aria-label={t('details.factsLabel')}>
                <li><FiUsers aria-hidden='true' /><span>{t('details.capacity', { count: apartment.capacity })}</span></li>
                <li><FiMaximize aria-hidden='true' /><span>{text.size}</span></li>
                {mountainView && <li><img src='/img/icon-mountain.png' alt='' aria-hidden='true' draggable={false} /><span>{t('details.mountainView')}</span></li>}
              </ul>
              <ul className='apartment-summary__features' aria-label={t('details.amenitiesLabel')}>
                {amenities.map(amenity => <li key={amenity}><FiCheck aria-hidden='true' /><span>{amenity}</span></li>)}
              </ul>
              <div className='apartment-summary__reservation'>
                <p className='apartment-summary__price'>
                  <span>{t('details.priceFrom')}</span><strong>{t('common.price', { price: apartment.price.toLocaleString(intl) })}</strong><span>{t('details.perNight')}</span>
                </p>
                <p className='apartment-summary__direct'>{t('details.directBooking')}</p>
                <LangLink to={sohisRoomId ? `/Rezerwacje?id_room=${sohisRoomId}` : '/Rezerwacje'} className='apartment-summary__booking'>{t('details.bookOnline')} <FiArrowRight aria-hidden='true' /></LangLink>
              </div>
            </section>
          </div>
        </div>
        <section className='apartment-overview' aria-labelledby='apartment-overview-heading'>
          <div className='apartment-overview__inner'>
            <header className='apartment-overview__description'>
              <h2 id='apartment-overview-heading'>{t('details.about')}</h2>
              <ApartmentDescription key={apartment.apartmentId} description={text.description} />
            </header>
            <section className='apartment-overview__block' aria-labelledby='sleeping-heading'>
              <h3 id='sleeping-heading'>{t('details.sleeping')}</h3>
              <Room capacity={Number(apartment.capacity)} arrangements={apartment.sleepingArrangements as Arrangement[]} />
            </section>
            <section className='apartment-overview__block' aria-labelledby='amenities-heading'>
              <h3 id='amenities-heading'>{t('details.whatYouFind')}</h3>
              <ApartmentEquipment groups={text.equipment} />
            </section>
          </div>
        </section>
        <Footer visible={true}/>
      </div>
    )
}

export default ApartmentDetails
