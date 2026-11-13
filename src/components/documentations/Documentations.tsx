import React from 'react';
import { Documentation } from '../../elements';
import type { DocumentType } from '../../elements/documentation/Documentation';
import { useI18n } from '../../i18n';
import {CgClose} from 'react-icons/cg';
import './documentations.css';

type DocumentsProps = {
    type: DocumentType;
    updateContactState: (data: ContactStateType) => void;
}


type ContactStateType = "terms" | "privacy" | "none";

const Documentations = (props:DocumentsProps) => {
    const { messages } = useI18n();

    const handleButtonClick = () => {
        const newData: ContactStateType = "none";
        props.updateContactState(newData);
      };
  return (
    <div className='documentations-container' id='documentations'>
        <div className='documentations-actions'><button type="button" onClick={handleButtonClick} aria-label={messages.documents.close}><CgClose aria-hidden="true" /></button></div>
        <h1>{props.type === 'terms' ? messages.documents.termsTitle : messages.documents.privacyTitle}</h1>
        <Documentation type={props.type} />
    </div>
    

  )
}

export default Documentations
