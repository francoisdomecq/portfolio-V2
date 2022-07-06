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

    const selectProject = (project) => {
        setSelectedProject(project);
        const element = document.getElementById('project');
        element.classList.toggle('load');
    };

    useEffect(() => {
        setProjects(projectsData);
        setFilteredProjects(projectsData);
    }, []);

    return selectedProject ? (
        <div
            style={{ backgroundColor: 'red' }}
            className="page-projects"
            id="projects"
        >
            <div className="page-project" id="project">
                <p>{selectProject.name}</p>
            </div>
        </div>
    ) : (
        <div className="page-projects" id="projects">
            <h1 className="title-projects">My projects</h1>
            <Filter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                projects={projects}
                setFilteredProjects={setFilteredProjects}
            />

            <div className="container-projects">
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
        </div>
    );
}

export default Projects;
