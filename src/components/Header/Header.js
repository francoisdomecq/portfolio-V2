import './Header.css';

function header() {
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        var navbar = document.getElementById('navbar');
        if (prevScrollpos > currentScrollPos) {
            if (currentScrollPos < 30) {
                navbar.classList.remove('BackgroundRed');
                navbar.classList.add('BackgroundTransparent');
            } else {
                navbar.classList.add('BackgroundRed');
            }
            navbar.style.top = '0';
        } else {
            navbar.style.top = '-10%';
        }
        prevScrollpos = currentScrollPos;
    };

    return (
        <div className="Header" id="navbar">
            {/* <img src={PhotoFR} alt="Profile" className="Profile" /> */}
            <div className="LinksContainer">
                <div>
                    <a className="LinkText1" href="#Home">
                        Home
                    </a>
                </div>
                <div>
                    <a className="LinkText2" href="#AboutMe">
                        About me
                    </a>
                </div>
                <a className="LinkText3" href="#projects">
                    Projects
                </a>
                <a className="LinkText4" href="#MySkills">
                    My skills
                </a>
                <a className="LinkText5" href="#Contact">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default header;
