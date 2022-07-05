import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            if (window.innerWidth > 900) {
                var currentScrollPos = window.pageYOffset;
                var navbar = document.getElementById('navbar');
                if (prevScrollpos > currentScrollPos) {
                    if (currentScrollPos < 100) {
                        navbar.classList.remove('background-color');
                        navbar.classList.add('background-transparent');
                    } else {
                        navbar.classList.add('background-color');
                    }
                    navbar.style.top = '0';
                } else {
                    if (currentScrollPos <= 100) {
                        navbar.classList.add('background-color');
                    } else {
                        navbar.style.top = '-10%';
                    }
                }
                prevScrollpos = currentScrollPos;
            }
        };
    });

    return (
        <nav
            className={`navbar ${showLinks ? 'show-nav' : 'none'}`}
            id="navbar"
        >
            <ul className="navbar_links">
                <li className="navbar_item slideInDown-1">
                    <a
                        className="navbar_link navbar_link1 hover-underline-animation"
                        href="#home"
                        onClick={() => setShowLinks()}
                    >
                        Home
                    </a>
                </li>
                <li className="navbar_item slideInDown-2">
                    <a
                        className="navbar_link navbar_link2 hover-underline-animation"
                        href="#aboutme"
                        onClick={() => setShowLinks()}
                    >
                        About me
                    </a>
                </li>
                <li className="navbar_item slideInDown-3">
                    <a
                        className="navbar_link navbar_link3 hover-underline-animation"
                        href="#projects"
                        onClick={() => setShowLinks()}
                    >
                        Projects
                    </a>
                </li>
                <li className="navbar_item slideInDown-4">
                    <a
                        className="navbar_link navbar_link4 hover-underline-animation"
                        href="#skills"
                        onClick={() => setShowLinks()}
                    >
                        My skills
                    </a>
                </li>
                <li className="navbar_item slideInDown-5">
                    <a
                        className="navbar_link navbar_link5 hover-underline-animation"
                        href="#contact"
                        onClick={() => setShowLinks()}
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
