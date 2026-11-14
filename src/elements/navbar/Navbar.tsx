import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useI18n, LangLink } from '../../i18n';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import "./navbar.css"

const Links = () =>{
  const { t, path } = useI18n();
  const { pathname } = useLocation();
  const moveToApartments = (e: React.MouseEvent) => {
    // already on the home page: scroll in place, otherwise ZakopanePage scrolls after navigation
    if (pathname.replace(/\/$/, '') !== path('/').replace(/\/$/, '')) return;
    e.preventDefault();
    document.getElementById("apartments")?.scrollIntoView({ behavior: 'smooth' });
  }
  return(
    <ul className='navbar-navbar_links'>
      <li><LangLink to={"/"} state={{ scrollTo: "apartments" }} onClick={moveToApartments} className='navbar-links hover-underline-animation'>{t('nav.apartments')}</LangLink></li>
      <li><LangLink to={"/Rezerwacje"} className='navbar-links hover-underline-animation'>{t('nav.reservations')}</LangLink></li>
      <li><LangLink to='/Szlaki' className='navbar-links hover-underline-animation' aria-current={pathname.replace(/\/$/, '') === path('/Szlaki') ? 'page' : undefined}>{t('nearbyTrails.navLabel')}</LangLink></li>
      <li><LangLink to={"/Kontakt"} className='navbar-links hover-underline-animation'>{t('nav.contact')}</LangLink></li>
      <li><LanguageSwitcher /></li>
    </ul>
  )};

// dark = dark logo for light page backgrounds
const Navbar = ({ dark = false }: { dark?: boolean }) => {
  const { t } = useI18n();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState<number>();
  const navRef = useRef<HTMLElement>(null);

  // the bar is fixed, so a placeholder keeps the space it used to take in the page flow
  // (observed, because the logo image loads after the first render and changes the height)
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => { if (window.scrollY < 40) setHeight(nav.offsetHeight); };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(nav);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => { setToggleMenu(false); setClosing(false); }, 180);
  };

  return (
    <div className='navbar-placeholder' style={{ height }} data-nosnippet>
    <nav ref={navRef} className={`navbar-container${scrolled ? ' is-scrolled' : ''}`}>
      <div className='navbar-logo'>
        <LangLink to={"/"}>
          <img src={`/img/logo-${dark ? 'dark' : 'light'}.svg`} alt={t('brand.name')} width={2139} height={973} />
        </LangLink>
      </div>
      <div className='navbar-links_container'>
        <Links />
      </div>
      <div className="navbar-links_menu">
        <button
          type='button'
          className='navbar-toggle'
          aria-label={toggleMenu ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={toggleMenu}
          onClick={() => toggleMenu ? closeMenu() : setToggleMenu(true)}
        >
          {toggleMenu ? <RiCloseLine size={27} /> : <RiMenu3Line size={27} />}
        </button>
        {toggleMenu && (
          <div className={`navbar-menu_container ${closing ? 'scale-down-center' : 'scale-up-center'}`} onClick={closeMenu}>
            <div>
              <Links />
            </div>
          </div>
        )}
      </div>
    </nav>
    </div>
  )
}

export default Navbar
