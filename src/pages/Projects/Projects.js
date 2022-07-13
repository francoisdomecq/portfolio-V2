import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TweenLite, Linear, TimelineLite } from 'gsap/gsap-core';

import ProjectContainer from '../../components/Projects_ProjectContainer/Projects_ProjectContainer';
import Filter from '../../components/Projects_Filter/Project_Filter';

import './Projects.css';

import { projectsData } from '../../data/projects.js';
import GitHubIcon from '../../assets/githubLight.svg';
import reactIcon from '../../assets/React.svg';
import TypeScript from '../../assets/typescript.svg';
import gsap from 'gsap';

function Projects() {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    async function selectProject(project) {
        await setSelectedProject(project);

        const element = document.getElementById('SelectedProject');
        element.classList.add('reveal-selected-project', 'project-slide-in');
        const height = element.offsetTop;
        window.scrollTo(0, height - 10);
    }

    async function resetProject() {
        await setSelectedProject(null);
        const element = document.getElementsByClassName('reveal-on-scroll');
        for (let i = 0; i < element.length; i++) {
            element[i].classList.toggle('active-on-scroll');
        }
        const project = document.getElementById('SelectedProject');
        await project.classList.remove('project-slide-in');
        await project.classList.add('project-slide-out');
    }

    useEffect(() => {
        setProjects(projectsData);
        setFilteredProjects(projectsData);
        // if (selectedProject) {
        //     moveImages();
        // }
    }, [selectedProject]);

    function random(max) {
        return Math.random() * max;
    }

    function moveImages() {
        var images = document.getElementsByClassName('page-project-icon');
        var container = document.getElementById('page-project-technologies');
        container.addEventListener('mouseenter', () => {
            for (let i = 0; i < images.length; i++) {
                console.log(
                    'container',
                    container.getBoundingClientRect().width,
                    container.getBoundingClientRect().height
                );
                console.log('images', images[i].clientHeight);
                const position = images[i].offsetTop;
                images[i].animate(
                    {
                        top:
                            random(
                                container.getBoundingClientRect().height / 2
                            ) -
                            images[i].getBoundingClientRect().height +
                            'px',
                        left:
                            random(
                                container.getBoundingClientRect().width / 2
                            ) -
                            images[i].getBoundingClientRect().width +
                            'px',
                    },
                    {
                        duration: 5000,
                        iterations: Infinity,
                    }
                );
            }
        });

        // var object = document.getElementsByClassName('page-project-icon');
        // console.log(object);
        // const element = document.getElementById('page-project-technologies');

        // console.log(element);
        // for (let i = 0; i < object.length; i++) {
        //     var x = Math.floor(Math.random() * element.clientWidth);

        //     var y = Math.floor(Math.random() * element.clientHeight);
        //     object[i].style.top =
        //         object[i].getBoundingClientRect().y + y + 'px';
        //     object[i].style.left = x + 'px';
        // }
    }

    return selectedProject ? (
        <section className="page-projects">
            <section className="page-project " id="SelectedProject">
                <div className="page-project-back-button">
                    <span onClick={() => resetProject()}>&#8249; Go back</span>
                    {/* <p style={{ color: 'white' }}>{selectedProject.name}</p> */}
                </div>
                <div className="page-project-content-container">
                    <div className="page-project-slider-container">
                        <p>aha</p>
                    </div>

                    <div className="page-project-description-container">
                        <div className="page-project-description">
                            <h1 className="page-project-title">Description</h1>
                            <p className="page-project-description-text ">
                                {selectedProject.descritptionLongueFr}
                            </p>
                        </div>
                        <div className="page-project-bottom-container">
                            <div className="page-project-informations">
                                <h1 className="page-project-title">
                                    Complementary informations
                                </h1>
                                <p className="page-project-description-text">
                                    Développement Frontend
                                </p>
                                <div className="page-project-separator" />
                                <p className="page-project-description-text">
                                    Durée
                                </p>
                                <div className="page-project-separator" />
                                <p className="page-project-description-text">
                                    Equipe
                                </p>
                                <div className="page-project-separator" />
                                <a
                                    rel="noreferrer"
                                    href={selectedProject.github}
                                    target="_blank"
                                    alt="Lien vers le dépôt github"
                                >
                                    {/* <img
                                        className="page-project-icon"
                                        src={GitHubIcon}
                                        alt="Icon Link to GitHub repository"
                                    /> */}
                                </a>
                            </div>
                            <div
                                className="page-project-technologies"
                                id="page-project-technologies"
                                onClick={() => moveImages()}
                            >
                                {/* <div className="icons-container"> */}
                                <img
                                    className="page-project-icon "
                                    src={TypeScript}
                                />
                                <img
                                    className="page-project-icon "
                                    src={reactIcon}
                                />
                                <img
                                    className="page-project-icon "
                                    src={TypeScript}
                                />
                                <img
                                    className="page-project-icon "
                                    src={reactIcon}
                                />
                                {/* </div> */}
                            </div>
                            {/*Ou alors truc 3d qui bouge avec les technologies */}
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#191919"
                    fill-opacity="1"
                    d="M0,256L1440,192L1440,320L0,320Z"
                ></path>
            </svg>
        </section>
    ) : (
        <section className="page-projects" id="projects">
            <h1 className="title-projects reveal-on-scroll">My projects</h1>

            <Filter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                projects={projects}
                setFilteredProjects={setFilteredProjects}
            />
            <div className="container-projects reveal-on-scroll">
                <AnimatePresence>
                    {filteredProjects.map((project) => {
                        return (
                            <ProjectContainer
                                key={project.name}
                                project={project}
                                setProject={selectProject}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#191919"
                    fill-opacity="1"
                    d="M0,256L1440,192L1440,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}

export default Projects;
