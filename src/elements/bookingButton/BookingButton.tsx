import React from 'react'
import { Link } from 'react-router-dom'
import "./bookingButton.css"
import { BsArrowRight } from 'react-icons/bs';

const BookingButton = () => {
  return (
    <div className='booking-button_container'>
      <Link to={"/"}>
        <div className='booking-button'>Rezerwuj online <BsArrowRight className='button-icon'/></div>
      </Link>
    </div>

  )
}

export default BookingButton