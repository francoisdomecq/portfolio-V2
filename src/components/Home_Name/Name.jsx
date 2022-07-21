import { useEffect } from 'react';
import './Name.css';

function Name() {
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
    );
}

export default Name;
