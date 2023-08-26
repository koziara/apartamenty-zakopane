import ReactDOM from 'react-dom/client';
import {  BrowserRouter,  Route, Routes } from 'react-router-dom';
import './index.css';
import ZakopanePage from './ZakopanePage';
import { ErrorPage, ApartmentDetails, Contact, Reservation } from './components';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ZakopanePage />}>
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path="Rezerwacje" element={<Reservation />} />
        <Route path="Apartament/:id" element={<ApartmentDetails />} />
        <Route path="Kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

reportWebVitals();
