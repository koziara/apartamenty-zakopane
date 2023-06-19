import React from 'react';
import "./reservation.css"

const Reservation = () => {
  return (
    <div className='reservation-container'><iframe 
	id="sohis_iframe"
	 width="100%"
	height="100%" 
	src="https://booking.sohis.pl/stepOne.html?lang=pl&id_place=698&step=1&date_from=2022-09-12&date_to=2022-09-14&pcount=2&lang=pl">
    </iframe></div>
  )
}

export default Reservation