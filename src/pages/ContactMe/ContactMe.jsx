import ContactCard from '../../components/Contact_Card/Contact_Card';
import './Contact.css';

import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Gmail from '../../assets/gmail.png';

function ContactMe() {
    function refreshInterval() {
        return setTimeout(() => {
            document
                .getElementById('message-clipboard')
                .classList.remove('message-clipboard-shown');
        }, 2000);
    }

    function clickMail() {
        navigator.clipboard.writeText('fdomecq@ensc.fr');
        const element = document.getElementById('message-clipboard');
        const isElementVisible = element.classList.contains(
            'message-clipboard-shown'
        );

        if (!isElementVisible) {
            element.classList.add('message-clipboard-shown');
        }
        refreshInterval();
    }

    function deleteMessage() {
        document
            .getElementById('message-clipboard')
            .classList.remove('message-clipboard-shown');
    }

    return (
        <section className="container-contact" id="contact">
            <h1 className="title-contact reveal-on-scroll">Contact me !</h1>
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

            <div className="container-message-clipboard" id="message-clipboard">
                <div className="text-message-clipboard">
                    The email address was copied into the clipboard !
                </div>
                <button
                    className="button-close-message-clipboard"
                    onClick={() => {
                        deleteMessage();
                    }}
                >
                    <span> &times;</span>
                </button>
            </div>

            <div className="end-text">
                I hope you enjoyed your journey on my website. Thank you for
                reading to the end !
            </div>
        </section>
    );
}

export default ContactMe;
