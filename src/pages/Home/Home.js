import './Home.css';
import { useEffect, useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Name from '../../components/Home_Name/Name';

function Home() {
    const [x, setX] = useState();
    const [y, setY] = useState();

    var MDown = false;
    var Color = 'red';

    useEffect(() => {
        // const update = (e) => {
        //     setX(e.x);
        //     setY(e.y);
        // };
        // window.addEventListener('mousemove', update);
        // window.addEventListener('touchmove', update);

        var Canvas = document.getElementById('canvas');
        
        var Context = Canvas.getContext('2d');
        
        Canvas.onselectstart = function () {
            return false;
        };
        Canvas.unselectable = 'on';
        
        Canvas.style.MozUserSelect = 'none';

        Canvas.onmousedown = function (e) {
            MDown = true;
            Context.strokeStyle = Color;
            Context.lineWidth = 3;
            Context.lineCap = 'round';
            Context.beginPath();
            Context.moveTo(e.pageX - Position(Canvas).left, e.pageY - 5);
        };

        Canvas.onmouseup = function () {
            MDown = false;
        };

        Canvas.onmousemove = function (e) {
            if (MDown) {
                Context.lineTo(e.pageX - Position(Canvas).left, e.pageY - 5);
                Context.stroke();
            }
        };
    });

    function Position(el) {
        var position = { left: 0, top: 0 };
        if (el) {
            if (!isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
                position.left += el.offsetLeft;
                position.top += el.offsetTop;
            }
        }
        return position;
    }

    return (
        <section className="Home  " id="home">
            <Name />
            <canvas className="home-canvas" id="canvas"></canvas>
            {console.log(x, y)}
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
