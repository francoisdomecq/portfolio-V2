import './Contact_Card.css';

function ContactCard({ icon, link, text, size, type, clickMail }) {
    return type === 'mail' ? (
        <>
            <div
                className="card-link reveal-on-scroll"
                style={{ '--size': `${size}px`, cursor: 'pointer' }}
                onClick={() => clickMail()}
            >
                <img className="card-icon" src={icon} alt={`${link}`} />
                <div className="card-name">
                    <span id={text}>{text}</span>
                </div>
            </div>
        </>
    ) : (
        <a
            className="card-link reveal-on-scroll"
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
