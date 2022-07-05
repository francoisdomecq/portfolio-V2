import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import MyWork from '../MyWork/MyWork';
import Skills from '../Skills/Skills';

import './App.css';
function App() {
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos > window.innerHeight / 2) {
            document.getElementById('scroller').classList.add('show');
        } else {
            document.getElementById('scroller').classList.remove('show');
        }
    };

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
            <MyWork />
            <Skills />
            <ContactMe />
        </div>
    );
}

export default App;
