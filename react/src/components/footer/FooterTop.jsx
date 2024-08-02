import { Link } from "react-router-dom";
import './Footer.scss'

function FooterTop() {
   
  return (
    <div className='footerTopDiv'>
      <article>
      <h4>Candidatures</h4>
      <p className="footerText">Vous êtes indépendant et souhaitez postuler pour devenir partenaire agréé ?<br/>Remplissez notre formulaire dans "contact" et envoyez-nous votre candidature.</p>
      </article>
      <article>
      <h4>Collaborateurs</h4>
      <p className="footerText">Faites confiance à un réseau de professionnels qualifiés et indépendants pour couvrir l’ensemble de vos évènements.</p>
      <aside>
        <ul className="collaboratorsList">
          <li className="footerText"><span className="footerSpans">Hugo BREAMS</span><br/>Vidéaste, photographe et télépilote de drone</li>
          <li className="footerText"><span className="footerSpans">Robin ROUSSEL</span><br/>Vidéaste et créateur de contenus</li>
        </ul>
      </aside>
      </article>
      <article>
      <ul className="footerLinksBlock">   
        <li className="footerText"><h4>Mentions légales</h4></li>
        <li className="footerText"><Link to="/adhere"><h4>Charte</h4></Link></li>
        <li className="footerText"><Link to="/contact"><h4>Contact</h4></Link></li>
      </ul>
      </article>
    </div>
  )
}

export default FooterTop;
