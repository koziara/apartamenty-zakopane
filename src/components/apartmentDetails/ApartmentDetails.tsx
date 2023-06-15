import React from 'react';
import { useParams } from 'react-router-dom';
import list from '../../apartmentList.json';
import { BookingButton, Navbar } from '../../elements';
import {Footer} from '../index.js';
import './apartmentDetails.css';

type Item = {
  apartmentId: number; 
  photo: string; 
  title: string; 
  capacity: string; 
  size: string;
}

const ApartmentDetails = () => {

  const { id } = useParams<{ id: string }>();
  const apartmentId = id ? parseInt(id, 10) : null;
  const product = list.find((item:Item) => item.apartmentId === apartmentId);

  if (!product) {
    return <div>
      <Navbar />
      Loading... {id}
      </div>;
  }
  else{
  return (

    <div>
          <div className='details-container'>
            <Navbar />
            <div className="details-container_content">
              <div className='details-container_content-photos'>
                <img src={product.photo} alt="" />
              </div>
              <div className='details-container_content-info'>
                <h2>{product.title}</h2>
                <BookingButton />
              </div>
            </div>


          </div>
          <Footer />
    </div>
  )
}
}

export default ApartmentDetails