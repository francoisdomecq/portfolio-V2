import AboutMe from '../AboutMe/AboutMe';
import Home from '../Home/Home';
import MyWork from '../MyWork/MyWork';

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
            <div className="scrollToTopButton">
                <button
                    id="scroller"
                    className="button"
                    onClick={() => window.scrollTo({ top: 0 })}
                >
                    <span>Scroll to top</span>
                </button>
            </div>
            <Home />
            <AboutMe />
            <MyWork />
        </div>
    );
}

export default App;
