import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlinePhone} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';
import {MdPlace} from 'react-icons/md';
import './footer.css';


const Footer = () => {

  const apartments: HTMLElement | null = document.getElementById("apartments");

  function scrollToApartments(): void {
    if (apartments) {
      apartments.scrollIntoView(true);
    }
  }

  return (
    <footer className='footer-container'>
      {/* <div className='footer-container_map'>
        <iframe width="100%" height="400" frameBorder="0" scrolling="no" id="gmap_canvas" src="https://maps.google.com/maps?width=1920&amp;height=400&amp;hl=en&amp;q=Str%C4%85%C5%BCyska%204A%20Zakopane+()&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
      </div> */}
      <div className='footer-container_content'>
        <div className='footer-container_content-info'>
          <h3>More About Apartments</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, facilis, error repellat rerum in laborum, eum est exercitationem eos soluta vel sequi enim. Vel culpa amet soluta ex facilis eveniet.</p>
          <p>- Dorota Koziara, Owner</p>
        </div>
        <div className='footer-container_content-links'>
          <h3>Links</h3>
          <button onClick={scrollToApartments}>Apartamenty</button><br/>
          <button onClick={scrollToApartments}>Galeria</button><br/>
          <button onClick={scrollToApartments}>Rezerwacie</button><br/>
          <button onClick={scrollToApartments}>Kontakt</button>
        </div>
        <div className='footer-container_content-contact'>
          <h3>Contact</h3>
          <p><AiOutlinePhone size={22} className='contact-icon'/> xxxxxxxx</p>
          <p><FiMail size={20} className='contact-icon'/> xxxxxxx@gmail.com</p>
          <p><MdPlace size={22} className='contact-icon'/> xxxxxx,xxx</p>
        </div>
      </div>
      <div className='footer-container_creators'><p>©2023 - Apartamenty Dolina Strążyska | Created by Natalia Koziara & Jakub Cerovsky</p></div>
    </footer>
  )

}

export default Footer