import { useEffect } from 'react';
import './Projects_ProjectContainer.css';

function ProjectContainer({ project, setProjet }) {
    useEffect(() => {
        let rippleElements = document.getElementsByClassName('myRipple');
        for (var i = 0; i < rippleElements.length; i++) {
            rippleElements[i].onclick = function (e) {
                let X = e.pageX - this.offsetLeft;
                let Y = e.pageY - this.offsetTop;
                let rippleDiv = document.createElement('div');
                rippleDiv.classList.add('ripple');
                rippleDiv.setAttribute(
                    'style',
                    'top:' + Y + 'px; left:' + X + 'px;'
                );
                let customColor = this.getAttribute('ripple-color');
                if (customColor) rippleDiv.style.background = customColor;
                this.appendChild(rippleDiv);
                setTimeout(function () {
                    rippleDiv.parentElement.removeChild(rippleDiv);
                }, 900);
            };
        }
    });

    return (
        <div className="project-container">
            <button className="project-container-top myRipple">
                <p className="project-name">{project.name}</p>
                <img className="project-image" src={project.src} alt="" />
                <p className="project-description">{project.descriptionEn}</p>
            </button>
            <div className="project-container-bottom">
                {project.languages.map((language) => {
                    return (
                        <div className="project-technology-container">
                            <p className="project-technology">{language}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectContainer;
