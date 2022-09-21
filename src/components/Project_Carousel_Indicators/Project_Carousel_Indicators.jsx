function Indicators(indicators, activeIndex, updateIndex) {
    return (
        <div className="indicators">
            {indicators.map((index) => {
                return (
                    <button
                        className={`${index === activeIndex ? 'active' : ''}`}
                        onClick={() => {
                            updateIndex(index);
                        }}
                    >
                        {index + 1}
                    </button>
                );
            })}
            {/*ptr ajouter description plus détaillée */}
        </div>
    );
}

export default Indicators;
