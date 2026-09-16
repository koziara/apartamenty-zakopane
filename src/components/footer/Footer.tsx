import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { MdPlace } from 'react-icons/md';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import './footer.css';

type FooterProps = {
  visible: boolean
}

const Footer = (props: FooterProps) => {
  const moveToApartments = () => {
    const element: HTMLElement | null = document.getElementById("apartments")
    if(element){
        element.scrollIntoView();
    }
}
  return (
    <footer className='footer-container'>
      {props.visible ? 
      <><div className='footer-container_map'>
          <img src='/img/map.webp' alt='Location' className='map-big' />
          <img src='/img/map.webp' alt='Location' className='map-small' />
          <img src='/img/map.webp' alt='Location' className='map-extrasmall' />
        </div><div className='footer-container_content'>
            <div className='footer-container_content-links'>
              <h3>Linki</h3>
              <Link to={"/"} onClick={moveToApartments} className='footer-container_content-links-link'>Apartamenty</Link>
              <Link to={"/Rezerwacje"} className='footer-container_content-links-link'>Rezerwacje</Link>
              <Link to={"/Kontakt"} className='footer-container_content-links-link'>Kontakt</Link>
            </div>
            <div className='footer-container_content-contact'>
              <h3>Kontakt</h3>
              <p><AiOutlinePhone size={22} className='contact-icon' /><a className='links' href="https://wa.me/+48607601471"> +48 607 601 471</a></p>
              <p><AiOutlinePhone size={22} className='contact-icon' /><a className='links' href="https://wa.me/+4550258081"> English: +45 50 25 80 81</a></p>
              <p ><FiMail size={20} className='contact-icon' /><a className='links' href= "mailto: biurodolinastrazyska@gmail.com"> biurodolinastrazyska@gmail.com</a></p>
              <p><MdPlace size={22} className='contact-icon' /><a className='links' href='https://g.co/kgs/cEGJdRs'> Strążyska 4A, 34-500 Zakopane</a></p>
            </div>
          </div>
          <div className='links_media_container'><a className='links_media' href='https://www.instagram.com/apartamenty_dolina_strazyska?igsh=MXN2dTFuMm83NXo4Mw=='><FaInstagram /></a><a className='links_media' href='https://www.facebook.com/profile.php?id=100094365950629'><FaFacebook /></a><a className='links_media' href='https://wa.me/+48607601471'><FaWhatsapp /></a></div>
          <div className='footer-container_creators'><p>©2024 - Apartamenty Dolina Strążyska | Created by Natalia Koziara & Jakub Cerovsky</p></div></> :      <>     <div className='links_media_container'><a className='links_media' href='https://www.instagram.com/apartamenty_dolina_strazyska?igsh=MXN2dTFuMm83NXo4Mw=='><FaInstagram /></a><a className='links_media' href='https://www.facebook.com/profile.php?id=100094365950629'><FaFacebook /></a><a className='links_media' href='https://wa.me/+48607601471'><FaWhatsapp /></a></div>
<div className='footer-container_creators visible'><p>©2024 - Apartamenty Dolina Strążyska | Created by Natalia Koziara & Jakub Cerovsky</p></div></>}
    </footer>
  )

}

export default Footer