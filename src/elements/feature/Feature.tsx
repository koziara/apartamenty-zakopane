import React from 'react'
import "./feature.css"

type ListProps = {
    id: number,
    photo: string,
    title: string,
    description: string,
}
const Feature = (props: ListProps) => {
  return (
    <div className='feature-container'>
      <div className='feature-container_photo'>
        <img src={props.photo}/>
      </div>
      <div className='feature-container_info'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Feature