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
    const [selectedProject, setSelectedProject] = useState({});

    const selectProject = (project) => {
        setSelectedProject(project);
    };

    useEffect(() => {
        setProjects(projectsData);
        setFilteredProjects(projectsData);
    }, []);

    return (
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
                                setProjet={selectProject}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Projects;
