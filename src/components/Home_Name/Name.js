import { useEffect } from 'react';
import './Name.css';

function Name() {
    useEffect(() => {
        const bouncy = document.querySelectorAll('.BouncingLetter');
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
        <div className="ContainerName">
            <div className="Name first">
                <span className="BouncingLetter" id="h">
                    H
                </span>
                <span className="BouncingLetter">i</span>
                <span className="BouncingLetter">,</span>
            </div>
            <div className="Name second">
                <span className="BouncingLetter">I&nbsp; </span>

                <span className="BouncingLetter">a</span>
                <span className="BouncingLetter">m&nbsp; </span>

                <span className="BouncingLetter">F</span>
                <span className="BouncingLetter">r</span>
                <span className="BouncingLetter">a</span>
                <span className="BouncingLetter">n</span>
                <span className="BouncingLetter">ç</span>
                <span className="BouncingLetter">o</span>
                <span className="BouncingLetter">i</span>
                <span className="BouncingLetter">s</span>
                <span className="BouncingLetter">,</span>
            </div>
            <div className="Name third">
                <span className="BouncingLetter">A&nbsp; </span>

                <span className="BouncingLetter">s</span>
                <span className="BouncingLetter">o</span>
                <span className="BouncingLetter">f</span>
                <span className="BouncingLetter">t</span>
                <span className="BouncingLetter">w</span>
                <span className="BouncingLetter">a</span>
                <span className="BouncingLetter">r</span>
                <span className="BouncingLetter">e&nbsp; </span>

                <span className="BouncingLetter">e</span>
                <span className="BouncingLetter">n</span>
                <span className="BouncingLetter">g</span>
                <span className="BouncingLetter">i</span>
                <span className="BouncingLetter">n</span>
                <span className="BouncingLetter">e</span>
                <span className="BouncingLetter">e</span>
                <span className="BouncingLetter">r</span>
                <span className="BouncingLetter">.</span>
            </div>
        </div>
    );
}

export default Name;
