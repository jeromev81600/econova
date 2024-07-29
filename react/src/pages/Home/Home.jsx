import './Home.scss'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Home() {

  return (
    <div className='homeMainDiv'>
      <Navbar/>
      <header className="header">
    <h1>econova production</h1>
    <h2>"Bienvenu sur le média international engagé pour une transition écologique durable et sociale"</h2>
    <p className="homeText">En faisant appel à nos services, vous vous engagez à faire grandir un écosystème impliqué à 100 % dans la préservation de l’environnement et le développement durable.</p>
    </header>
        <section className='homeOffersSection'>
          <h2 className="homeTitlesSections">Nos offres</h2>
          <ul>
          <li className="homeText"><span>Production et réalisation de contenus audiovisuels ou photographiques</span> destinés à la promotion d’entreprises, institutions ou associations spécialisés dans les concepts inclusifs, la fabrication de matériaux biosourcés, le réemploi, le recyclage et l’ensemble des services permettant l’accélération de la transition vers un modèle plus vertueux.</li>
          <li className="homeText"><span>Diffusion et création de campagnes d’influence</span> pour les professionnels participant à la formation d’un lobbying d’un nouveau genre, plus juste et équitable pour le vivant, dans les domaines de la Low-tech, High-tech, Deep-tech et même No-Tech. En tant que consommateur, vous pouvez aussi agir en modifiant vos habitudes d’achats et adhérer à notre modèle pour transformer l’économie. Suivez-nous lors de nos directs sur nos réseaux sociaux ou envoyez-nous vos vidéos (abonnés uniquement = adhérez). Nous serons là pour vous guider.</li>
          </ul>
        </section>
        <Footer/>
    </div>
  )
}

export default Home;
