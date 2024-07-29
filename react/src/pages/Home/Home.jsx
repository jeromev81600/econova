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
         <p className="homeText">Matthias Vilanova, journaliste amateur et indépendant, s'aventure avec son sac à dos et ses caméras "sur les chemins de la Terre" pour vous offrir une immersion inédite **auprès de ceux qui œuvrent avec passion** pour la préservation de notre planète et le développement durable. 
          Embarquez pour un voyage improvisé accux quatre coins du monde, à la découverte de paysages époustouflants et de rencontres insolites.</p>
        </section>
        <Footer/>
    </div>
  )
}

export default Home;
