import { useEffect, useState } from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';

import './Skills.css';
import { skillsData } from '../../data/skillsData';

function Skills() {
    const [selectedIcon, setSelectedIcon] = useState('');

    function onClickIcon(e, icon) {
        e.preventDefault();
    }

    function displayIconName(icon) {
        console.log(icon.title);
    }

    const renderCustomIcon = (icon, bg) => {
        return renderSimpleIcon({
            icon,
            size: 64,
            bgHex: bg,
            aProps: {
                href: undefined,
                target: undefined,
                rel: undefined,
                onClick: (e) => onClickIcon(e, icon),
                onMouseOver: () => displayIconName(icon),
            },
        });
    };

    const colour = '#08fdd8';
    const cloudIcons = skillsData.map((i) => renderCustomIcon(i, colour));

    return (
        <div className="skills-section" id="skills">
            <h1 className="title-skills reveal-on-scroll">My skills</h1>
            <div className="skills-container">
                <div className="skills-text">
                    <p>
                        Pariatur fugiat veniam nisi incididunt enim laboris
                        ipsum esse cupidatat laboris quis officia
                        aliqua.Excepteur deserunt sint elit aute proident ut
                        labore laboris nulla dolore officia nostrud occaecat.
                    </p>
                    <p>
                        Pariatur fugiat veniam nisi incididunt enim laboris
                        ipsum esse cupidatat laboris quis officia
                        aliqua.Excepteur deserunt sint elit aute proident ut
                        labore laboris nulla dolore officia nostrud occaecat.
                    </p>
                    <p>
                        Pariatur fugiat veniam nisi incididunt enim laboris
                        ipsum esse cupidatat laboris quis officia
                        aliqua.Excepteur deserunt sint elit aute proident ut
                        labore laboris nulla dolore officia nostrud occaecat.
                    </p>
                </div>
                <div className="cloud-container">
                    <Cloud
                        id="skills-canvas"
                        canvasProps={{
                            display: 'flex',
                        }}
                        className="skills-canvas reveal-on-scroll"
                        options={{
                            outlineColour: 'red',
                            clickToFront: 500,

                            fadeIn: 200,
                            imadeMode: 'both',
                            pinchZoom: true,
                            shuffleTags: true,
                            weight: true,
                            zoom: 1.1,
                            zoomMax: 1.5,
                            zoomMin: 1,
                            tooltip: 'native',
                            tooltipDelay: 0,
                            freezeActive: true,
                        }}
                    >
                        {cloudIcons}
                    </Cloud>
                </div>
            </div>
        </div>
        // <div className="skills-section" id="skills">
        //     <h1 className="title-skills reveal-on-scroll">My skills</h1>
        //     <Filter
        //         selectedFilter={selectedFilter}
        //         setSelectedFilter={setSelectedFilter}
        //         technologies={technologies}
        //         setFilteredTechnologies={setFilterTechnologies}
        //     />
        //     <div className="skills-container reveal-on-scroll">
        //         <AnimatePresence>
        //             {filteredTechnologies.map((technology) => {
        //                 return (
        //                     <SkillCard
        //                         key={technology.name}
        //                         name={technology.name}
        //                         img={technology.img}
        //                         level={technology.level}
        //                         info={technology.info}
        //                     />
        //                 );
        //             })}
        //         </AnimatePresence>
        //     </div>
        // </div>
    );
}

export default Skills;
