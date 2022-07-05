import logo from '../../logo.svg';
import Spline from '@splinetool/react-spline';

import './Work.css';
import { useState } from 'react';

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
                <div
                    className="filter-projects-button"
                    id="React JS"
                    onClick={() => selectFilter('React JS')}
                >
                    <span>React Native</span>
                </div>
                <div
                    className="filter-projects-button"
                    id="JavaScript"
                    onClick={() => selectFilter('JavaScript')}
                >
                    <span>JavaScript</span>
                </div>
                <div
                    className="filter-projects-button"
                    id="ASP .NET Core"
                    onClick={() => selectFilter('ASP .NET Core')}
                >
                    <span>ASP .NET Core</span>
                </div>
                <div
                    className="filter-projects-button"
                    id="TypeScript"
                    onClick={() => selectFilter('TypeScript')}
                >
                    <span>TypeScript</span>
                </div>
            </div>

            <div className="container-projects"></div>
        </div>
    );
}

export default MyWork;
