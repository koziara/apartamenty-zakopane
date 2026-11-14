import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { I18nProvider, useI18n } from './I18nProvider';
import { languages, Lang } from './languages';
import type { PluralMessage } from './types';
import LanguageSwitcher from '../elements/languageSwitcher/LanguageSwitcher';

const Probe = () => {
  const { t, tp, path, dateLocale, lang } = useI18n();
  const location = useLocation();
  return <>
    <LanguageSwitcher />
    <h1>{t('hero.titleLine1')}</h1>
    <output data-testid='url'>{location.pathname + location.search + location.hash}</output>
    <a href={path('/Rezerwacje')}>Book</a>
    <span data-testid='plural'>{tp('rooms.guests', 5)}</span>
    <span data-testid='calendar'>{dateLocale === languages[lang].dateLocale ? 'localized' : 'missing'}</span>
  </>;
};

const renderAt = (url: string) => render(
  <MemoryRouter initialEntries={[url]}><I18nProvider><Probe /></I18nProvider></MemoryRouter>
);

const openSwitcher = () => fireEvent.click(screen.getByRole('button', { expanded: false }));

test.each(Object.keys(languages) as Lang[])('%s URLs load translated messages, plurals and calendars', lang => {
  renderAt(lang === 'pl' ? '/' : `/${lang}/`);
  const language = languages[lang];
  expect(screen.getByRole('heading')).toHaveTextContent(language.messages.hero.titleLine1);
  expect(screen.getByRole('button', { expanded: false })).toHaveAccessibleName(`${language.messages.language.label}: ${language.name}`);
  openSwitcher();
  expect(screen.getByRole('group')).toHaveAccessibleName(language.messages.language.label);
  expect(screen.getByRole('button', { name: language.name })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getAllByRole('button')).toHaveLength(11);
  expect(document.documentElement.lang).toBe(lang);
  expect(document.documentElement.dir).toBe(language.direction);
  expect(screen.getByRole('link')).toHaveAttribute('href', lang === 'pl' ? '/Rezerwacje' : `/${lang}/Rezerwacje`);
  expect(screen.getByTestId('calendar')).toHaveTextContent('localized');
  const forms: PluralMessage = language.messages.rooms.guests;
  const category = new Intl.PluralRules(language.intl).select(5);
  expect(screen.getByTestId('plural')).toHaveTextContent((forms[category] ?? forms.other).replace('{count}', '5'));
});

test('switching languages preserves apartment, booking dates and anchor, and resets RTL', () => {
  renderAt('/de/Apartament/3?dateFrom=2026-12-10&dateTo=2026-12-14#details');
  openSwitcher();
  fireEvent.click(screen.getByRole('button', { name: 'العربية' }));
  expect(screen.getByTestId('url')).toHaveTextContent('/ar/Apartament/3?dateFrom=2026-12-10&dateTo=2026-12-14#details');
  expect(document.documentElement.dir).toBe('rtl');
  openSwitcher();
  fireEvent.click(screen.getByRole('button', { name: 'Polski' }));
  expect(screen.getByTestId('url')).toHaveTextContent('/Apartament/3?dateFrom=2026-12-10&dateTo=2026-12-14#details');
  expect(document.documentElement.dir).toBe('ltr');
});

test('the flag dropdown closes on Escape and outside clicks', () => {
  renderAt('/');
  openSwitcher();
  screen.getByRole('button', { name: 'Deutsch' }).focus();
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.queryByRole('group')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { expanded: false })).toHaveFocus();
  openSwitcher();
  fireEvent.pointerDown(document.body);
  expect(screen.queryByRole('group')).not.toBeInTheDocument();
});

const placeholders = (text: string) => Array.from(text.matchAll(/\{\w+\}/g), match => match[0]).sort();

// Catch incomplete imports and lost interpolation variables anywhere in the supplied files.
test('translations preserve required keys and interpolation variables', () => {
  const check = (source: any, translated: any) => {
    if (typeof source === 'string') {
      expect(typeof translated).toBe('string');
      expect(translated.trim()).not.toBe('');
      expect(placeholders(translated)).toEqual(placeholders(source));
    } else if (Array.isArray(source)) {
      expect(translated).toHaveLength(source.length);
      source.forEach((item, index) => check(item, translated[index]));
    } else if (typeof source.other === 'string') {
      expect(translated.other).toBeTruthy();
      Object.values(translated).forEach(form => check(source.other, form));
    } else {
      Object.keys(source).forEach(key => {
        expect(translated).toHaveProperty([key]);
        check(source[key], translated[key]);
      });
    }
  };
  Object.values(languages).forEach(language => check(languages.en.messages, language.messages));
});

test('all website messages use ordinary hyphens instead of long dashes', () => {
  const check = (value: unknown) => {
    if (typeof value === 'string') {
      expect(value).not.toMatch(/[\u2013\u2014]/);
    } else if (value && typeof value === 'object') {
      Object.values(value).forEach(check);
    }
  };
  Object.values(languages).forEach(language => check(language.messages));
});
