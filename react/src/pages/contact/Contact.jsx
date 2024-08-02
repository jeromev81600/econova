import './Contact.scss'
import Navbar from '../../components/Navbar/Navbar';
import FooterTop from '../../components/Footer/FooterTop';
import FooterBottom from '../../components/Footer/FooterBottom';

function Contact() {

  return (
    <div className='contactMainDiv'>
      <Navbar/>
      <div className='contactTextBlock'>
          <h1>Contact</h1>
         <p></p>
         <div className='contactBuildBlock'>
          <p className='contactBuildText'> - Page en construction -<br/></p> 
          </div>
        </div>
        <FooterTop/>
        <FooterBottom/>
    </div>
  )
}

export default Contact;
