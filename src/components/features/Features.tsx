import React from 'react'
import featureList from '../../featureList.json'
import { Feature } from '../../elements'
import './features.css';

const Features = () => {
  return (
    <div className='features-container'>
      {featureList.map(feature => (
        <Feature key={feature.featureId} id={feature.featureId} title={feature.title} description={feature.description} photo={feature.photo} />
      ))}
    </div>
  )
}

export default Features