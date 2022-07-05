import { useEffect } from 'react';

import './AboutMe.css';

import PhotoFR from '../../assets/PhotoFR.jpg';

function AboutMe() {
    window.addEventListener('scroll', reveal);
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        console.log(reveals);
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    useEffect(() => {
        reveal();
    });
    return (
        <div className="BackgroundAboutMe " id="aboutme">
            <div className="Container">
                <div className="ContainerAbout">
                    <p>
                        Hi There ! My name is François Domecq, I am a french
                        engineering student at the ENSC (Ecole Nationale
                        Supérieure de Cognitique) in Bordeaux.{' '}
                    </p>
                    <p>
                        During my studies at the ENSC, I have been introduced to
                        cognitive sciences. It is a domain which combines
                        computer science, and human factors. In my first and
                        second year, I had the opportunity to lead computer
                        science projects of any kind (web programming, mobile
                        programming, game programming..). My main programming
                        languages are C# (ASP .Net Core), JavaScript (React,
                        ReactNative, Node.Js) and Python. But I am still looking
                        to improve myself as a coder, so I try to constantly
                        learn new things. As a future cognitive engineer, I also
                        have abilities in UX design and human system interface.
                        It led me to master Figma, so I can make mock-ups for my
                        different projects.
                    </p>
                </div>
                <div className="profile-picture-container">
                    <img
                        className="profile-picture "
                        src={PhotoFR}
                        alt="Francois Domecq"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
