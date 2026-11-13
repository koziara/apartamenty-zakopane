import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './ZakopanePage';
import { I18nProvider, languages } from './i18n';
import apartments from './lists/apartmentList.json';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: jest.fn().mockImplementation(() => ({ matches: true })),
  });
  Object.defineProperty(window, 'ResizeObserver', {
    configurable: true,
    value: class {
      observe() {}
      disconnect() {}
    },
  });
});

test('renders all six apartments and switches the home page to English', () => {
  render(
    <MemoryRouter>
      <I18nProvider><App /></I18nProvider>
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { level: 1, name: 'Twoje miejsce w Zakopanem' })).toBeInTheDocument();
  expect(document.querySelectorAll('.apartment-container')).toHaveLength(6);

  fireEvent.click(screen.getByRole('button', { name: 'English' }));

  expect(screen.getByRole('heading', { level: 1, name: 'Your place in Zakopane' })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('en');
  expect(document.querySelector('.apartment-container[href="/en/Apartament/6"]')).toBeInTheDocument();
});

test('every listed apartment has text and matching photo descriptions in both languages', () => {
  for (const { messages } of Object.values(languages)) {
    expect(messages.documents.privacy.trim().length).toBeGreaterThan(0);
    for (const apartment of apartments) {
      expect(messages.apartments[apartment.apartmentId]?.title).toBeTruthy();
      const photos = [apartment.photo, apartment.photo2, apartment.photo3, apartment.photo4,
        apartment.photo5, apartment.photo6, apartment.photo7].filter(Boolean);
      expect(messages.photoAlts[apartment.apartmentId]).toHaveLength(photos.length);
    }
  }
});
