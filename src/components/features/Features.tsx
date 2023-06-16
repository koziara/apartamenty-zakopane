import React from 'react'
import featureList from '../../featureList.json'
import { Feature } from '../../elements'
import {FaWifi, FaParking, FaBath} from 'react-icons/fa';
import {TbToolsKitchen2} from 'react-icons/tb';

import './features.css';

const Features = () => {
  return (
    <div className='features-container'>
            <div className='features-icons'>
        <FaWifi />
        <FaParking />
        <TbToolsKitchen2 />
        <FaBath />
      </div>
      <div className='line'/>
      <h1>Dostęp do zakwaterowania dla wszystkich</h1>
      {featureList.map(feature => (
        <Feature key={feature.featureId} id={feature.featureId} title={feature.title} description={feature.description} photo={feature.photo} className={feature.featureId % 2 === 1 ? "evenDiv" : "oddDiv"}/>
      ))}

<div className='line'/>
    </div>
  )
}

export default Features