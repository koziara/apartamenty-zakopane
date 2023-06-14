import React from 'react'
import { BookingButton, Navbar } from '../../elements'
import "./header.css"

const Header = () => {
  return (
    <div className='header-container'>
        <Navbar />
        <BookingButton/>
    </div>
  )
}

export default Header