import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Projects_ProjectContainer.css';

function ProjectContainer({ project, setProject }) {
    function addRippleEffect() {
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
    }

    useEffect(() => {
        const containers = document.getElementsByClassName('project-container');
        for (let i = 0; i < containers.length; i++) {
            containers[i].classList.add('load');
        }
        addRippleEffect();
    }, []);

    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="project-container"
            onClick={() => setProject(project)}
        >
            <motion.button layout className="project-container-top myRipple">
                <motion.p layout className="project-name">
                    {project.name}
                </motion.p>
                <motion.img
                    layout
                    className="project-image"
                    src={project.src}
                    alt=""
                />
                <motion.p className="project-description">
                    {project.descriptionEn}
                </motion.p>
            </motion.button>
            <motion.div layout className="project-container-bottom">
                {project.languages.map((language) => {
                    return (
                        <motion.div
                            key={language}
                            className="project-technology-container"
                        >
                            <motion.p className="project-technology">
                                {language}
                            </motion.p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}

export default ProjectContainer;
