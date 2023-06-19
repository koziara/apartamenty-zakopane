import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { MdPlace } from 'react-icons/md';
import './footer.css';

type FooterProps = {
  visible: boolean
}

const Footer = (props: FooterProps) => {

  return (
    <footer className='footer-container'>
      {props.visible ? 
      <><div className='footer-container_map'>
          <img src='/img/map.png' alt='Location' className='map-big' />
          <img src='/img/map1000.png' alt='Location' className='map-small' />
          <img src='/img/map500.png' alt='Location' className='map-extrasmall' />
        </div><div className='footer-container_content'>
            <div className='footer-container_content-info'>
              <h3>More About Apartments</h3>
              <p></p>
              <p>- Dorota Koziara, Owner</p>
            </div>
            <div className='footer-container_content-links'>
              <h3>Links</h3>
              <Link to={"/"} className='footer-container_content-links-link'>Apartamenty</Link>
              <Link to={"/Rezerwacje"} className='footer-container_content-links-link'>Rezerwacje</Link>
              <Link to={"/Kontakt"} className='footer-container_content-links-link'>Kontakt</Link>
            </div>
            <div className='footer-container_content-contact'>
              <h3>Contact</h3>
              <p><AiOutlinePhone size={22} className='contact-icon' /> xxxxxxxx</p>
              <p><FiMail size={20} className='contact-icon' /> xxxxxxx@gmail.com</p>
              <p><MdPlace size={22} className='contact-icon' /> xxxxxx,xxx</p>
            </div>
          </div><div className='footer-container_creators'><p>©2023 - Apartamenty Dolina Strążyska | Created by Natalia Koziara & Jakub Cerovsky</p></div></> : <div className='footer-container_creators visible'><p>©2023 - Apartamenty Dolina Strążyska | Created by Natalia Koziara & Jakub Cerovsky</p></div>}
    </footer>
  )

}

export default Footer