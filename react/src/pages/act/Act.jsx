import {favoriteInitiatives,recommendedWorkshops} from '../../Utils';
import './Act.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Act() {

  return (
    <div className='actMainDiv'>
      <Navbar/>
      <h1>Actions et solutions</h1>
      <p className="actText">Quelles solutions pour limiter les impacts causés par les activités humaines, régénérer la biodiversité et améliorer nos conditions de vie ?</p>
      <section className='actContentSection'>
       <div className="actTextBlocks">
             <h2>Nos coups de coeur</h2>
             <ul className="actLists">
             {favoriteInitiatives.map(source => (
              <li key={source.id} style={{ backgroundImage: `url(${source.icon})` }}>
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.sourceName}
                </a>
              </li>
              ))}
             </ul>
             </div>
             <div className="actTextBlocks">
             <h2>Les ateliers conseillés</h2>
             <ul className="actLists">
             {recommendedWorkshops.map(source => (
              <li key={source.id} style={{ backgroundImage: `url(${source.icon})` }}>
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.sourceName}
                </a>
              </li>
              ))}
             </ul>
             </div>
             </section>
        <Footer/>
    </div>
  )
}

export default Act;
