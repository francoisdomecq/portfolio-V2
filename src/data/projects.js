import Ensciens from '../assets/Projets/Ensciens.svg';
import RapJeu from '../assets/Projets/RapJeu.svg';
import Baroudeurs from '../assets/Projets/Baroudeurs.svg';
import RogueLike from '../assets/Projets/RogueLike.svg';

import Image1 from '../assets/Ensciens/Image1.PNG';
import Image2 from '../assets/Ensciens/Image2.PNG';
import Image3 from '../assets/Ensciens/Image3.PNG';
import Image4 from '../assets/Ensciens/Image4.PNG';
import Image5 from '../assets/Ensciens/Image5.PNG';

export const projectsData = [
    {
        name: 'Encsiens',
        src: Ensciens,
        descriptionFr:
            "Réseau social au sein de l'école pour suivre la vie étudiante et être au courant des prochains évènements",
        descriptionEn:
            'Social network within the school to follow student life and be aware of upcoming events',
        languages: ['React Native', 'ASP .NET Core'],
        images: [Image1, Image2, Image3, Image4, Image5],
        descritptionLongueFr: (
            <p>
                L'objectif de ce projet était de créer une{' '}
                <span style={{ textDecoration: 'underline' }}>
                    application mobile
                </span>
                . L'application développée ici est un réseau social propre à
                l'ENSC. Les différents bureaux, clubs et élèves de l'école
                peuvent poster des publications. Ils peuvent également suivre
                les différents évènements à venir ainsi que voir l'avancée de la
                coupe des familles. Cette application permet également aux
                étudiants qui n'ont pas Facebook d'être tenu au courant de la
                vie étudiante de l'école.
            </p>
        ),
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
        technologiesFr:
            "Pour réaliser l'application, nous avons dans un premier temps dû réaliser une API Rest",
        technologiesEn: '',
        rapportProjet: './Bernard_Domecq_MOBI_Projet.pdf',
        github: '',
    },
    {
        name: 'Rap Jeu',
        src: RapJeu,
        descriptionFr:
            "Application web pour jouer au jeu Rap Jeu issu de l'émission du même name",
        descriptionEn:
            'Web application to play the game Rap Game from the youtube show of the same name',
        languages: ['React JS', 'Node JS'],
        images: [Image1, Image2, Image3, Image4, Image5],
        descritptionLongueFr: '',
        descriptionLongueEn: '',
        technologiesFr: '',
        technologiesEn: '',
        rapportProjet: '',
        github: 'https://github.com/francoisdomecq/Rap-Jeu',
    },
    {
        name: 'Baroudeurs',
        src: Baroudeurs,
        descriptionFr:
            "Application mobile promouvant l'exploration de villes dans le style des jeux vidéos",
        descriptionEn:
            'Mobile application promoting the exploration of cities in the manner of world exploration in video games',
        languages: ['React Native'],
        images: [Image1, Image2, Image3, Image4, Image5],
        descritptionLongueFr: '',
        descriptionLongueEn: '',
        technologiesFr: '',
        technologiesEn: '',
        rapportProjet: '',
        github: '',
    },
    {
        name: 'RogueLike Pirate',
        src: RogueLike,
        descriptionFr:
            'Jeu de type RogueLike, codé en application console, où le joueur évolue dans un univers de pirate',
        descriptionEn:
            'RogueLike game, programmed as a console application, where the player evolves in a pirate universe',
        languages: ['C#', 'React JS'],
        images: [Image1, Image2, Image3, Image4, Image5],
        descritptionLongueFr: '',
        descriptionLongueEn: '',
        technologiesFr: '',
        technologiesEn: '',
        rapportProjet: '',
        github: 'https://github.com/francoisdomecq/RogueLike_Domecq_Leger',
    },
];
