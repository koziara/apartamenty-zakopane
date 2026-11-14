import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider, languages, Lang } from '../../i18n';
import NearbyTrails from './NearbyTrails';

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

const renderAt = (url: string) => render(
  <MemoryRouter initialEntries={[url]}>
    <I18nProvider><NearbyTrails /></I18nProvider>
  </MemoryRouter>
);

test.each(Object.keys(languages) as Lang[])('%s renders all eight translated trails and the supplied notes', lang => {
  renderAt(lang === 'pl' ? '/Szlaki' : `/${lang}/Szlaki`);
  const copy = languages[lang].messages.nearbyTrails;
  const cards = screen.getAllByRole('article');
  expect(cards).toHaveLength(8);
  expect(copy.items).toHaveLength(8);
  cards.forEach((card, index) => {
    const trail = copy.items[index];
    expect(within(card).getByRole('heading', { level: 3 })).toHaveTextContent(trail.name);
    expect(card).toHaveTextContent(trail.description);
    expect(card).toHaveTextContent(trail.difficulty);
    expect(card).toHaveTextContent(trail.duration);
    expect(card).toHaveTextContent(trail.via);
    expect(within(card).getByRole('link')).toHaveAttribute('target', '_blank');
  });
  expect(screen.getByText(copy.timeNote)).toBeInTheDocument();
  expect(screen.getByText(copy.conditionsNote)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: copy.parkInfo })).toHaveAttribute('href', 'https://tpn.gov.pl/');
  expect(document.title).toBe(copy.metaTitle);
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', copy.metaDescription);
  expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', copy.metaTitle);
  expect(document.querySelector('meta[property="og:description"]')).toHaveAttribute('content', copy.metaDescription);
  expect(document.querySelector('meta[name="twitter:title"]')).toHaveAttribute('content', copy.metaTitle);
  expect(document.querySelector('meta[name="twitter:description"]')).toHaveAttribute('content', copy.metaDescription);
});

test('switching to Arabic and back updates the trails, page controls and direction', () => {
  renderAt('/en/Szlaki');
  expect(screen.getByRole('heading', { name: 'Strążyska Valley' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Language: English' }));
  fireEvent.click(screen.getByRole('button', { name: 'العربية' }));
  expect(screen.getByRole('heading', { name: 'وادي سترونجيسكا (Dolina Strążyska)' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Strążyska Valley' })).not.toBeInTheDocument();
  expect(document.documentElement.dir).toBe('rtl');
  expect(screen.getAllByRole('link', { name: 'مسارات قريبة' })[0]).toHaveAttribute('href', '/ar/Szlaki');
  expect(screen.getByRole('link', { name: 'استعرض الشقق' })).toHaveAttribute('href', '/ar/');
  fireEvent.click(screen.getByRole('button', { name: `${languages.ar.messages.language.label}: العربية` }));
  fireEvent.click(screen.getByRole('button', { name: 'Polski' }));
  expect(screen.getByRole('heading', { name: 'Dolina Strążyska' })).toBeInTheDocument();
  expect(document.documentElement.dir).toBe('ltr');
});
