import React from 'react';
import { useI18n } from '../../i18n';
import './documentation.css';

export type DocumentType = 'terms' | 'privacy';

const Documentation = ({ type }: { type: DocumentType }) => {
  const { messages } = useI18n();
  return (
    <div className='document-container'>
      <pre>{messages.documents[type]}</pre>
    </div>
  );
};

export default Documentation;
