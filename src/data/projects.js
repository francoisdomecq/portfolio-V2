import Ensciens from '../assets/Projets/Ensciens.svg';
import RapJeu from '../assets/Projets/RapJeu.svg';
import Baroudeurs from '../assets/Projets/Baroudeurs.svg';
import RogueLike from '../assets/Projets/RogueLike.svg';
import Portfolio from '../assets/Projets/Portfolio.svg';

import Image1 from '../assets/Ensciens/Image1.PNG';
import Image2 from '../assets/Ensciens/Image2.PNG';
import Image3 from '../assets/Ensciens/Image3.PNG';
import Image4 from '../assets/Ensciens/Image4.PNG';
import Image5 from '../assets/Ensciens/Image5.PNG';

import { siTypescript } from 'simple-icons/icons';
import { siJavascript } from 'simple-icons/icons';
import { siGit } from 'simple-icons/icons';
import { siReact } from 'simple-icons/icons';
import { siNodedotjs } from 'simple-icons/icons';
import { siMongodb } from 'simple-icons/icons';
import { siAzuredevops } from 'simple-icons/icons';
import { siAdobexd } from 'simple-icons/icons';
import { siFigma } from 'simple-icons/icons';
import { siCsharp } from 'simple-icons/icons';
import { siCss3 } from 'simple-icons/icons';
import { siExpress } from 'simple-icons/icons';
import { siHtml5 } from 'simple-icons/icons';
import { siPython } from 'simple-icons/icons';
import { siDotnet } from 'simple-icons/icons';
import { siKeras } from 'simple-icons/icons';
import { siJest } from 'simple-icons/icons';
import { siBootstrap } from 'simple-icons/icons';

export const projectsData = [
    {
        name: 'Encsiens',
        src: Ensciens,
        descriptionEn:
            'Social network within the school to follow student life and be aware of upcoming events',
        languages: ['React Native', 'Typescript', 'C# - ASP .NET Core'],
        images: [Image1, Image2, Image3, Image4, Image5],
        descriptionLongueEn: (
            <p>
                The aim of this project was to create a mobile application. The
                application developed here is a social network specific to the
                ENSC. The different offices, clubs and students of the school
                can post publications. They can also follow the different
                upcoming events and see the progress of the family cup. This
                application also allows students who do not have Facebook to be
                kept up to date with the school's student life.
            </p>
        ),
        technologiesEn: [
            'React',
            // siTypescript,
            // siCsharp,
            // siDotnet,
            // siAzuredevops,
            // siFigma,
        ],
        rapportProjet: './Bernard_Domecq_MOBI_Projet.pdf',
        github: '',
    },
    {
        name: 'Rap Jeu',
        src: RapJeu,
        descriptionEn:
            'Web application to play the game Rap Game from the youtube show of the same name',
        languages: ['React', 'Node JS', 'Javascript'],
        images: [Image1, Image2, Image3, Image4, Image5],
        descriptionLongueEn: '',
        technologiesEn: [
            // siReact,
            // siNodedotjs,
            // siJavascript,
            // siExpress,
            // siHtml5,
            // siCss3,
            // siFigma,
        ],
        rapportProjet: '',
        github: 'https://github.com/francoisdomecq/Rap-Jeu',
    },
    {
        name: 'Baroudeurs',
        src: Baroudeurs,
        descriptionEn:
            'Mobile application promoting the exploration of cities in the manner of world exploration in video games',
        languages: ['React Native', 'Typescript'],
        images: [Image1, Image2, Image3, Image4, Image5],
        descriptionLongueEn: '',
        // technologiesEn: [siReact, siTypescript, siNodedotjs, siExpress],
        rapportProjet: '',
        github: '',
    },
    {
        name: 'RogueLike Pirate',
        src: RogueLike,
        descriptionEn:
            'RogueLike game, programmed as a console application, where the player evolves in a pirate universe',
        languages: ['C#'],
        images: [Image1, Image2, Image3, Image4, Image5],
        descriptionLongueEn: '',
        // technologiesEn: ['csharp'],
        rapportProjet: '',
        github: 'https://github.com/francoisdomecq/RogueLike_Domecq_Leger',
    },
    {
        name: 'Portfolio website',
        src: Portfolio,
        descriptionEn: 'My personal portfolio website',
        languages: ['React', 'Javascript'],
        images: [],
        descriptionLongueEn: '',
        technologiesEn: '',
        rapportProjet: '',
    },
];
