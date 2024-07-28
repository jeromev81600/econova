import './Adhere.scss'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Adhere() {

  return (
    <div className='adhereMainDiv'>
      <Navbar/>
      <div className='adhereTextBlock'>
          <h1>Soutenez-nous</h1>
         <p></p>
         <div className='adhereBuildBlock'>
          <p className='adhereBuildText'> - Page en construction -<br/></p> 
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Adhere;
