import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import './Project_Carousel.css';

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

function Carousel({ children, setActiveIndex, activeIndex }) {
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    return (
        <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="inner-bg">
                <button
                    onClick={() => updateIndex(activeIndex - 1)}
                    className="btn-prev"
                >
                    <span className="caret">&#60;</span>
                </button>
                <div
                    className="inner"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, { width: '100%' });
                    })}
                </div>
                <button
                    onClick={() => updateIndex(activeIndex + 1)}
                    className="btn-next"
                >
                    <span className="caret">&#62;</span>
                </button>
            </div>
            <div className="indicators">
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${
                                index === activeIndex ? 'active' : ''
                            }`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;
