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
        </section>
    );
}

export default Experience;
