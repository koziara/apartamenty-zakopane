import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  
  const apartments: HTMLElement | null = document.getElementById("apartments");

  function scrollToApartments(): void {
    if (apartments) {
      apartments.scrollIntoView(true);
    }
  };
  return (
    <nav className='navbar-container'>
      <div>
        <img src='' alt='logo'/>
        <p>Apartamenty</p>
        <p>Dolina Strążyska</p>
        <Link to={"/"}></Link>
      </div>
        <div>
          <ul className='navbar-navbar_links'>
            <li><button onClick={scrollToApartments} className='navbar-links'>Apartmanty</button></li>
            <li><Link to={"/Galeria"} className='navbar-links'>Galeria</Link></li>
            <li><Link to={"/Kontakt"} className='navbar-links'>Rezervacie</Link></li>
            <li><Link to={"/Kontakt"} className='navbar-links'>Kontakt</Link></li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar