import './Adhere.scss'
import Navbar from '../../components/Navbar/Navbar';
import FooterBottom from '../../components/Footer/FooterBottom';

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
        <FooterBottom/>
    </div>
  )
}

export default Adhere;
