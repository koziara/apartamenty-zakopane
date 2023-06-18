import React from 'react'
import { Link } from 'react-router-dom'
import "./bookingButton.css"
import { FaArrowRight } from 'react-icons/fa';

const BookingButton = () => {
  return (
    <div className='booking-button_container'>
      <Link to={"/"}>
        <div className='booking-button'>Rezerwuj online <FaArrowRight className='button-icon'/></div>
      </Link>
    </div>

  )
}

export default BookingButton