import React from 'react'
import { BookingButton, Navbar } from '../../elements'
import "./header.css"

const Header = () => {
  return (
    <div className='header-container'>
        <Navbar />
        <div className='header-container_logo'>
          <BookingButton/>
        </div>
    </div>
  )
}

export default Header