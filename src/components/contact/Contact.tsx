import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiCalendar, FiChevronDown, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Navbar, ScrollToTop } from '../../elements';
import PageMeta from '../../seo/PageMeta';
import { Documentations, Footer } from '../';
import { useI18n, LangLink } from '../../i18n';
import './contact.css';

type ContactStateType = 'terms' | 'privacy' | 'none';
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Strążyska 4A, 34-500 Zakopane, Polska')}`;

const Contact = () => {
    const { t } = useI18n();
    const [visibleDocument, setVisibleDocument] = useState<ContactStateType>('none');
    const documentTrigger = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (visibleDocument !== 'none') {
            document.getElementById('contact-documents')?.scrollIntoView({
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                block: 'start',
            });
        }
    }, [visibleDocument]);

    const toggleDocument = (document: ContactStateType, trigger: HTMLButtonElement) => {
        documentTrigger.current = trigger;
        setVisibleDocument(current => current === document ? 'none' : document);
    };

    const updateContactState = (document: ContactStateType) => {
        setVisibleDocument(document);
        if (document === 'none') documentTrigger.current?.focus();
    };

    return (
        <div className="contact-page">
            <PageMeta title={t('meta.contactTitle')} description={t('meta.contactDescription')} path='/Kontakt' />
            <Navbar dark />
            <ScrollToTop />
            <main className="contact-page__main">
                <header className="contact-page__intro">
                    <h1>{t('contact.title')}</h1>
                    <p>{t('contact.intro')}</p>
                </header>
                <div className="contact-page__grid">
                    <section className="contact-page__details" aria-labelledby="contact-details-heading">
                        <h2 id="contact-details-heading">{t('contact.detailsTitle')}</h2>
                        <p className="contact-page__muted">{t('contact.detailsIntro')}</p>
                        <div className="contact-page__channels">
                            <a className="contact-page__channel" href="tel:+48607601471">
                                <span className="contact-page__icon"><FiPhone aria-hidden="true" /></span>
                                <span><span className="contact-page__label">{t('contact.phone')}</span><span className="contact-page__value">+48 607 601 471</span></span>
                                <FiArrowUpRight className="contact-page__channel-arrow" aria-hidden="true" />
                            </a>
                            <a className="contact-page__channel" href="https://wa.me/48607601471" target="_blank" rel="noopener noreferrer">
                                <span className="contact-page__icon"><FaWhatsapp aria-hidden="true" /></span>
                                <span><span className="contact-page__label">WhatsApp · {t('contact.englishChannel')}</span><span className="contact-page__value">+48 607 601 471</span></span>
                                <FiArrowUpRight className="contact-page__channel-arrow" aria-hidden="true" />
                            </a>
                            <a className="contact-page__channel" href="mailto:biurodolinastrazyska@gmail.com">
                                <span className="contact-page__icon"><FiMail aria-hidden="true" /></span>
                                <span><span className="contact-page__label">{t('contact.email')}</span><span className="contact-page__value contact-page__email">biurodolinastrazyska@gmail.com</span></span>
                                <FiArrowUpRight className="contact-page__channel-arrow" aria-hidden="true" />
                            </a>
                        </div>
                        <div className="contact-page__socials">
                            <span>{t('contact.follow')}</span>
                            <div>
                                <a href="https://www.instagram.com/apartamenty_dolina_strazyska?igsh=MXN2dTFuMm83NXo4Mw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram aria-hidden="true" /></a>
                                <a href="https://www.facebook.com/profile.php?id=100094365950629" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF aria-hidden="true" /></a>
                                <a href="https://wa.me/48607601471" target="_blank" rel="noopener noreferrer" aria-label={t('contact.whatsappPolish')}><FaWhatsapp aria-hidden="true" /></a>
                            </div>
                        </div>
                    </section>
                    <section className="contact-page__location" aria-labelledby="contact-location-heading">
                        <div className="contact-page__location-heading">
                            <span className="contact-page__icon"><FiMapPin aria-hidden="true" /></span>
                            <div><h2 id="contact-location-heading">{t('contact.locationTitle')}</h2><p>Strążyska 4A, 34-500 Zakopane</p></div>
                        </div>
                        <a className="contact-page__map" href="https://g.co/kgs/cEGJdRs" target="_blank" rel="noopener noreferrer" aria-label={t('contact.openMapAria')}>
                            <img src="/img/map.webp" alt={t('contact.mapAlt')} width="1890" height="863" />
                            <span>{t('contact.openMap')} <FiArrowUpRight aria-hidden="true" /></span>
                        </a>
                        <div className="contact-page__directions">
                            <p>{t('contact.locationText')}</p>
                            <a className="contact-page__button" href={directionsUrl} target="_blank" rel="noopener noreferrer">{t('contact.directions')} <FiArrowUpRight aria-hidden="true" /></a>
                        </div>
                    </section>
                </div>
                <section className="contact-page__booking" aria-labelledby="contact-booking-heading">
                    <div className="contact-page__booking-copy">
                        <FiCalendar aria-hidden="true" />
                        <div><h2 id="contact-booking-heading">{t('contact.planTitle')}</h2><p>{t('contact.planText')}</p></div>
                    </div>
                    <LangLink className="contact-page__button" to="/Rezerwacje">{t('common.checkAvailability')} <FiArrowUpRight aria-hidden="true" /></LangLink>
                </section>
                <div className="contact-page__documents">
                    <div>
                        <button type="button" aria-expanded={visibleDocument === 'terms'} aria-controls="contact-documents" onClick={event => toggleDocument('terms', event.currentTarget)}>{t('documents.termsTitle')} <FiChevronDown aria-hidden="true" /></button>
                        <button type="button" aria-expanded={visibleDocument === 'privacy'} aria-controls="contact-documents" onClick={event => toggleDocument('privacy', event.currentTarget)}>{t('documents.privacyTitle')} <FiChevronDown aria-hidden="true" /></button>
                    </div>
                </div>
                <div id="contact-documents" hidden={visibleDocument === 'none'}>
                    {visibleDocument !== 'none' && <Documentations
                        type={visibleDocument}
                        updateContactState={updateContactState}
                    />}
                </div>
            </main>
            <Footer visible={true} />
        </div>
    );
};

export default Contact;
