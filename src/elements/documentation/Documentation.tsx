import React from 'react';
import './documentation.css';

type DocumentProps ={
    documentNo:number;
    documentDescription:string;
}

const Documentation = (props:DocumentProps) => {
  return (
    <div className='document-container'>
        <p><span className="document-numbering">{props.documentNo}.</span> {props.documentDescription}</p>
    </div>
  )
}

export default Documentation