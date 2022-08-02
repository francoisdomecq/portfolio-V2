import './AboutMe.css';

import { Cloud } from 'react-icon-cloud';
import { renderCustomIcon } from '../../utils/function';
import { skillsData } from '../../data/skillsData';

function AboutMe() {
    const colour = '#fff';
    const cloudIcons = skillsData.map((i) => renderCustomIcon(i, colour));

    return (
        <section className="container-about-me-background " id="aboutme">
            <h1 className="title-about-me reveal-on-scroll">About me</h1>
            <div className="container">
                <div className="about-text-container reveal-on-scroll ">
                    <p className="about-text">
                        Hi ! My name is François, I am a french student in
                        cognitive sciences. I am passionate about developing
                        software, websites and mobile applications. I dedicate
                        my work to give people the best user experience
                        possible.
                        <br /> <br />
                    </p>
                    <p className="about-text">
                        After two years of preparatory course, I entered in the{' '}
                        <a
                            target={'_blank'}
                            rel="noreferrer"
                            href="https://ensc.bordeaux-inp.fr/fr"
                            className="about-special-text"
                        >
                            Ecole Nationale Supérieure de Cognitique
                        </a>{' '}
                        where I have been introduced to cognitive sciences. It
                        is a domain which combines computer science, and human
                        factors. For my last year out of my 5 years of higher
                        education, I am doing an academic exchange at the{' '}
                        <a
                            target={'_blank'}
                            rel="norefferrer"
                            href="https://uqam.ca/"
                            className="about-special-text"
                        >
                            Université du Quebec à Montréal
                        </a>{' '}
                        to specialize myself in software development.
                        <br />
                        <br />
                    </p>
                    <p className="about-text">
                        In my first and second year, I had the opportunity to
                        lead{' '}
                        <a className="about-special-text" href="#projects">
                            computer science projects
                        </a>{' '}
                        of any kind. It allowed me to discover new languages and
                        to improve my skills as a coder. As a passionate, I am
                        always looking to improve my programming skills.
                        <br />
                        <br />
                    </p>{' '}
                    <p className="about-text">
                        Besides all this, I played handball for 10 years
                        including one year at a national level. I recently
                        discovered my self a passion in motorsports such as
                        formula 1. I'm also a music lover of any kind, mostly
                        rap, but also classical music for example as I am
                        learning the piano as a self learner.
                    </p>
                </div>

                <div className="cloud-container reveal-on-scroll">
                    <Cloud
                        id="skills-canvas"
                        canvasProps={{
                            display: 'flex',
                        }}
                        options={{
                            outlineColour: 'black',
                            outlineRadius: 5,
                            outlineMethod: 'size',
                            clickToFront: 500,
                            fadeIn: 200,
                            imadeMode: 'both',
                            pinchZoom: true,
                            shuffleTags: true,
                            weight: true,
                            zoom: 1.1,
                            zoomMax: 1.5,
                            zoomMin: 1,
                            tooltip: 'native',
                            tooltipDelay: 0,
                            freezeActive: true,
                            shadow: '#000',
                            shadowOffset: [0.5, 0.5],
                        }}
                    >
                        {cloudIcons}
                    </Cloud>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#20202a"
                    fillOpacity="1"
                    d="M0,224L60,234.7C120,245,240,267,360,240C480,213,600,139,720,122.7C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}

export default AboutMe;
