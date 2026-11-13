import type { DayPickerProps } from 'react-day-picker';
import { pl as plDateLocale } from 'date-fns/locale/pl';
import { enGB } from 'date-fns/locale/en-GB';
import pl from './locales/pl';
import en from './locales/en';
import type { Messages } from './types';

type LanguageDefinition = {
  name: string;          // shown in the switcher's tooltip
  short: string;         // shown on the switcher button
  intl: string;          // BCP 47 tag for dates, numbers and plural rules
  dateLocale: DayPickerProps['locale'];    // react-day-picker calendar locale
  messages: Messages;
};

// To add a language: create src/i18n/locales/<code>/ (copy en/) and add one line here
export const languages = {
  pl: { name: 'Polski', short: 'PL', intl: 'pl-PL', dateLocale: plDateLocale, messages: pl },
  en: { name: 'English', short: 'EN', intl: 'en-GB', dateLocale: enGB, messages: en },
} satisfies Record<string, LanguageDefinition>;

export type Lang = keyof typeof languages;

export const DEFAULT_LANG: Lang = 'pl';

export const isLang = (value: unknown): value is Lang =>
  typeof value === 'string' && Object.prototype.hasOwnProperty.call(languages, value);
