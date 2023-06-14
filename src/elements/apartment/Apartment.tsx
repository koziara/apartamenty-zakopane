import React from 'react';
import { Link } from 'react-router-dom';
import './apartment.css';
import {LuBedDouble} from 'react-icons/lu';
import {BiArea} from 'react-icons/bi';


type ListProps = {
    id: number;
    photo:string;
    title: string;
    capacity: string;
    size:string;
};

const Apartment = (props:ListProps) => {
  return (
    
    <Link to={`/apartment/${props.id}`} className='apartment-container'>
      <img src={props.photo} />
      <h3>{props.title}</h3>
      <p><LuBedDouble className='apartment-icon'/> Max. Osób: {props.capacity}</p>
      <p><BiArea className='apartment-icon' /> Powierzchnia: {props.size}</p>
    </Link>
  )
}

export default Apartment