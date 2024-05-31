import './Act.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Act() {

  return (
    <div className='actMainDiv'>
      <Navbar/>
      <div className='actTextBlock'>
      <h1>Actions et solutions</h1>
        <div className='actBuildBlock'>
          <p className='actBuildText'> - Page en construction -<br/></p> 
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Act;
