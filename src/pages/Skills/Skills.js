import { Cloud, renderSimpleIcon } from 'react-icon-cloud';

import './Skills.css';
import { skillsData } from '../../data/skillsData';

function Skills() {
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
        <section className="skills-section" id="skills">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#fff"
                    fill-opacity="1"
                    d="M0,256L1440,192L1440,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}

export default Skills;
