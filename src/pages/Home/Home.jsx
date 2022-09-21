import { useEffect } from 'react';

import './Home.css';
import PhotoFrBg from '../../assets/PhotoFRBg.png';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesTemplate from '../../utils/particlesParams';

function Home() {
    const handleInit = async (main) => {
        await loadFull(main);
    };

    useEffect(() => {
        const bouncy = document.querySelectorAll('.bouncing-letter');
        bouncy.forEach((bounce) => {
            bounce.addEventListener('mouseenter', toggleRubberBand);
            function toggleRubberBand(e) {
                bounce.classList.add('bouncing');
                bounce.addEventListener('animationend', () => {
                    bounce.classList.remove('bouncing');
                });
            }
        });
    }, []);

    return (
        <section className="Home" id="home">
            <Particles
                id="particles"
                options={particlesTemplate}
                init={handleInit}
            />

            <div className="container-name">
                <div className="name first">
                    <span className="bouncing-letter" id="h">
                        H
                    </span>
                    <span className="bouncing-letter">i</span>
                    <span className="bouncing-letter">,</span>
                </div>
                <div className="name second">
                    <span className="bouncing-letter">I&nbsp; </span>

                    <span className="bouncing-letter">a</span>
                    <span className="bouncing-letter">m&nbsp; </span>

                    <span className="bouncing-letter">F</span>
                    <span className="bouncing-letter">r</span>
                    <span className="bouncing-letter">a</span>
                    <span className="bouncing-letter">n</span>
                    <span className="bouncing-letter">ç</span>
                    <span className="bouncing-letter">o</span>
                    <span className="bouncing-letter">i</span>
                    <span className="bouncing-letter">s</span>
                    <span className="bouncing-letter">,</span>
                </div>
                <div className="name third">
                    <span className="bouncing-letter">A&nbsp; </span>

                    <span className="bouncing-letter">s</span>
                    <span className="bouncing-letter">o</span>
                    <span className="bouncing-letter">f</span>
                    <span className="bouncing-letter">t</span>
                    <span className="bouncing-letter">w</span>
                    <span className="bouncing-letter">a</span>
                    <span className="bouncing-letter">r</span>
                    <span className="bouncing-letter">e&nbsp; </span>

                    <span className="bouncing-letter">e</span>
                    <span className="bouncing-letter">n</span>
                    <span className="bouncing-letter">g</span>
                    <span className="bouncing-letter">i</span>
                    <span className="bouncing-letter">n</span>
                    <span className="bouncing-letter">e</span>
                    <span className="bouncing-letter">e</span>
                    <span className="bouncing-letter">r</span>
                    <span className="bouncing-letter">.</span>
                </div>
            </div>

            <div className="container-short-description">
                <p className="description">
                    I am a french engineering student in Cognitive sciences at
                    the{' '}
                    <a
                        className="underline--magical"
                        rel="noreferrer"
                        target={'_blank'}
                        href="https://ensc.bordeaux-inp.fr/fr"
                    >
                        Ecole Nationale Supérieure de Cognitique
                    </a>
                    . I am currently looking for a 6 months internship starting
                    in February 2023.
                </p>
            </div>
            <div className="div-button-scroll-about-me">
                <a href="#aboutme">
                    <button className="button-scroll-about-me">
                        <span className="button-scroll-about-me-text">
                            About me
                        </span>
                    </button>
                </a>
            </div>
            <img
                className="photo-fr"
                src={PhotoFrBg}
                alt="François Domecq"
            ></img>
            {/*Ajouter une animation à droite qui lorsque l'on clique dessus redirige vers la page avec un jeu que je dois coder, ajouter leaderbord avec mail */}
        </section>
    );
}

export default Home;
