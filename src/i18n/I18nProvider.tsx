import { ComponentProps, createContext, ReactNode, useCallback, useContext, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { DayPickerProps } from 'react-day-picker';
import { DEFAULT_LANG, Lang, languages } from './languages';
import type { ApartmentText, Messages, MessagePath, PluralMessage, PluralPath } from './types';

type Vars = Record<string, string | number>;

type I18n = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  path: (to: string) => string;
  messages: Messages;
  intl: string;
  direction: 'ltr' | 'rtl';
  dateLocale: DayPickerProps['locale'];
  t: (path: MessagePath, vars?: Vars) => string;
  tp: (path: PluralPath, count: number, vars?: Vars) => string;
  apartment: (id: number) => ApartmentText;
  photoAlt: (id: number, index: number, title: string) => string;
};

const I18nContext = createContext<I18n | null>(null);

// the language lives in the URL: the default language has no prefix, every other one gets /<code>
const langFromPath = (pathname: string): Lang => {
  const first = pathname.split('/')[1];
  return first !== DEFAULT_LANG && Object.prototype.hasOwnProperty.call(languages, first) ? first as Lang : DEFAULT_LANG;
};

const withLang = (lang: Lang, to: string) => {
  if (lang === DEFAULT_LANG || !to.startsWith('/')) return to;
  return to === '/' ? `/${lang}/` : to.startsWith('/?') ? `/${lang}/${to.slice(1)}` : `/${lang}${to}`;
};

const stripLang = (pathname: string) => {
  const lang = langFromPath(pathname);
  return lang === DEFAULT_LANG ? pathname : pathname.slice(lang.length + 1) || '/';
};

const lookup = (messages: unknown, path: string) =>
  path.split('.').reduce<any>((node, key) => node?.[key], messages);

const fill = (text: string, vars?: Vars) =>
  vars ? text.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match)) : text;

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const lang = langFromPath(pathname);

  const setLang = useCallback((next: Lang) => {
    navigate(withLang(next, stripLang(pathname)) + search + hash);
  }, [navigate, pathname, search, hash]);

  const value = useMemo<I18n>(() => {
    const { messages, intl, dateLocale } = languages[lang];
    const direction = languages[lang].direction === 'rtl' ? 'rtl' : 'ltr';
    const fallback = languages[DEFAULT_LANG].messages;
    // a key missing from a translation falls back to the default language instead of showing nothing
    const find = (path: string) => lookup(messages, path) ?? lookup(fallback, path);
    const plural = new Intl.PluralRules(intl);

    return {
      lang,
      setLang,
      path: to => withLang(lang, to),
      messages,
      intl,
      direction,
      dateLocale,
      apartment: id => messages.apartments[id] ?? fallback.apartments[id],
      photoAlt: (id, index, title) => {
        const description = messages.photoAlts[id]?.[index] ?? fallback.photoAlts[id]?.[index];
        return description ? `${title} - ${description}` : title;
      },
      t: (path, vars) => fill(find(path) as string, vars),
      tp: (path, count, vars) => {
        const forms = find(path) as PluralMessage;
        return fill(forms[plural.select(count)] ?? forms.other, { count, ...vars });
      },
    };
  }, [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = languages[lang].direction;
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used inside <I18nProvider>');
  return context;
};

// <Link> that keeps the visitor in the current language
export const LangLink = ({ to, ...rest }: Omit<ComponentProps<typeof Link>, 'to'> & { to: string }) => {
  const { path } = useI18n();
  return <Link to={path(to)} {...rest} />;
};
