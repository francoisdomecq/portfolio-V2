import { useEffect } from 'react';

import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

import './App.css';
function App() {
    function reveal() {
        var reveals = document.querySelectorAll('.reveal-on-scroll');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 125;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active-on-scroll');
            }
            /*else {
                reveals[i].classList.remove('active-on-scroll');
            } */
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', reveal);
        reveal();
    });

    return (
        <div className="ResponsiveApp">
            {/* <div className="top_scroller_div">
                <button
                    id="scroller"
                    className="top_scroller_button"
                    onClick={() => window.scrollTo({ top: 0 })}
                >
                    <span>Scroll to top</span>
                </button>
            </div> */}
            <Home />
            <AboutMe />
            <Projects />
            <Skills />
            <ContactMe />
        </div>
    );
}

export default App;
