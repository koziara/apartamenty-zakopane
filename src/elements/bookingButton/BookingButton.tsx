import React from 'react'
import { Link } from 'react-router-dom'
import "./bookingButton.css"
import { BsArrowRight } from 'react-icons/bs';

const BookingButton = () => {
  return (
    <div className='booking-button'>
      <button>Rezerwuj online <BsArrowRight className='button-icon'/>
        <Link to={"/"}></Link>
      </button>
    </div>
  )
}

export default BookingButton