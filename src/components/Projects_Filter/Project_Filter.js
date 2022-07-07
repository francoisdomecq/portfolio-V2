import { useEffect } from 'react';
import './Project_Filter.css';
import { filters } from '../../data/filters.js';

function Filter({
    selectedFilter,
    setSelectedFilter,
    projects,
    setFilteredProjects,
}) {
    const selectFilter = (filter) => {
        setSelectedFilter(filter);
    };

    useEffect(() => {
        if (selectedFilter === 'Default') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) => {
                if (project.languages.includes(selectedFilter)) return project;
                return null;
            });
            setFilteredProjects(filtered);
        }
    }, [selectedFilter]);

    return (
        <div className="filter-projects-container reveal-on-scroll">
            <h2 className="title-filter">Filter by </h2>

            {filters.map((filter) => {
                return (
                    <div
                        key={filter}
                        className={
                            selectedFilter === filter
                                ? `filter-projects-button active`
                                : 'filter-projects-button'
                        }
                        onClick={() => selectFilter(filter)}
                    >
                        <span>{filter}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Filter;
