import React from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import ProjectContainer from '../../components/Projects_ProjectContainer/Projects_ProjectContainer';
import Filter from '../../components/Projects_Filter/Project_Filter';
import Carousel, {
    CarouselItem,
} from '../../components/Project_Carousel/Project_Carousel';

import './Projects.css';

import { projectsData } from '../../data/projects.js';
import GitHubIcon from '../../assets/githubLight.svg';
import PlayIcon from '../../assets/play.svg';

function Projects() {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [icons, setIcons] = useState([]);

    async function selectProject(project) {
        await setIcons(project.technologiesEn);
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
    }

    useEffect(() => {
        if (selectedFilter === 'All') {
            setProjects(projectsData);
            setFilteredProjects(projectsData);
        }
    }, [selectedProject, selectedFilter]);

    return selectedProject ? (
        <section className="page-projects">
            <section className="page-project " id="SelectedProject">
                <div className="page-project-top-container">
                    <div className="page-project-back-button">
                        <span onClick={() => resetProject()}>
                            &#8249; Go back
                        </span>
                    </div>
                    <p className="page-project-project-title">
                        {selectedProject.name}
                    </p>
                </div>

                <div className="page-project-content-container">
                    <div className="page-project-slider-container">
                        <Carousel
                            descriptions={selectedProject.carousel.description}
                        >
                            {selectedProject.carousel.images.map((image) => {
                                return (
                                    <CarouselItem key={image}>
                                        <img
                                            className="img-caroussel"
                                            src={image}
                                            alt="ensciens"
                                        />
                                    </CarouselItem>
                                );
                            })}
                        </Carousel>
                    </div>

                    <div className="page-project-description-container">
                        <div className="page-project-description">
                            <h1 className="page-project-title">Description</h1>
                            <p className="page-project-description-text ">
                                {selectedProject.descriptionLongueEn}
                            </p>
                        </div>
                        <div className="page-project-bottom-container">
                            <div className="page-project-informations">
                                <h1 className="page-project-title">
                                    Complementary informations
                                </h1>
                                <div className="page-project-description-text-container">
                                    <p className="page-project-description-text">
                                        Duration
                                    </p>
                                    <p className="page-project-description-text">
                                        {selectedProject.duration}
                                    </p>
                                </div>
                                <div className="page-project-separator" />
                                <div className="page-project-description-text-container">
                                    <p className="page-project-description-text">
                                        Team
                                    </p>
                                    <p className="page-project-description-text">
                                        {selectedProject.team}
                                    </p>
                                </div>
                                <div className="page-project-separator" />
                                <div className="page-project-description-text-container">
                                    <p className="page-project-description-text">
                                        See the project
                                    </p>
                                    <div className="page-project-links-container">
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
                                        {selectedProject.link.length > 0 ? (
                                            <a
                                                rel="noreferrer"
                                                target="_blank"
                                                href={selectedProject.link}
                                            >
                                                <img
                                                    className="page-project-icon"
                                                    src={PlayIcon}
                                                    alt="Icon Link to the project"
                                                />
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="page-project-technologies"
                                id="page-project-technologies"
                            >
                                <h1 className="page-project-title">
                                    Technologies
                                </h1>
                                {selectedProject.iconLanguages.map(
                                    (iconLanguage) => {
                                        return (
                                            <div className="page-project-technologies-technology">
                                                <svg
                                                    width="48"
                                                    height="48"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill={`#${iconLanguage.icon.hex}`}
                                                        fill-opacity="1"
                                                        d={
                                                            iconLanguage.icon
                                                                .path
                                                        }
                                                    ></path>
                                                </svg>
                                                <p className="page-project-technologies-technology-slug">
                                                    {iconLanguage.slug}
                                                </p>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#f0f3f5"
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
                <AnimatePresence presenceAffectsLayout={true}>
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
                    fill="#f0f3f5"
                    fill-opacity="1"
                    d="M0,256L1440,192L1440,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}

export default Projects;
