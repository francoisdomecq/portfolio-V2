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
        if (selectedFilter === 'All') {
            setFilteredProjects(projects);
        } else {
            let filtered = [];
            let newFilter = {};
            for (let i = 0; i < projects.length; i++) {
                newFilter = {};
                const languages = projects[i].languages;
                for (let j = 0; j < languages.length; j++) {
                    if (languages[j].includes(selectedFilter)) {
                        newFilter = projects[i];
                    }
                }
                if (Object.keys(newFilter).length !== 0) {
                    filtered = [...filtered, newFilter];
                }
            }
            setFilteredProjects(filtered);
        }
    }, [selectedFilter, projects, setFilteredProjects]);

    return (
        <div className="filter-projects-container reveal-on-scroll">
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
                        <span className="filter-name">{filter}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Filter;
