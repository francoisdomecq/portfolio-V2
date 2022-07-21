import ContactCard from '../../components/Contact_Card/Contact_Card';
import './Contact.css';

import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Gmail from '../../assets/gmail.png';
function ContactMe() {
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
                ></ContactCard>
                <ContactCard
                    link={
                        'https://github.com/francoisdomecq'
                    }
                    text={'francoisdmq'}
                    icon={Github}
                    size={125}
                ></ContactCard>
                <ContactCard
                    link={
                        'https://www.linkedin.com/in/fran%C3%A7ois-domecq-ba5885205'
                    }
                    text={'fdomecq@ensc.fr'}
                    icon={Gmail}
                    size={165}
                ></ContactCard>
            </div>
        </section>
    );
}

export default ContactMe;
