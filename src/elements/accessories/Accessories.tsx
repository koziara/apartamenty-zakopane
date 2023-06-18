import React from 'react';
import './accessories.css';

type AccessoryProps = {
    imagePath: string;
    title:string;
}

const Accessories = (props:AccessoryProps) => {
  return (
    <p className='accessory'> <img src={props.imagePath} alt={props.title}/> {props.title} </p>
  )
}

export default Accessories