import React from 'react';
import { Documentation } from '../../elements';
import {CgClose} from 'react-icons/cg';
import {HiOutlineDownload} from 'react-icons/hi';
import './documentations.css';
import PolitykaPrywatnosci from '../../elements/documentation/PolitykaPrywatnosci';

type DocumentsProps = {
    title:string;
    begining:string,
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
    <div className='documentations-container' id='documentations'>
        <div className='documentations-actions'><button onClick={handleButtonClick} ><CgClose /></button><a href={props.linkToPDF} target='_blank' rel="noreferrer"><HiOutlineDownload/></a></div>
        <h1>{props.title}</h1>
        {props.title==="Regulamin"?<Documentation/>:<PolitykaPrywatnosci/>}
    </div>
    

  )
}

export default Documentations