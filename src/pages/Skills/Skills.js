import { Cloud } from 'react-icon-cloud';
import { renderCustomIcon } from '../../utils/function';

import './Skills.css';
import { skillsData } from '../../data/skillsData';

function Skills() {
    const colour = '#fff';
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
                            outlineColour: 'aqua',
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
                    fill="#20202a"
                    fill-opacity="1"
                    d="M0,256L1440,192L1440,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}

export default Skills;
