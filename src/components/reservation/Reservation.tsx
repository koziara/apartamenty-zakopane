import React from 'react';
import "./reservation.css"
import {Footer} from '../';
import { Navbar, ScrollToTop } from '../../elements';

const Reservation = () => {
  return (
    <div className='reservation-container'>
      <Navbar />
       <ScrollToTop />
      <iframe
      id="sohis_iframe"
      title='Rezervacje'
      src="https://booking.sohis.pl/stepOne.html?lang=pl&id_place=698&step=1&date_from=2022-09-12&date_to=2022-09-14&pcount=2&lang=pl">
    </iframe>
    <div className="reservation-footer"><Footer visible={false} /></div>
    </div>
  )
}

export default Reservation