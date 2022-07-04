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
        <section className="Home  " id="Home">
            <Name />
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
            <div className="ContainerAboutButton">
                <button className="Button">
                    <a href="#AboutMe">About me</a>
                </button>
            </div>
        </section>
    );
}

export default Home;
