import './Home.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Home() {

  return (
    <div className='homeMainDiv'>
      <Navbar/>
        <div className='homeTextBlock'>
        <h1 className='homeTitle'>Sur les chemins de la terre</h1>
        <h1 className='homeTitle2'>Sur les chemins de la terre</h1>
        <h1 className='homeTitle3'>Sur les chemins de la terre</h1>
        <h1 className='homeTitle4'>Sur les chemins de la terre</h1>
        <h1 className='homeTitle5'>Sur les chemins de la terre</h1>
        <h1 className='homeTitle6'>Sur les chemins de la terre</h1>
         <p class="homeText">Bienvenu sur le site d’ECONOVA PRODUCTION,<br/> le média international engagé sur les sujets environnementaux et sociétaux.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Home;
