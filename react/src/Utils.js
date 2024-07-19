import ipbes from "./assets/logos/ipbes.ico";
import ipcc from "./assets/logos/ipcc.png";
import fresqueduclimat from "./assets/logos/fresqueduclimat.jpg";
import fresquefrontieresplanetaires from "./assets/logos/fresquefrontieresplanetaires.png";
import fresquebiodiversite from "./assets/logos/fresquebiodiversite.jpg";
import fresqueoceane from "./assets/logos/fresqueoceane.png";
import ademe from "./assets/logos/ademe.png";
import onu from "./assets/logos/onu.png";
import unesco from "./assets/logos/unesco.png";
import adacc from "./assets/logos/adacc.jpg";
import fresquenouveauxrecits from "./assets/logos/fresquenouveauxrecits.png";

const sourcesofInspiration=[
    {
        id:1,
        sourceName:"benaboki IPBES Home page | IPBES secretariat",
        link:"https://www.ipbes.net/fr",
        icon:ipbes,
    },
    {
        id:2,
        sourceName:"IPCC Français - IPCC",
        link:"https://www.ipcc.ch/languages-2/francais/",
        icon:ipcc,
    }
];

const playAndLearn=[
    {
        id:1,
        sourceName:"La fresque du climat",
        link:"https://fresqueduclimat.org/",
        icon:fresqueduclimat,
    },
    {
        id:2,
        sourceName:"La fresque des frontières planétaires",
        link:"https://www.1erdegre.earth/fresque-des-frontieres-planetaires",
        icon:fresquefrontieresplanetaires,
    },
    {
        id:3,
        sourceName:"La fresque de la biodiversité",
        link:"https://www.fresquedelabiodiversite.org/",
        icon:fresquebiodiversite,
    },
    {
        id:4,
        sourceName:"La fresque Océane",
        link:"https://www.fresqueoceane.org/",
        icon:fresqueoceane,
    }
];

const frenchAgencies=[
    {
        id:1,
        sourceName:"ADEME - Les scénarios de l'agence de la transition écologique",
        link:"https://www.ademe.fr/les-futurs-en-transition/les-scenarios/",
        icon:ademe,
    },
];

const internationalAgencies=[
    {
        id:1,
        sourceName:"ONU - Les 17 objectifs de développement durable",
        link:"https://www.un.org/sustainabledevelopment/fr/",
        icon:onu,
    },
    {
        id:2,
        sourceName:"UNESCO",
        link:"https://www.unesco.org/fr",
        icon:unesco,
    }
];

const collaborativeExperience=[
    {
        id:1,
        sourceName:"Les Ateliers de l'Adaptation au Changement Climatique",
        link:"https://ateliers-adaptationclimat.fr/",
        icon:adacc,
    },
    {
        id:2,
        sourceName:"La fresque des nouveaux récits",
        link:"https://www.fresquedesnouveauxrecits.org/",
        icon:fresquenouveauxrecits,
    }
];


export { sourcesofInspiration,playAndLearn,frenchAgencies,internationalAgencies,collaborativeExperience};
