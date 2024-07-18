import './Home.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Home() {

  return (
    <div className='homeMainDiv'>
      <Navbar/>
      <h1 className='homeTitle'>Sur les chemins de la terre</h1>
        <section className='homeContentSection'>
         <p class="homeText">Bienvenu sur le site d’ECONOVA PRODUCTION,<br/> le média international engagé sur les sujets environnementaux et sociétaux.</p>
         <div className='line'></div>
         <p>Matthias Vilanova, journaliste amateur et indépendant, s'aventure avec son sac à dos et ses caméras "sur les chemins de la Terre" pour vous offrir une immersion inédite **auprès de ceux qui œuvrent avec passion** pour la préservation de notre planète et le développement durable. 
Embarquez pour un voyage improvisé aux quatre coins du monde, à la découverte de paysages époustouflants et de rencontres insolites.</p>
        </section>
        <Footer/>
    </div>
  )
}

export default Home;
