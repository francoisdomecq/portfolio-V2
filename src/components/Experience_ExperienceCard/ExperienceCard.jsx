import './ExperienceCard.css';

function ExperienceCard({
    company,
    duration,
    place,
    job,
    technologies,
    description,
    imageLink,
    imageUrl,
    siteLink,
}) {
    return (
        <div
            className="experience-card-container reveal-on-scroll"
            style={{ '--image': `${imageUrl}` }}
        >
            <div className="experience-card-informations">
                <div className="experience-card-title">
                    <p>{duration}</p> .<p>{job}</p>
                </div>
                <div className="experience-card-company">
                    <p>
                        {company} - {place}
                    </p>
                </div>
                <div className="experience-card-description">{description}</div>
                <div className="experience-card-technologies">
                    <p>{technologies}</p>
                </div>
            </div>
            <div className="experience-card-image" id="image-card">
                <a href={siteLink} target={'_blank'} rel="noreferrer">
                    <img className="experience-image" src={imageLink} />
                </a>
            </div>
        </div>
    );
}

export default ExperienceCard;
