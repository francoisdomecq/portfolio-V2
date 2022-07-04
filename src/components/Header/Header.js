import { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setMenuState] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        if (window.innerWidth > 900) {
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
        }
    };

    function openMenu() {
        const menu = document.getElementById('LinksCont');
        var navbar = document.getElementById('navbar');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
            setMenuState(false);
        } else {
            menu.style.display = 'flex';
            setMenuState(true);
        }
    }

    return (
        <nav
            className={`navbar ${showLinks ? 'show-nav' : 'none'}`}
            id="navbar"
        >
            <ul className="navbar_links">
                <li className="navbar_item">
                    <a
                        className="navbar_link navbar_link1 hover-underline-animation"
                        href="#Home"
                    >
                        Home
                    </a>
                </li>
                <li className="navbar_item">
                    <a
                        className="navbar_link navbar_link2 hover-underline-animation"
                        href="#AboutMe"
                    >
                        About me
                    </a>
                </li>
                <li className="navbar_item">
                    <a
                        className="navbar_link navbar_link3 hover-underline-animation"
                        href="#projects"
                    >
                        Projects
                    </a>
                </li>
                <li className="navbar_item">
                    <a
                        className="navbar_link navbar_link4 hover-underline-animation"
                        href="#MySkills"
                    >
                        My skills
                    </a>
                </li>
                <li className="navbar_item">
                    <a
                        className="navbar_link navbar_link5 hover-underline-animation"
                        href="#Contact"
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <button className="navbar_burger" onClick={() => handleShowLinks()}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    );
}

export default Header;
