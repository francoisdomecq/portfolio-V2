import './Home.css';
import { useEffect, useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Name from '../../components/Home_Name/Name';

function Home() {
    const [x, setX] = useState();
    const [y, setY] = useState();

    useEffect(() => {
        const update = (e) => {
            setX(e.x);
            setY(e.y);
        };
        window.addEventListener('mousemove', update);
        window.addEventListener('touchmove', update);
        return () => {
            window.removeEventListener('mousemove', update);
            window.removeEventListener('touchmove', update);
        };
    }, [setX, setY]);

    return (
        <section className="Home  " id="home">
            <Name />
            <div
                id="mouseCoord"
                style={{ position: 'absolute', right: 0, bottom: 0 }}
            >
                <span id="mouseX"></span>
                <span id="mouseY"></span>
            </div>
            <div className="ContainerDescription">
                <p className="Description">
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
                    . I am passionate about developing software, websites and
                    mobile applications..
                </p>
            </div>
            <div className="div-button-scroll-about-me">
                <a href="#aboutme">
                    <button className="button-scroll-about-me">About me</button>
                </a>
            </div>

            {/*Ajouter une animation à droite qui lorsque l'on clique dessus redirige vers la page avec un jeu que je dois coder, ajouter leaderbord avec mail */}
        </section>
    );
}

export default Home;
