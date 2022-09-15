import Ensciens from '../assets/Projets/Ensciens.svg';
import RapJeu from '../assets/Projets/RapJeu.svg';
import Baroudeurs from '../assets/Projets/Baroudeurs.svg';
import RogueLike from '../assets/Projets/RogueLike.svg';
import Portfolio from '../assets/Projets/Portfolio.svg';

import EnsciensImg1 from '../assets/Ensciens/EnsciensImg1.png';
import EnsciensImg2 from '../assets/Ensciens/EnsciensImg2.png';
import EnsciensImg3 from '../assets/Ensciens/EnsciensImg3.png';
import EnsciensImg4 from '../assets/Ensciens/EnsciensImg4.png';
import EnsciensImg5 from '../assets/Ensciens/EnsciensImg5.png';
import EnsciensImg6 from '../assets/Ensciens/EnsciensImg6.jpg';
import EnsciensImg7 from '../assets/Ensciens/EnsciensImg7.jpg';
import EnsciensImg8 from '../assets/Ensciens/EnsciensImg8.jpg';

import BaroudeursImg1 from '../assets/Baroudeurs/Image1.svg';
import BaroudeursImg22 from '../assets/Baroudeurs/Image1.png';

import { siReact } from 'simple-icons/icons';
import { siDotnet } from 'simple-icons/icons';
import { siAzuredevops } from 'simple-icons/icons';
import { siNodedotjs } from 'simple-icons/icons';
import { siMongodb } from 'simple-icons/icons';
import { siCsharp } from 'simple-icons/icons';

export const projectsData = [
    {
        name: 'Encsiens',
        src: Ensciens,
        descriptionEn:
            'Social network within the school to follow student life and be aware of upcoming events',
        languages: ['React Native', 'Typescript', 'C# - ASP .NET Core'],
        carousel: {
            images: [
                EnsciensImg1,
                EnsciensImg2,
                EnsciensImg3,
                EnsciensImg4,
                EnsciensImg5,
                EnsciensImg6,
                EnsciensImg7,
                EnsciensImg8,
            ],
            description: [
                'Login screen & Feed screen & Post screen',
                'Events screen & Event screen & Post creation screen',
                'Offices screen & Office screen 1 & Office screen 2',
                'Family cup screen & Family cup members screen  & Family cup handle screen',
                'Club screen & Profile screen',
                'Backend students screen',
                'Backend student details screen',
                'Backend student edit screen',
            ],
        },
        descriptionLongueEn: (
            <div>
                <p>
                    The aim of this project was to create a mobile application.
                    The application developed here is a social network specific
                    to the ENSC. The different offices, clubs and students of
                    the school can post publications. They can also follow the
                    different upcoming events and see the progress of the family
                    cup. The main goal of this application is to allow students
                    who do not have Facebook to be kept up to date with the
                    school's student life.
                </p>
                <p>
                    The backend has been developed with ASP .NET Core and Entity
                    Framework on a monthly project. It suits a mvc architecture.
                    It ishosted on azure and you can have a view of the
                    interface :{' '}
                    <a
                        href="https://ensc-ensciens.azurewebsites.net/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        here.
                    </a>
                </p>
                <p>
                    The frontend has been developed using React Native on a
                    monthly project also.
                </p>
            </div>
        ),
        duration: '3 months',
        development: 'Frontend & Backend',
        team: '2 students',
        iconLanguages: [
            { icon: siReact, slug: 'React' },
            { icon: siDotnet, slug: '.Net' },
            { icon: siAzuredevops, slug: 'Azure' },
        ],
        iconSlug: ['React', '.Net', 'Azure'],
        github: '',
        link: 'https://ensc-ensciens.azurewebsites.net/',
    },
    {
        name: 'Rap Jeu',
        src: RapJeu,
        descriptionEn:
            'Web application to play the game Rap Game from the youtube show of the same name',
        languages: ['React', 'Node JS', 'Javascript'],
        carousel: {
            images: [],
            description: ['image1', 'image2', 'image3', 'image4', 'image5'],
        },
        descriptionLongueEn: '',
        iconLanguages: [
            { icon: siReact, slug: 'React Native' },
            { icon: siNodedotjs, slug: 'Node JS' },
            { icon: siMongodb, slug: 'Mongo DB' },
        ],
        iconSlug: ['React', '.Net', 'Azure'],
        duration: '4 months',
        team: '1 student',
        development: 'Frontend & Backend',
        github: 'https://github.com/francoisdomecq/Rap-Jeu',
    },
    {
        name: 'Baroudeurs',
        src: Baroudeurs,
        descriptionEn:
            'Mobile application promoting the exploration of cities in the manner of world exploration in video games',
        languages: ['React Native', 'Typescript', 'Node JS'],
        carousel: {
            images: [BaroudeursImg1, BaroudeursImg22],
            description: ['image1', 'image2', 'image3', 'image4', 'image5'],
        },
        descriptionLongueEn: '',
        iconLanguages: [
            { icon: siReact, slug: 'React Native' },
            { icon: siNodedotjs, slug: 'Node JS' },
            { icon: siMongodb, slug: 'Mongo DB' },
        ],
        iconSlug: ['React', '.Net', 'Azure'],
        development: 'Frontend & Backend',
        duration: '2 months',
        team: '1 student',
    },
    {
        name: 'RogueLike Pirate',
        src: RogueLike,
        descriptionEn:
            'RogueLike game, programmed as a console application, where the player evolves in a pirate universe',
        languages: ['C#'],
        carousel: {
            images: [],
            description: ['image1', 'image2', 'image3', 'image4', 'image5'],
        },
        descriptionLongueEn: '',
        iconLanguages: [{ icon: siCsharp, slug: 'C#' }],
        iconSlug: ['React', '.Net', 'Azure'],
        duration: '2 months',
        team: '2 student',
        development: 'Game development',
        github: 'https://github.com/francoisdomecq/RogueLike_Domecq_Leger',
    },
    // {
    //     name: 'Portfolio website',
    //     src: Portfolio,
    //     descriptionEn: 'My personal portfolio website',
    //     languages: ['React', 'Javascript'],
    //     carousel: {
    //         images: [],
    //         description: ['image1', 'image2', 'image3', 'image4', 'image5'],
    //     },
    //     descriptionLongueEn: '',
    //     technologiesEn: '',
    //     development: 'Frontend',
    //     duration: '1 month',
    //     team: '1 student',
    // },
];
