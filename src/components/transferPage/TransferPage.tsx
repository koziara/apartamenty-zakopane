import React from 'react';
import { Link } from 'react-router-dom';
import './transferPage.css';

const TransferPage = () => {
  return (
    <div className='transfer-container'>
        <Link to={`/DolinaStrazicka`} className="transfer-container_image transfer-zakopane">
        <h1>Apartameny Dolina Straziska</h1>
            
        </Link>
        <div className="transfer-container_content">
            <h1>Najako</h1>
            <h2>Apartamenty</h2>
            <div className='transfer-line'/>
            <h2>Zarezerwujte teraz!</h2>
        </div>
        <Link to={`/DolinaStrazicka`} className="transfer-container_image transfer-sopot">
        <h1>Apartameny Sopot</h1>
            
        </Link>
    </div>
  )
}

export default TransferPage