import React from 'react';
import { useI18n } from '../../i18n';
import './documentation.css';

export type DocumentType = 'terms' | 'privacy';

const Documentation = ({ type }: { type: DocumentType }) => {
  const { messages, lang } = useI18n();
  const documentLang = lang === 'pl' ? 'pl' : 'en';
  return (
    <div className='document-container'>
      <pre lang={documentLang} dir='ltr'>{messages.documents[type]}</pre>
    </div>
  );
};

export default Documentation;
