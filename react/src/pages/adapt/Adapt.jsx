import { Link } from "react-router-dom";
import {frenchAgencies,internationalAgencies,collaborativeExperience} from '../../Utils';
import './Adapt.scss'
import Navbar from '../../components/Navbar/Navbar';
import FooterTop from '../../components/Footer/FooterTop';
import FooterBottom from '../../components/Footer/FooterBottom';
import CO2 from "../../assets/logos/CO2.png";

function Adapt() {

  return (
    <div className='adaptMainDiv'>
      <Navbar/>
      <h1>Conséquences et résilience</h1>
      <span id="adaptMainSpans">Quelles projections pour le futur ?</span>
      <p className="adaptText">Face à la multiplication des phénomènes climatiques extrêmes, à une raréfaction annoncée de certaines ressources et à l’accroissement des inégalités, des individus et des collectifs, publics ou privés, se mobilisent pour préserver notre patrimoine naturel et nous préparer à différents scénarios.</p>
      <section className='adaptContentSection'>
      <h3>Nos références</h3>
      <div className="adaptcardsGroups">
       <div className="adaptcardsBlocks">
             <h3>En France</h3>
             <ul className="adaptLists">
             {frenchAgencies.map(source => (
              <li key={source.id} style={{ backgroundImage: `url(${source.icon})` }}>
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.sourceName}
                </a>
              </li>
              ))}
             </ul>
             </div>
             <div className="adaptcardsBlocks">
             <h3>A l'international</h3>
             <ul className="adaptLists" id="internationalAgenciesList">
             {internationalAgencies.map(source => (
              <li key={source.id} style={{ backgroundImage: `url(${source.icon})` }}>
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.sourceName}
                </a>
              </li>
              ))}
             </ul>
             </div>
             </div>
        </section>
        <p className="adaptText">Vous êtes un artiste engagé, membre d’une association ou expérimentez des modèles économiques alternatifs ? Partagez votre quotidien, vos écogestes et votre vision de l’avenir avec <span>ECONOVA Production</span> (<Link to="/adhere">Adhérer</Link>).</p>
        <section className='adaptContentSection'>
        <div className="adaptcardsGroups">
       <div className="adaptcardsBlocks">
             <h3>Participer à une expérience collaborative</h3>
             <ul className="adaptLists">
             {collaborativeExperience.map(source => (
              <li key={source.id} style={{ backgroundImage: `url(${source.icon})` }}>
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.sourceName}
                </a>
              </li>
              ))}
             </ul>
             </div>
             <div className="adaptcardsBlocks">
             <h3>Calculer votre empreinte carbonne</h3>
             <div className="divCO2"><img className="co2Img" src={CO2} alt="Logo CO2"></img>
             <a href="https://impactco2.fr/">Impact C0²</a></div>
          </div>
          </div>
        </section>
        <FooterTop/>
        <FooterBottom/>
    </div>
  )
}

export default Adapt;
