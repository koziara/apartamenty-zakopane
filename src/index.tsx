import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter,  RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import { ErrorPage, ApartmentDetails, Contact, Reservation } from './components';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Rezerwacje",
    element: <Reservation />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Apartament/:id",
    element: <ApartmentDetails />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Kontakt",
    element: <Contact />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
