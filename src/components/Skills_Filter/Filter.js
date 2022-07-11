import { useEffect } from 'react';
import './Skills_Filter.css';
import { technologiesType } from '../../data/technologiesType';

function Filter({
    selectedFilter,
    setSelectedFilter,
    technologies,
    setFilteredTechnologies,
}) {
    const selectFilter = (filter) => {
        setSelectedFilter(filter);
    };

    useEffect(() => {
        if (selectedFilter === 'Default') {
            setFilteredTechnologies(technologies);
        } else {
            const filtered = technologies.filter((technology) => {
                if (technology.type.includes(selectedFilter)) return technology;
                return null;
            });
            setFilteredTechnologies(filtered);
        }
    }, [selectedFilter]);

    return (
        <div className="filter-technologies-container reveal-on-scroll">
            <h2 className="title-filter">Filter by </h2>

            {technologiesType.map((filter) => {
                return (
                    <div
                        key={filter}
                        className={
                            selectedFilter === filter
                                ? `filter-technologies-button active`
                                : 'filter-technologies-button'
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
