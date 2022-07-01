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
                    <a
                        className="LinkText LinkText1 hover-underline-animation"
                        href="#Home"
                    >
                        Home
                    </a>
                </div>
                <div>
                    <a
                        className="LinkText LinkText2 hover-underline-animation"
                        href="#AboutMe"
                    >
                        About me
                    </a>
                </div>
                <a
                    className="LinkText LinkText3 hover-underline-animation"
                    href="#projects"
                >
                    Projects
                </a>
                <a
                    className="LinkText LinkText4 hover-underline-animation"
                    href="#MySkills"
                >
                    My skills
                </a>
                <a
                    className="LinkText LinkText5 hover-underline-animation"
                    href="#Contact"
                >
                    Contact
                </a>
            </div>
        </div>
    );
}

export default header;
