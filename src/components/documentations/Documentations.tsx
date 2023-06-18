import React from 'react';
import { Documentation } from '../../elements';
import {CgClose} from 'react-icons/cg';
import {HiOutlineDownload} from 'react-icons/hi';
import './documentations.css';

type DocumentsProps = {
    documentations:{
        documentNo:number;
        documentDescription:string;
    }[];
    title:string;
    linkToPDF:string;
    updateContactState: (data: ContactStateType) => void;
}

type ContactStateType = "Regulamin" | "Polityka" | "none";

const Documentations = (props:DocumentsProps) => {

    const handleButtonClick = () => {
        const newData: ContactStateType = "none";
        props.updateContactState(newData);
      };
  return (
    <div className='documentations-container'>
        <div className='documentations-actions'><button onClick={handleButtonClick} ><CgClose /></button><a href={props.linkToPDF} target='_blank' rel="noreferrer"><HiOutlineDownload/></a></div>
        <h1>{props.title}</h1>
        {props.documentations.map(document => (<Documentation key={document.documentNo} documentNo={document.documentNo} documentDescription={document.documentDescription} />))}
    </div>
    

  )
}

export default Documentations