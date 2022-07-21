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
                        During my studies at the ENSC, I have been introduced to
                        cognitive sciences. It is a domain which combines
                        computer science, and human factors. In my first and
                        second year, I had the opportunity to lead computer
                        science projects of any kind (web programming, mobile
                        programming, game programming..). My main programming
                        languages are C# (ASP .Net Core), JavaScript (React,
                        ReactNative, Node.Js) and Python. <br />
                        <br />
                    </p>
                    <p className="about-text">
                        But I am still looking to improve myself as a coder, so
                        I try to constantly learn new things. As a future
                        cognitive engineer, I also have abilities in UX design
                        and human system interface. It led me to master Figma,
                        so I can make mock-ups for my different projects.
                        <br />
                        <br />
                    </p>{' '}
                    <p className="about-text">
                        But I am still looking to improve myself as a coder, so
                        I try to constantly learn new things. As a future
                        cognitive engineer, I also have abilities in UX design
                        and human system interface. It led me to master Figma,
                        so I can make mock-ups for my different projects.
                        <br />
                        <br />
                    </p>{' '}
                    <p className="about-text">
                        But I am still looking to improve myself as a coder, so
                        I try to constantly learn new things. As a future
                        cognitive engineer, I also have abilities in UX design
                        and human system interface. It led me to master Figma,
                        so I can make mock-ups for my different projects.
                        <br />
                        <br />
                    </p>{' '}
                    <p className="about-text">
                        But I am still looking to improve myself as a coder, so
                        I try to constantly learn new things. As a future
                        cognitive engineer, I also have abilities in UX design
                        and human system interface. It led me to master Figma,
                        so I can make mock-ups for my different projects.
                        <br />
                        <br />
                    </p>
                </div>

                <div className="cloud-container reveal-on-scroll">
                    <Cloud
                        id="skills-canvas"
                        canvasProps={{
                            display: 'flex',
                        }}
                        options={{
                            outlineColour: 'aqua',
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
