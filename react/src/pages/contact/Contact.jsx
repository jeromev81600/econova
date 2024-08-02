import './Contact.scss'
import Navbar from '../../components/Navbar/Navbar';
import FooterTop from '../../components/Footer/FooterTop';
import FooterBottom from '../../components/Footer/FooterBottom';

function Contact() {

  return (
    <div className='contactMainDiv'>
      <Navbar/>
      <h1>Contact</h1>
      <section className='contactContentSection'>
         <p className="contactText">Vous représentez une entreprise, une association ou une institution engagée dans la voie de la transition écologique et souhaitez faire appel à nos services de production, réalisation et montage photo ou vidéo ? </p>
      <form><h3>Formulaire en construction<br/> bientôt disponible</h3>
      </form>
      </section>
        <FooterTop/>
        <FooterBottom/>
    </div>
  )
}

export default Contact;
