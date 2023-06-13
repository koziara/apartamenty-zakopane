import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
    <header className='header-container'>
      <div>
        <img src='' alt='logo'/>
        <Link to={"/"}></Link>
      </div>
      <nav>
        <div>
          <ul className='header-navbar_links'>
            <li>Apartamenty<Link to={"/"}></Link></li>
            <li>Kontakt<Link to={"/"}></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar