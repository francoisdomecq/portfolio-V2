import { useState } from 'react';

import FilterButton from '../../components/Projects_FilterButton/Projects_FilterButton';
import ProjectContainer from '../../components/Projects_ProjectContainer/Projects_ProjectContainer';

import './Projects.css';

import { projects } from '../../data/projects.js';

function Projects() {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedProject, setSelectedProject] = useState('');

    const changeColorsPrevious = () => {
        const previousFilterElement = document.getElementById(selectedFilter);
        previousFilterElement.classList.toggle('active');
    };

    const changeColorsNew = (elementId) => {
        const element = document.getElementById(elementId);
        element.classList.toggle('active');
    };

    const selectFilter = (filter) => {
        if (filter !== selectedFilter) {
            if (selectedFilter === '') {
                changeColorsNew(filter);
            } else {
                changeColorsPrevious();
                changeColorsNew(filter);
            }
        } else {
            changeColorsNew(filter);
        }
        setSelectedFilter(filter);
    };

    const selectProject = (project) => {
        setSelectedProject(project);
    };
    return (
        <div className="page-projects" id="projects">
            <h1 className="title-projects">My projects</h1>
            <div className="filter-projects-container">
                <h2 className="title-filter">Filter by </h2>
                <FilterButton selectFilter={selectFilter} filter="React JS" />
                <FilterButton selectFilter={selectFilter} filter="JavaScript" />
                <FilterButton
                    selectFilter={selectFilter}
                    filter="React Native"
                />
                <FilterButton selectFilter={selectFilter} filter="TypeScript" />
            </div>

            <div className="container-projects">
                {projects.map((project) => {
                    return (
                        <ProjectContainer
                            project={project}
                            setProjet={selectProject}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
