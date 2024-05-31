import './Home.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Home() {

  return (
    <div className='homeMainDiv'>
      <Navbar/>
        <div className='homeTextBlock'>
          <h1>Accueil</h1>
         <p class="homeText">Bienvenu sur le site d’ECONOVA PRODUCTION,<br/> le média international engagé sur les sujets environnementaux et sociétaux.</p>
         <div className='homeBuildBlock'>
          <p className='homeBuildText'> - Page en construction -<br/></p> 
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home;
