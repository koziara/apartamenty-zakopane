import React from 'react'
import { useI18n } from '../../i18n';
import './features.css';

const facilities = [
  { key: 'parking', icon: '/img/facility-icons/parking.png' },
  { key: 'wifi', icon: '/img/facility-icons/wifi.png' },
  { key: 'kitchen', icon: '/img/facility-icons/kitchen.png' },
  { key: 'checkin', icon: '/img/facility-icons/checkin.png' },
  { key: 'lounge', icon: '/img/facility-icons/lounge.png' },
  { key: 'playroom', icon: '/img/facility-icons/playroom.png' },
  { key: 'ski', icon: '/img/facility-icons/ski.png' },
  { key: 'trails', icon: '/img/facility-icons/trails.png' },
] as const;

const Features = () => {
  const { t, messages } = useI18n();
  return (
    <section className='facilities-section'>
      <div className='facilities-section__inner'>
        <header className='facilities-section__header'>
          <h2>{t('facilities.title')}</h2>
          <p>{t('facilities.intro')}</p>
        </header>

        <ul className='facilities-grid'>
          {facilities.map(({ key, icon }) => {
            const { title, text } = messages.facilities.items[key];
            return (
            <li key={key}>
              <img className='facilities-grid__icon' src={icon} alt='' draggable={false} />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

export default Features
