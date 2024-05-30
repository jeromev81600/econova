import './Home.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Home() {

  return (
    <div className='homeMainDiv'>
      <Navbar/>
        <div className='homeTextBlock'>
          <p className='homeText'> - Page en construction -<br/></p> 
        </div>
        <Footer/>
    </div>
  )
}

export default Home;
