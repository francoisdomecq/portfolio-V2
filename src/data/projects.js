import './projects.css';

import Ensciens from '../assets/Projets/Ensciens.svg';
import RapJeu from '../assets/Projets/RapJeu.svg';
import Baroudeurs from '../assets/Projets/Baroudeurs.svg';
import RogueLike from '../assets/Projets/RogueLike.svg';

import EnsciensImg1 from '../assets/Ensciens/EnsciensImg1.png';
import EnsciensImg2 from '../assets/Ensciens/EnsciensImg2.png';
import EnsciensImg3 from '../assets/Ensciens/EnsciensImg3.png';
import EnsciensImg4 from '../assets/Ensciens/EnsciensImg4.png';
import EnsciensImg5 from '../assets/Ensciens/EnsciensImg5.png';
import EnsciensImg6 from '../assets/Ensciens/EnsciensImg6.jpg';
import EnsciensImg7 from '../assets/Ensciens/EnsciensImg7.jpg';
import EnsciensImg8 from '../assets/Ensciens/EnsciensImg8.jpg';

import BaroudeursImg1 from '../assets/Baroudeurs/Image1.png';
import BaroudeursImg2 from '../assets/Baroudeurs/Image2.png';

import RapJeu1 from '../assets/RapJeu/RapJeu1.jpg';
import RapJeu2 from '../assets/RapJeu/RapJeu2.jpg';
import RapJeu3 from '../assets/RapJeu/RapJeu3.jpg';
import RapJeu4 from '../assets/RapJeu/RapJeu4.jpg';
import RapJeu5 from '../assets/RapJeu/RapJeu5.jpg';
import RapJeu6 from '../assets/RapJeu/RapJeu6.jpg';

import RogueLike1 from '../assets/RogueLike/RogueLike1.jpg';
import RogueLike2 from '../assets/RogueLike/RogueLike2.jpg';
import RogueLike3 from '../assets/RogueLike/RogueLike3.jpg';
import RogueLike4 from '../assets/RogueLike/RogueLike4.jpg';
import RogueLike6 from '../assets/RogueLike/RogueLike6.jpg';
import RogueLike7 from '../assets/RogueLike/RogueLike7.jpg';
import RogueLike8 from '../assets/RogueLike/RogueLike8.jpg';
import RogueLike9 from '../assets/RogueLike/RogueLike9.jpg';
import RogueLike10 from '../assets/RogueLike/RogueLike10.jpg';

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
                    The application developed here is a{' '}
                    <span className="text-highlight">social network</span>{' '}
                    specific to the ENSC. The different offices, clubs and
                    students of the school can{' '}
                    <span className="text-highlight">post publications</span>.
                    They can also follow the different{' '}
                    <span className="text-highlight">upcoming events</span> and
                    see the progress of the family cup. The main goal of this
                    application is to allow students who do not have Facebook to
                    be kept up to date with the school's student life.
                </p>
                <br />
                <p>
                    The backend has been developed with{' '}
                    <span className="text-highlight">Asp .Net Core</span> and{' '}
                    <span className="text-highlight">Entity Framework</span> on
                    a monthly project. It suits a mvc architecture. It is hosted
                    on <span className="text-highlight">azure</span> and you can
                    have a view of the interface :{' '}
                    <a
                        href="https://ensc-ensciens.azurewebsites.net/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        here.
                    </a>
                </p>
                <br />
                <p>
                    The frontend has been developed using{' '}
                    <span className="text-highlight">React Native</span> on a
                    monthly project also.
                </p>
            </div>
        ),
        duration: '2 months',
        team: '2 students',
        iconLanguages: [
            { icon: siReact, slug: 'React' },
            { icon: siDotnet, slug: '.Net' },
            { icon: siAzuredevops, slug: 'Azure' },
        ],
        iconSlug: ['React', '.Net', 'Azure'],
        github: 'https://github.com/francoisdomecq/Ensciens-Frontend.git',
        link: 'https://ensc-ensciens.azurewebsites.net/',
    },
    {
        name: 'Rap Jeu',
        src: RapJeu,
        descriptionEn:
            'Web application to play the game Rap Game from the youtube show of the same name',
        languages: ['React', 'Node JS', 'Javascript'],
        carousel: {
            images: [RapJeu1, RapJeu2, RapJeu3, RapJeu4, RapJeu5, RapJeu6],
            description: [
                'Games picking screen',
                "The 'Mytho pas mytho' (Liar or not liar) game",
                "The 'Rap génie ou gênant' (Genius or embarassing rap) game",
                'The Rolland Gamos game',
                "The 'Les enchères' (The auctions) game",
                "The 'Top 5' game'",
            ],
        },
        descriptionLongueEn: (
            <div>
                <p>
                    Rap Jeu is a french{' '}
                    <a
                        href="https://www.youtube.com/watch?v=nfwXqWNuqVk&list=PLLkvlAQ5R3l8zLZWcwcjkMQ1pU4BQlAcp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        youtube show
                    </a>
                    . It is a program where celebrities related to the rap
                    culture compete in different games. The purpose of this
                    project is to design and develop an{' '}
                    <span className="text-highlight">online quiz website</span>{' '}
                    based on the show, and its{' '}
                    <span className="text-highlight">visual identity.</span>
                </p>
                <br />
                <p>
                    In a first time, players must define a gamemaster that will
                    animate the game. Once the teams are created, the gamemaster
                    picks two games among five . Two games are already
                    preselected as they are mandatory, as in the show. Players
                    can then enjoy the game and do their best to show off their
                    rap culture !
                </p>
                <br />
                <p>
                    The frontend has been developed with{' '}
                    <span className="text-highlight">React JS</span>. Backend
                    has been developed using{' '}
                    <span className="text-highlight">Node JS</span> and its
                    framework <span className="text-highlight"> Express</span>.
                    The database is hosted on Mongodb.{' '}
                </p>
            </div>
        ),
        iconLanguages: [
            { icon: siReact, slug: 'React Native' },
            { icon: siNodedotjs, slug: 'Node JS' },
            { icon: siMongodb, slug: 'Mongo DB' },
        ],
        iconSlug: ['React', '.Net', 'Azure'],
        duration: '3 months',
        team: '1 student',
        github: 'https://github.com/francoisdomecq/Rap-Jeu',
        link: 'https://rapjeu-p2i.netlify.app/',
    },
    {
        name: 'Baroudeurs',
        src: Baroudeurs,
        descriptionEn:
            'Mobile application promoting the exploration of cities in the manner of world exploration in video games',
        languages: ['React Native', 'Typescript', 'Node JS'],
        carousel: {
            images: [BaroudeursImg1, BaroudeursImg2],
            description: [
                'City picking screen & Bordeaux map view screen & Point of interest details screen',
                'Parameters screen & Success screen & Street view screen',
            ],
        },
        descriptionLongueEn: (
            <div>
                <p>
                    Baroudeurs is a{' '}
                    <span className="text-highlight">city exploration</span>{' '}
                    application in the style of rpg video games where the user
                    can visit points of interest, participate in quests (not
                    available for the moment), win successes and so on. The goal
                    of this application is to promote the city history in an
                    innovative experience based on discovery, curiosity and the
                    wonder of discovering something new.
                </p>
                <br />
                <p>
                    The backend has been developed using{' '}
                    <span className="text-highlight">Node JS</span> and its
                    framework Express. The database is hosted on Mongodb. The
                    frontend has been developed using{' '}
                    <span className="text-highlight">React Native</span>. It
                    uses the react-native-maps library.
                </p>
            </div>
        ),
        iconLanguages: [
            { icon: siReact, slug: 'React Native' },
            { icon: siNodedotjs, slug: 'Node JS' },
            { icon: siMongodb, slug: 'Mongo DB' },
        ],
        iconSlug: ['React', '.Net', 'Azure'],
        duration: '1 month',
        team: '1 student',
        github: 'https://github.com/francoisdomecq/Baroudeurs.git',
        link: '',
    },
    {
        name: 'RogueLike Pirate',
        src: RogueLike,
        descriptionEn:
            'RogueLike game, programmed as a console application, where the player evolves in a pirate universe.',
        languages: ['C#'],
        carousel: {
            images: [
                RogueLike1,
                RogueLike2,
                RogueLike3,
                RogueLike4,
                RogueLike6,
                RogueLike7,
                RogueLike8,
                RogueLike9,
                RogueLike10,
            ],
            description: [
                'Start of the game',
                'Key to access other level',
                'Use of telescop that display all the level map',
                'Use of canonball ability',
                'Fight system',
                'Shop level',
                'Scroll map to find',
                'Win case if the player gets 3 map scrolls',
                'Lose case if the player does not get 3 map scrolls',
            ],
        },
        descriptionLongueEn: (
            <div>
                <p>
                    The aim of this project was to develop a{' '}
                    <span className="text-highlight">roguelike game</span>. It
                    is a computer role playing game characterized by various
                    characteristics such as{' '}
                    <span className="text-highlight">
                        randomised environment generation
                    </span>
                    , permadeath, turn-based movement and{' '}
                    <span className="text-highlight">
                        primitive tile-based graphics
                    </span>
                    .
                </p>
                <br />
                <p>
                    My colleague and I decided to develop a game that takes
                    place in a pirate world. The player will fight many enemies
                    like marines, other pirates and even monsters !
                    <br />
                    The goal is to find{' '}
                    <span className="text-highlight">3 map scrolls</span>{' '}
                    scattered between 15 levels. To do so, you must explore
                    levels and fight enemies that get stronger level by level.
                    But you can also get stronger by{' '}
                    <span className="text-highlight">unlocking abilities</span>{' '}
                    such as canonball, or by getting better{' '}
                    <span className="text-highlight">equipment and stuff</span>.
                </p>
                <br />
                <p>
                    This game has been developed with{' '}
                    <span className="text-highlight">
                        C# in a console application
                    </span>
                    .
                </p>
            </div>
        ),
        iconLanguages: [{ icon: siCsharp, slug: 'C#' }],
        iconSlug: ['React', '.Net', 'Azure'],
        duration: 'One and a half months',
        team: '2 students',
        github: 'https://github.com/francoisdomecq/RogueLike_Domecq_Leger',
        link: '',
    },
];
