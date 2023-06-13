import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Apartments, Features, Footer } from './components';

function App() {
  return (
    <div className="App">
        <Header />
        <Apartments />
        <Features />
        <Footer />
    </div>
  );
}

export default App;
