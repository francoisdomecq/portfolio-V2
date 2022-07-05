import logo from '../../logo.svg';
import Spline from '@splinetool/react-spline';

import './Work.css';
import { useState } from 'react';
import FilterButton from '../../components/Projects_FilterButton/Projects_FilterButton';

function MyWork() {
    const [selectedFilter, setSelectedFilter] = useState('');

    const changeColorsPrevious = () => {
        const previousFilterElement = document.getElementById(selectedFilter);
        previousFilterElement.style.backgroundColor = '#302d2d';
        previousFilterElement.style.color = 'aqua';
    };

    const changeColorsNew = (elementId) => {
        const element = document.getElementById(elementId);
        element.style.backgroundColor = 'aqua';
        element.style.color = '#302d2d';
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
            
            <div className="container-projects"></div>
        </div>
    );
}

export default MyWork;
