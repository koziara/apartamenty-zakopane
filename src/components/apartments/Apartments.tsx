import React from 'react';
import apartmentList from '../../apartmentList.json';
import {Apartment} from '../../elements'
import './apartments.css';

const Apartments = () => {
  return (
    <div className='apartments-container' id='apartments'>
      {apartmentList.map(apartment =>(
          <Apartment key={apartment.apartmentId} id={apartment.apartmentId} title={apartment.title} capacity={apartment.capacity} photo={apartment.photo} size={apartment.size}/>
      ))}
    </div>
  )
}

export default Apartments