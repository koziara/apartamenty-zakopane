import React from 'react';
import { Header, Apartments, Features, Footer } from './components';

function App() {
  return (
    <div className="App">
        <Header />
        <Apartments />
        <Features />
        <Footer visible={true}/>
    </div>
  );
}

export default App;
