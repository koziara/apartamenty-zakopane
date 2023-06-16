import React from 'react'
import "./feature.css"

type ListProps = {
    id: number,
    photo: string,
    title: string,
    description: string,
    className:string,
}
const Feature = (props: ListProps) => {
  const isEven = props.id % 2 === 0;
  const containerClassName = isEven ? 'feature-container evenDiv' : 'feature-container oddDiv';
  
  return (
    <div className={containerClassName}>
      <div className='feature-container_photo'>
        <img src={props.photo} alt={props.title}/>
      </div>
      <div className='feature-container_info'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Feature