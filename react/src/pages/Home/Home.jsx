import { Link } from "react-router-dom";
import './Home.scss'
import Navbar from '../../components/Navbar/Navbar';
import FooterTop from '../../components/Footer/FooterTop';
import FooterBottom from '../../components/Footer/FooterBottom';

function Home() {

  return (
    <div className='homeMainDiv'>
      <Navbar/>
      <header className="header">
        <h1>econova production</h1>
        <h3>"Bienvenu sur le média international engagé pour une transition écologique durable et sociale"</h3>
        <p>En faisant appel à nos services, vous vous engagez à faire grandir un écosystème impliqué à 100 % dans la préservation de l’environnement et le développement durable.</p>
      </header>
      <section className='homeOffersSection'>
         <h2 className="homeTitlesSections">Nos offres</h2>
         <ul>
          <li className="homeText"><span>Production et réalisation de contenus audiovisuels ou photographiques</span> destinés à la promotion d’entreprises, institutions ou associations spécialisés dans les concepts inclusifs, la fabrication de matériaux biosourcés, le réemploi, le recyclage et l’ensemble des services permettant l’accélération de la transition vers un modèle plus vertueux.</li>
          <li className="homeText"><span>Diffusion et création de campagnes d’influence</span> pour les professionnels participant à la formation d’un lobbying d’un nouveau genre, plus juste et équitable pour le vivant, dans les domaines de la Low-tech, High-tech, Deep-tech et même No-Tech. En tant que consommateur, vous pouvez aussi agir en modifiant vos habitudes d’achats et adhérer à notre modèle pour transformer l’économie. Suivez-nous lors de nos directs sur nos réseaux sociaux ou envoyez-nous vos vidéos (abonnés uniquement = <Link to="/adhere">adhérez</Link>). Nous serons là pour vous guider.</li>
         </ul>
      </section>
      <section className='homeAmbitionsSection'>
         <h2 className="homeTitlesSections">Nos ambitions</h2>
         <p className="homeText"><span>Nos bénéfices seront intégralement réinvestis dans la création de notre futur média</span> avec des documentaires, émissions, interviews et reportages participatifs essentiellement dirigés pour répondre aux trois grandes thématiques reprises sur notre site :</p>
         <ul>
          <li className="homeText"><span>La compréhension et l’apprentissage</span> à travers la transmission d’informations basées sur les études scientifiques de terrain (<Link to="/understand">Comprendre</Link>),</li>
          <li className="homeText"><span>L’adaptation</span> en mesurant les conséquences  de nos modes de vies et en repensant nos systèmes pour les rendre plus résilients (<Link to="/adapt">S’adapter</Link>),</li>
          <li className="homeText"><span>L’action</span> pour promouvoir des solutions efficaces et inciter chacun d’entre nous à se mettre en mouvement (<Link to="/act">Agir</Link>),</li>
         </ul>
         <p className="homeText">L’ensemble de nos prestations tout comme le fonctionnement de nos services sont assurés par une sélection de professionnels qualifiés et indépendants selon une charte bien définie (charte & collaborations).</p>
         <p className="homeText">Ce choix assumé encourage le respect et la bienveillance dans les collaborations grâce à des liens non-hiérarchisés permettant ainsi une plus grande liberté de travail et d’avantage de créativité mais aussi…</p>
         <p className="homeText">… une politique tarifaire transparente, consciente et équitable (demandez notre grille de prix = contact) et l’assurance de partenariats qualitatifs et constructifs.</p>
         <p className="homeText"><span>“Notre objectif : amplifier l’action environnementale et encourager la défense des droits humains à travers le monde”</span> en exportant notre modèle et participant ainsi à l’accélération de la transition écologique à l’international.</p>
         <p className="homeText"><span>Pour nous soutenir</span>, rendez-vous sur notre plateforme Te Pee (…) ou faites appel à nos services (contact).</p>
      </section>
      <section className='homeUpcomingEventsSection'>
      <h2 className="homeTitlesSections">En 2026, sur nos réseaux sociaux et notre chaîne YOUTUBE</h2>
      <p className="homeText"><span>“ECONOVA pdt : Le média”</span></p>
      <p className="homeText">Découvrez nos interviews, nos reportages, nos Tips et participez à nos directs<br/></p>
      <p className="homeText"><span>“Sur les chemins de la Terre”</span></p>
      <p className="homeText">Matthias Vilanova, journaliste amateur et indépendant, s'aventure avec son sac à dos et ses caméras "sur les chemins de la Terre" pour vous offrir une immersion inédite auprès de passionnés engagés pour la préservation de notre planète et de notre patrimoine.</p>
      <p className="homeText">Embarquez pour un voyage improvisé aux quatre coins du monde, à la découverte de paysages époustouflants et de rencontres insolites.</p>
      </section>
      <FooterTop/>
      <FooterBottom/>
    </div>
  )
}

export default Home;
