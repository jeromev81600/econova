import './Home.scss'
import Navbar from '../../components/Navbar/Navbar';
import HeaderHomePage from '../../components/HeaderHomePage/HeaderHomePage';
import Footer from '../../components/Footer/Footer';

function Home() {

  return (
    <div className='homeMainDiv'>
      <Navbar/>
      <HeaderHomePage/>
        <section className='homeContentSection'>
         <p className="homeText">Matthias Vilanova, journaliste amateur et indépendant, s'aventure avec son sac à dos et ses caméras "sur les chemins de la Terre" pour vous offrir une immersion inédite **auprès de ceux qui œuvrent avec passion** pour la préservation de notre planète et le développement durable. 
          Embarquez pour un voyage improvisé aux quatre coins du monde, à la découverte de paysages époustouflants et de rencontres insolites.</p>
        </section>
        <Footer/>
    </div>
  )
}

export default Home;
