import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { I18nProvider } from '../../i18n';
import ApartmentDetails from './ApartmentDetails';

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: false,
    addListener() {},
    removeListener() {},
  }));
});

test('gallery labels are translated on load and update after changing language', () => {
  render(
    <MemoryRouter initialEntries={['/de/Apartament/1']}>
      <I18nProvider>
        <Routes><Route path='/:lang/Apartament/:id' element={<ApartmentDetails />} /></Routes>
      </I18nProvider>
    </MemoryRouter>
  );
  expect(screen.getByRole('navigation', { name: 'Fotonavigation' })).toBeInTheDocument();
  expect(document.querySelector('[aria-label^="Go to Slide "]')).toBeNull();
  const firstPhoto = document.querySelector('[data-gallery-photo="1"]');
  expect(firstPhoto).toHaveAttribute('aria-label', 'Foto 1 von 7');
  fireEvent.click(screen.getByRole('button', { name: 'Sprache: Deutsch' }));
  fireEvent.click(screen.getByRole('button', { name: 'English' }));
  expect(screen.getByRole('navigation', { name: 'Photo navigation' })).toBeInTheDocument();
  expect(firstPhoto).toHaveAttribute('aria-label', 'Photo 1 of 7');
  expect(document.querySelector('[aria-label^="Go to Slide "]')).toBeNull();
});
