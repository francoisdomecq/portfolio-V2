import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import './Project_Carousel.css';
import CaretRight from '../../assets/caret-right.svg';
import CaretLeft from '../../assets/caret-left.svg';
export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

function Carousel({ children, descriptions }) {
    const [paused, setPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
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
            {' '}
            {console.log(descriptions)}
            <div className="inner-bg">
                <button
                    onClick={() => updateIndex(activeIndex - 1)}
                    className="btn-prev"
                >
                    <img
                        className="caret"
                        src={CaretLeft}
                        alt="caret-previous"
                    />
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
                    <img className="caret" src={CaretRight} alt="caret-next" />
                </button>
            </div>
            <div className="description-image">
                <p style={{ color: 'white' }}>{descriptions[activeIndex]}</p>
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
