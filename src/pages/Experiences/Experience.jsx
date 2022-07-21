import ExperienceCard from '../../components/Experience_ExperienceCard/ExperienceCard';
import './Experience.css';
import { experiences } from '../../data/experiences';
function Experience() {
    return (
        <section className="section-experience" id="experience">
            <h1 className="section-experience-title reveal-on-scroll">
                My experiences
            </h1>
            <div className="experiences-container">
                {experiences.map((experience) => {
                    return (
                        <ExperienceCard
                            key={experience.company}
                            company={experience.company}
                            duration={experience.duration}
                            place={experience.place}
                            job={experience.job}
                            technologies={experience.technologies}
                            description={experience.description}
                            imageLink={experience.imageLink}
                            siteLink={experience.siteLink}
                            imageUrl={experience.imageUrl}
                        />
                    );
                })}
            </div>
            <p>
                I'm looking for more experience ! So don't hesitate to{' '}
                <a style={{ color: 'black' }} href="#contact">
                    Contact me
                </a>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#f0f3f5"
                    fill-opacity="1"
                    d="M0,256L1440,192L1440,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}

export default Experience;
