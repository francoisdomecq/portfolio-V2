import { useState, useEffect } from 'react';

import ContactCard from '../../components/Contact_Card/Contact_Card';
import './Contact.css';

import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Gmail from '../../assets/gmail.png';

function ContactMe() {
    const [showMessage, setShowMessage] = useState(false);

    function clickMail() {
        navigator.clipboard.writeText('fdomecq@ensc.fr');
        setShowMessage(true);
    }

    useEffect(() => {
        if (showMessage) {
            setInterval(() => {
                setShowMessage(false);
            }, 4000);
        }
    });
    return (
        <section className="container-contact" id="contact">
            <h1 className="title-contact">Contact me !</h1>
            {/*Linkedin Github Gmail  */}
            <div className="contact-cards-container">
                <ContactCard
                    link={
                        'https://www.linkedin.com/in/fran%C3%A7ois-domecq-ba5885205'
                    }
                    text={'in/françois-domecq'}
                    icon={Linkedin}
                    size={120}
                    type={'Linkedin'}
                ></ContactCard>
                <ContactCard
                    link={'https://github.com/francoisdomecq'}
                    text={'francoisdmq'}
                    icon={Github}
                    size={125}
                    type={'Github'}
                ></ContactCard>
                <ContactCard
                    link={
                        'https://www.linkedin.com/in/fran%C3%A7ois-domecq-ba5885205'
                    }
                    text={'fdomecq@ensc.fr'}
                    icon={Gmail}
                    size={165}
                    type={'mail'}
                    clickMail={clickMail}
                ></ContactCard>
            </div>
            {showMessage ? (
                <div
                    className="container-message-clipboard"
                    id="message-clipboard"
                >
                    <div className="text-message-clipboard">
                        The email address was copied into the clipboard !
                    </div>
                    <button
                        className="button-close-message-clipboard"
                        onClick={() => setShowMessage(false)}
                    >
                        <span> &times;</span>
                    </button>
                </div>
            ) : null}
        </section>
    );
}

export default ContactMe;
