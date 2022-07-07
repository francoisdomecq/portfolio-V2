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
        document
            .getElementById('SelectedProject')
            .classList.add('reveal-selected-project');
    }

    useEffect(() => {
        setProjects(projectsData);
        setFilteredProjects(projectsData);
    }, []);

    return selectedProject ? (
        <section className="page-project " id="SelectedProject">
            <button onClick={() => setSelectedProject(null)}>Reset</button>
            <p style={{ color: 'white' }}>{selectedProject.name}</p>
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
