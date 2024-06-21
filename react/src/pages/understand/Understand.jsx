import './Understand.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Understand() {

  return (
    <div className='understandMainDiv'>
      <Navbar/>
      <div className='understandTextBlock'>
          <h1>Comprendre et apprendre</h1>
         <p></p>
         <div className='understandBuildBlock'>
          <p className='understandBuildText'> - Page en construction -<br/></p> 
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Understand;
