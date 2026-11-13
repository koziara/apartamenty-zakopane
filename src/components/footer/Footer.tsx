import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { MdPlace } from 'react-icons/md';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useI18n, LangLink } from '../../i18n';
import './footer.css';

type FooterProps = {
  visible: boolean;
}

const socials = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/apartamenty_dolina_strazyska?igsh=MXN2dTFuMm83NXo4Mw==' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100094365950629' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/48607601471' },
];

const Footer = (props: FooterProps) => {
  const { t } = useI18n();
  const moveToApartments = () => {
    const element: HTMLElement | null = document.getElementById("apartments")
    if(element){
        element.scrollIntoView();
    }
}
  if (!props.visible) {
    return (
      <footer className='footer-container'>
        <div className='links_media_container'>
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} className='links_media' href={href} aria-label={label}><Icon /></a>
          ))}
        </div>
        <div className='footer-container_creators visible'><p>©{new Date().getFullYear()} - {t('brand.name')}</p></div>
      </footer>
    )
  }

  return (
    <footer className='site-footer'>
      <div className='site-footer__grid' data-nosnippet>
        <LangLink to='/' className='site-footer__brand' aria-label={t('brand.home')}>
          <img src='/img/logo-dark.svg' alt={t('brand.name')} width={2139} height={973} />
        </LangLink>

        <nav className='site-footer__column' aria-label={t('footer.links')}>
          <h3>{t('footer.links')}</h3>
          <LangLink to={"/"} state={{ scrollTo: 'apartments' }} onClick={moveToApartments}>{t('nav.apartments')}</LangLink>
          <LangLink to={"/Rezerwacje"}>{t('nav.reservations')}</LangLink>
          <LangLink to={"/Kontakt"}>{t('nav.contact')}</LangLink>
        </nav>

        <div className='site-footer__column site-footer__contact'>
          <h3>{t('footer.contact')}</h3>
          <a href='tel:+48607601471'><AiOutlinePhone aria-hidden='true' /><span>+48 607 601 471</span></a>
          <a href='https://wa.me/48607601471'><AiOutlinePhone aria-hidden='true' /><span>{t('footer.englishLabel')} +48 607 601 471</span></a>
          <a href='mailto:biurodolinastrazyska@gmail.com'><FiMail aria-hidden='true' /><span>biurodolinastrazyska@gmail.com</span></a>
          <a href='https://g.co/kgs/cEGJdRs'><MdPlace aria-hidden='true' /><span>Strążyska 4A, 34-500 Zakopane</span></a>
        </div>

        <div className='site-footer__socials'>
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} aria-label={label}><Icon aria-hidden='true' /></a>
          ))}
        </div>
      </div>

      <div className='site-footer__bottom' data-nosnippet>
        <p>
          <span>©{new Date().getFullYear()} {t('brand.name')}</span>
        </p>
      </div>
    </footer>
  )

}

export default Footer
