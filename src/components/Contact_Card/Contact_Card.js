import { useEffect } from 'react';

import './Contact_Card.css';
function ContactCard({ icon, link, text, size }) {
    return (
        <a
            className="card-link"
            href={link}
            style={{ '--size': `${size}px` }}
            target="_blank"
            rel="noreferrer"
        >
            <img className="card-icon" src={icon} alt={`${link}`} />
            <div className="card-name">
                <span id={text}>{text}</span>
            </div>
        </a>
    );
}

export default ContactCard;
