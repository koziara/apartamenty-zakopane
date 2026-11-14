import React from 'react'
import "./bookingButton.css"
import { FaArrowRight } from 'react-icons/fa';
import { useI18n, LangLink } from '../../i18n';

const BookingButton = () => {
  const { t } = useI18n();
  return (
    <div className='booking-button_container'>
      <LangLink to={"/Rezerwacje"}><div className='booking-button'>{t('common.bookOnline')} <FaArrowRight className='button-icon'/></div></LangLink>
    </div>

  )
}

export default BookingButton