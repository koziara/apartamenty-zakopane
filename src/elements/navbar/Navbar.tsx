import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"

const Links = () =>(
    <ul className='navbar-navbar_links'>
      <li><a href='#apartments' className='navbar-links hover-underline-animation'>Apartamenty</a></li>
      <li><Link to={"/Galeria"} className='navbar-links hover-underline-animation'>Galeria</Link></li>
      <li><Link to={"/Kontakt"} className='navbar-links hover-underline-animation'>Rezerwacje</Link></li>
      <li><Link to={"/Kontakt"} className='navbar-links hover-underline-animation'>Kontakt</Link></li>
    </ul>
  );

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='navbar-container'>
      <div className='navbar-logo'>
        <Link to={"/"}>
          <img src='/img/Zakopane_logo_full_cut.png' alt='logo' />
        </Link>
      </div>
      <div className='navbar-links_container'>
        <Links />
      </div>
      <div className="navbar-links_menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div>
              <Links />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar