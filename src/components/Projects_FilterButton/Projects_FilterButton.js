import './Projects_FilterButton.css';

function FilterButton({ selectFilter, filter }) {
    return (
        <div
            className="filter-projects-button"
            id={filter}
            onClick={() => selectFilter(filter)}
        >
            <span>{filter}</span>
        </div>
    );
}

export default FilterButton;
