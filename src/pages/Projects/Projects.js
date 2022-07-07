import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectContainer from '../../components/Projects_ProjectContainer/Projects_ProjectContainer';
import Filter from '../../components/Projects_Filter/Project_Filter';

import './Projects.css';

import { projectsData } from '../../data/projects.js';

function Projects() {
    const [selectedFilter, setSelectedFilter] = useState('Default');
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    async function selectProject(project) {
        await setSelectedProject(project);
        const element = document.getElementById('SelectedProject');
        element.classList.add('reveal-selected-project');
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
        setProjects(projectsData);
        setFilteredProjects(projectsData);
    }, []);

    return selectedProject ? (
        <section className="page-projects">
            <section className="page-project " id="SelectedProject">
                <div className="page-project-back-button">
                    <span onClick={() => resetProject()}>&#8249; Go back</span>
                </div>

                <p style={{ color: 'white' }}>{selectedProject.name}</p>
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
