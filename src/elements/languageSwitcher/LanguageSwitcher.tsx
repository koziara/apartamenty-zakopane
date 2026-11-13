import { Lang, languages, useI18n } from '../../i18n';
import './languageSwitcher.css';

// one button per registered language; colours follow the surrounding text colour
const LanguageSwitcher = () => {
  const { lang, setLang, t } = useI18n();

  return (
    <div className='language-switcher' role='group' aria-label={t('language.label')}>
      {(Object.keys(languages) as Lang[]).map(code => (
        <button
          key={code}
          type='button'
          lang={code}
          title={languages[code].name}
          aria-label={languages[code].name}
          aria-pressed={code === lang}
          className={code === lang ? 'is-active' : ''}
          onClick={() => setLang(code)}
        >
          {languages[code].short}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
