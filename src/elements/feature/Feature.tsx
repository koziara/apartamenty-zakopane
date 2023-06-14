import React from 'react'

type ListProps = {
    id: number,
    photo: string,
    title: string,
    description: string,
}
const Feature = (props: ListProps) => {
  return (
    <div className='feature-container'>
      <div><img src={props.photo}/></div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Feature