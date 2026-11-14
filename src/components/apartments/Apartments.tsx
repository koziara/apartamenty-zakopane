import React from 'react';
import { LuUsers, LuWifi, LuCar } from 'react-icons/lu';
import apartmentList from '../../lists/apartmentList.json';
import { Apartment } from '../../elements';
import { useI18n } from '../../i18n';
import './apartments.css';

const MountainIcon = () => <img src='/img/icon-mountain.png' alt='' draggable={false} />;

const maxCapacity = Math.max(...apartmentList.map(apartment => Number(apartment.capacity)));

const Apartments = () => {
  const { t, apartment: apartmentText } = useI18n();
  const facts = [
    { icon: LuUsers, label: t('apartmentsSection.facts.capacity', { count: maxCapacity }) },
    { icon: LuWifi, label: t('apartmentsSection.facts.wifi') },
    { icon: LuCar, label: t('apartmentsSection.facts.parking') },
    { icon: MountainIcon, label: t('apartmentsSection.facts.trails') },
  ];
  return (
    <section className='apartments-section' id='apartments'>
      <div className='apartments-section__inner'>
        <header className='apartments-section__header'>
          <img className='apartments-section__mountains' src='/img/mountains.webp' alt='' aria-hidden='true' />
          <h2>{t('apartmentsSection.title')}</h2>
          <p>
            {t('apartmentsSection.intro')}
          </p>
          <ul className='apartments-section__facts'>
            {facts.map(({ icon: Icon, label }) => (
              <li key={label}><Icon aria-hidden='true' /> {label}</li>
            ))}
          </ul>
        </header>

        <div className='apartments-grid'>
          {apartmentList.map((apartment, index) => {
            const text = apartmentText(apartment.apartmentId);
            return (
            <Apartment
              key={apartment.apartmentId}
              id={apartment.apartmentId}
              index={index + 1}
              title={text.title}
              capacity={apartment.capacity}
              photos={[
                apartment.photo, apartment.photo2, apartment.photo3, apartment.photo4,
                apartment.photo5, apartment.photo6, apartment.photo7,
              ].filter((photo): photo is string => typeof photo === 'string' && photo.length > 0)}
              size={text.size}
              highlight={apartment.highlightIcon ? { label: text.highlight, icon: apartment.highlightIcon } : undefined}
            />
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Apartments
