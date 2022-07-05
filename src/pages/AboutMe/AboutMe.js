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
                    <p>Francois</p>
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
