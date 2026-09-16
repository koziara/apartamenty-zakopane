import React, { useState, useEffect } from 'react';
import { BookingButton, Navbar,ScrollToTop } from '../../elements';
import { Documentations, Footer } from '../';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { MdPlace } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';
import './contact.css';

type ContactStateType = "Regulamin" | "Polityka" | "none";

const Contact = () => {
    const [visibleDocument, setVisible] = useState<ContactStateType>("none");

    const updateContactState = (data: ContactStateType) => {
        setVisible(data);
    };

    useEffect(() => {
        if (visibleDocument !== "none") {
            const element: HTMLElement | null = document.getElementById("documentations")
            if(element){
                element.scrollIntoView();
            }
        }
    }, [visibleDocument]);

    return (
        <div>
            <div className='contact-container'>
                <Navbar />
                <ScrollToTop />
                <div className="contact-container_content">
                    <div className='contact-container_content-info'>
                        <h2>Apartamenty Dolina Strążyska</h2>
                        <h3>Skontaktuj się z nami, aby uzyskać więcej informacji</h3>
                        <p><AiOutlinePhone size={22} className='contact-icon' /><a className='links_contacts' href="https://wa.me/+48607601471"> +48 607 601 471</a></p>
                        <p><AiOutlinePhone size={22} className='contact-icon' /><a className='links_contacts' href="https://wa.me/+4550258081"> English: +45 50 25 80 81</a></p>
                        <p ><FiMail size={20} className='contact-icon' /><a className='links_contacts' href= "mailto: biurodolinastrazyska@gmail.com"> biurodolinastrazyska@gmail.com</a></p>
                        <p><MdPlace size={22} className='contact-icon' /><a className='links_contacts' href='https://g.co/kgs/cEGJdRs'> Strążyska 4A, 34-500 Zakopane</a></p>
                        <div className="document-button_container">
                            <button onClick={() => setVisible("Regulamin")}>Regulamin</button>
                            <button onClick={() => setVisible("Polityka")}>Polityka Prywatności</button>
                        </div>
                    </div>
                    <div className='contact-container_content-photos'>
                        <img src='img/map500.webp' alt='Location' />
                    </div>
                </div>
                <div className='contact-booking-btn'>
                    <BookingButton />
                </div>
                {visibleDocument === "none" ? <div className="contact-footer">
                    <Footer visible={false} />
                </div> : <div className="contact-footer arrow">
                    <FaChevronDown size={24} />
                </div>}
            </div>
            {
                visibleDocument === "Regulamin" ?
                    <>
                        <Documentations
                            title={"Regulamin"}
                            begining={"Niniejszy regulamin ma na celu określenie zasad rezerwacji i wynajmu apartamentów Apartamenty Dolina Strążyska oraz warunki pobytu. Dokonanie rezerwacji pobytu w wybranym apartamencie oznacza zaakceptowanie postanowień zawartych w niniejszym regulaminie. Prezentowany regulamin stanowi integralną cześć umowy wynajmu (rezerwacji). Treść regulaminu dostępna jest na stronie www.apartamentydolinastrazyska.pl."}
                            linkToPDF={"pdfs/Regulamin_Website.pdf"}
                            updateContactState={updateContactState}
                        />
                        <Footer visible={true} />
                    </>
                    : visibleDocument === "Polityka" ?
                        <>
                            <Documentations
                                title={"Polityka prywatności"}
                                begining={"prywatne"}
                                linkToPDF={"pdfs/Polityka_Prywatności.pdf"}
                                updateContactState={updateContactState}
                            />
                            <Footer visible={true} />
                        </> : null}

        </div>
    )
}

export default Contact