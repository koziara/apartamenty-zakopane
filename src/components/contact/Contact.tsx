import React, { useState, useEffect } from 'react';
import { BookingButton, Navbar,ScrollToTop } from '../../elements';
import { Documentations, Footer } from '../index.js';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { MdPlace } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';
import privacyPolicyList from '../../lists/privacyPolicy.json';
import ruleList from '../../lists/rules.json';
import './contact.css';

type ContactStateType = "Regulamin" | "Polityka" | "none";

const Contact = () => {
    const [visibleDocument, setVisible] = useState<ContactStateType>("none");

    const updateContactState = (data: ContactStateType) => {
        setVisible(data);
    };

    useEffect(() => {
        if (visibleDocument !== "none") {
            const element: HTMLElement | null = document.getElementById("documentations");
            if (element) {
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
                        <p><AiOutlinePhone size={22} className='contact-icon' /> xxxxxxxx</p>
                        <p><FiMail size={20} className='contact-icon' /> xxxxxxx@gmail.com</p>
                        <p><MdPlace size={22} className='contact-icon' /> xxxxxx,xxx</p>
                        <div className="document-button_container">
                            <button onClick={() => setVisible("Regulamin")}>Regulamin</button>
                            <button onClick={() => setVisible("Polityka")}>Polityka Prywatności</button>
                        </div>
                    </div>
                    <div className='contact-container_content-photos'>
                        <img src='img/map500.png' alt='Location' />
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
                            documentations={ruleList}
                            title={"Regulamin"}
                            linkToPDF={"img/map.png"}
                            updateContactState={updateContactState}
                        />
                        <Footer visible={true} />
                    </>
                    : visibleDocument === "Polityka" ?
                        <>
                            <Documentations
                                documentations={privacyPolicyList}
                                title={"Polityka Prywatności"}
                                linkToPDF={"img/map.png"}
                                updateContactState={updateContactState}
                            />
                            <Footer visible={true} />
                        </> : null}

        </div>
    )
}

export default Contact