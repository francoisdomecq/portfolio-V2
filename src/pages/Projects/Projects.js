import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectContainer from '../../components/Projects_ProjectContainer/Projects_ProjectContainer';
import Filter from '../../components/Projects_Filter/Project_Filter';

import './Projects.css';

import { projectsData } from '../../data/projects.js';
import GitHubIcon from '../../assets/githubLight.svg';

function Projects() {
    const [selectedFilter, setSelectedFilter] = useState('Default');
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
    }, []);

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
                                    <img
                                        className="page-project-icon"
                                        src={GitHubIcon}
                                        alt="Icon Link to GitHub repository"
                                    />
                                </a>
                            </div>
                            <div className="page-project-technologies"></div>
                            {/*Ou alors truc 3d qui bouge avec les technologies */}
                        </div>
                    </div>
                </div>
            </section>
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
        </section>
    );
}

export default Projects;
