import { useEffect, useState } from 'react';

import SkillCard from '../../components/Skills_SkillCard/SkillCard';
import Filter from '../../components/Skills_Filter/Filter';
import './Skills.css';

import { technologiesData } from '../../data/technologies';
import { AnimatePresence } from 'framer-motion';
/*
Software : 
C#, python, git, 

Frontend :
html, css, js, ts, bootstrap, greensock, git, react, react native,

Bakcend : 
js, ts, nodejs, express, mongodb, c#, asp.net core, azure, sql, nosql, git, entity framework

Ux design : 
Figma, adobeXd, Axure, user tests,  
*/

function Skills() {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [technologies, setTechnologies] = useState([]);
    const [filteredTechnologies, setFilterTechnologies] = useState([]);

    useEffect(() => {
        setTechnologies(technologiesData);
        setFilterTechnologies(technologiesData);
    }, []);

    return (
        <div className="skills-section" id="skills">
            <h1 className="title-skills reveal-on-scroll">My skills</h1>
            <Filter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                technologies={technologies}
                setFilteredTechnologies={setFilterTechnologies}
            />
            <div className="skills-container reveal-on-scroll">
                <AnimatePresence>
                    {filteredTechnologies.map((technology) => {
                        return (
                            <SkillCard
                                key={technology.name}
                                name={technology.name}
                                img={technology.img}
                                level={technology.level}
                                info={technology.info}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Skills;
