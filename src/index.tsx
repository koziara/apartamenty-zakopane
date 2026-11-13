import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './motion.css';
import ZakopanePage from './ZakopanePage';
import { BackToTop } from './elements';
import { ErrorPage, ApartmentDetails, Contact, Reservation } from './components';
import { I18nProvider } from './i18n';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['sohis-booking']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <Routes>
          {['', '/en'].map(prefix => (
            <Route key={prefix} path={prefix || '/'}>
              <Route index element={<ZakopanePage />} />
              <Route path="Rezerwacje" element={<Reservation />} />
              <Route path="Apartament/:id" element={<ApartmentDetails />} />
              <Route path="Kontakt" element={<Contact />} />
            </Route>
          ))}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <BackToTop />
      </I18nProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
