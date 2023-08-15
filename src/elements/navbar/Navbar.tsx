import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"

const Links = () =>{
  const moveToApartments = () => {
          const element: HTMLElement | null = document.getElementById("apartments")
          if(element){
              element.scrollIntoView();
          }
  }
  return(
    <ul className='navbar-navbar_links'>
      <li><Link to={"/"} onClick={moveToApartments} className='navbar-links hover-underline-animation'>Apartamenty</Link></li>
      <li><Link to={"/Rezerwacje"} className='navbar-links hover-underline-animation'>Rezerwacje</Link></li>
      <li><Link to={"/Kontakt"} className='navbar-links hover-underline-animation'>Kontakt</Link></li>
    </ul>
  )};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='navbar-container'>
      <div className='navbar-logo'>
        <Link to={"/"}>
          <img src='/img/logo.png' alt='Dolina Strazyska' />
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