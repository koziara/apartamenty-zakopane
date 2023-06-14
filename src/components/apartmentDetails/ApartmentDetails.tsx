import React from 'react';
import { useParams } from 'react-router-dom';
import list from '../../apartmentList.json';
import { Navbar } from '../../elements';

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
          <Navbar />
          {product.title}
          </div>
  )
}
}

export default ApartmentDetails