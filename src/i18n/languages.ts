import type { DayPickerProps } from 'react-day-picker';
import { pl as plDateLocale } from 'date-fns/locale/pl';
import { enGB } from 'date-fns/locale/en-GB';
import { sk as skDateLocale } from 'date-fns/locale/sk';
import { hu as huDateLocale } from 'date-fns/locale/hu';
import { cs as csDateLocale } from 'date-fns/locale/cs';
import { de as deDateLocale } from 'date-fns/locale/de';
import { uk as ukDateLocale } from 'date-fns/locale/uk';
import { lt as ltDateLocale } from 'date-fns/locale/lt';
import { lv as lvDateLocale } from 'date-fns/locale/lv';
import { ar as arDateLocale } from 'date-fns/locale/ar';
import pl from './locales/pl';
import en from './locales/en';
import sk from './locales/sk.json';
import hu from './locales/hu.json';
import cs from './locales/cs.json';
import de from './locales/de.json';
import uk from './locales/uk.json';
import lt from './locales/lt.json';
import lv from './locales/lv.json';
import ar from './locales/ar.json';
import languageConfig from './languageConfig.json';
import type { Messages } from './types';

type LanguageDefinition = {
  name: string;          // shown in the switcher's tooltip
  short: string;         // shown on the switcher button
  intl: string;          // BCP 47 tag for dates, numbers and plural rules
  direction: string;
  dateLocale: DayPickerProps['locale'];    // react-day-picker calendar locale
  messages: Messages;
};

// The supplied JSON files omit legal document bodies. Keep the existing English
// documents until approved translations are provided; all other keys are required.
type Translation = Omit<Messages, 'documents'> & {
  documents: Omit<Messages['documents'], 'terms' | 'privacy'> & Partial<Pick<Messages['documents'], 'terms' | 'privacy'>>;
};
const withDocuments = (messages: Translation): Messages => ({
  ...messages,
  documents: { ...en.documents, ...messages.documents },
});

// Shared metadata also drives static routes and sitemap generation in postbuild.
export const languages = {
  pl: { ...languageConfig.pl, dateLocale: plDateLocale, messages: pl },
  en: { ...languageConfig.en, dateLocale: enGB, messages: en },
  sk: { ...languageConfig.sk, dateLocale: skDateLocale, messages: withDocuments(sk) },
  hu: { ...languageConfig.hu, dateLocale: huDateLocale, messages: withDocuments(hu) },
  cs: { ...languageConfig.cs, dateLocale: csDateLocale, messages: withDocuments(cs) },
  de: { ...languageConfig.de, dateLocale: deDateLocale, messages: withDocuments(de) },
  uk: { ...languageConfig.uk, dateLocale: ukDateLocale, messages: withDocuments(uk) },
  lt: { ...languageConfig.lt, dateLocale: ltDateLocale, messages: withDocuments(lt) },
  lv: { ...languageConfig.lv, dateLocale: lvDateLocale, messages: withDocuments(lv) },
  ar: { ...languageConfig.ar, dateLocale: arDateLocale, messages: withDocuments(ar) },
} satisfies Record<string, LanguageDefinition>;

export type Lang = keyof typeof languages;

export const DEFAULT_LANG: Lang = 'pl';

export const isLang = (value: unknown): value is Lang =>
  typeof value === 'string' && Object.prototype.hasOwnProperty.call(languages, value);
