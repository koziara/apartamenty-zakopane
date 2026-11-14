import { useEffect, useId, useRef, useState } from 'react';
import { Lang, languages, useI18n } from '../../i18n';
import './languageSwitcher.css';

const LanguageSwitcher = () => {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', onKey, true);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', onKey, true);
    };
  }, [open]);

  const choose = (code: Lang) => {
    setLang(code);
    setOpen(false);
    trigger.current?.focus();
  };

  return (
    <div className='language-switcher' ref={container} onClick={event => event.stopPropagation()}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }}>
      <button
        ref={trigger}
        className='language-switcher__trigger'
        type='button'
        aria-label={`${t('language.label')}: ${languages[lang].name}`}
        aria-expanded={open}
        aria-controls={panelId}
        title={languages[lang].name}
        onClick={() => setOpen(value => !value)}
      >
        <span aria-hidden='true'>{languages[lang].flag}</span>
      </button>
      {open && (
        <div className='language-switcher__panel' id={panelId} role='group' aria-label={t('language.label')} dir='ltr'>
          {(Object.keys(languages) as Lang[]).map(code => (
            <button
              key={code}
              type='button'
              lang={code}
              title={languages[code].name}
              aria-label={languages[code].name}
              aria-pressed={code === lang}
              onClick={() => choose(code)}
            >
              <span aria-hidden='true'>{languages[code].flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
