import './Home.css';
import Name from '../../components/Home_Name/Name';
import PhotoFrBg from '../../assets/PhotoFRBg.png';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesTemplate from '../../utils/particlesParams';

function Home() {
    const handleInit = async (main) => {
        await loadFull(main);
    };
    return (
        <section className="Home" id="home">
            <Particles
                id="particles"
                options={particlesTemplate}
                init={handleInit}
            />

            <Name />
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
                    . I am passionate about developing software, websites and
                    mobile applications..
                </p>
            </div>
            <div className="div-button-scroll-about-me">
                <a href="#aboutme">
                    <button className="button-scroll-about-me">About me</button>
                </a>
            </div>
            <img className="photo-fr" src={PhotoFrBg}></img>
            {/*Ajouter une animation à droite qui lorsque l'on clique dessus redirige vers la page avec un jeu que je dois coder, ajouter leaderbord avec mail */}
        </section>
    );
}

export default Home;
