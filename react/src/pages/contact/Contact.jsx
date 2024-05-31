import './Contact.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

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
        <Footer/>
    </div>
  )
}

export default Contact;
