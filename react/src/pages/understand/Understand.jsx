import { sourcesofInspiration,playAndLearn} from '../../Utils';
import './Understand.scss'
import Navbar from '../../components/Navbar/Navbar';
import FooterBottom from '../../components/Footer/FooterBottom';

function Understand() {

  return (
    <div className='understandMainDiv'>
      <Navbar/>
      <h1>Comprendre et apprendre</h1>
        <section className='understandContentSection'>
          <div className="understandTextBlocks">
             <h3>Nos sources d'inspiration</h3>
             <p className="understandText">Et si on vérifiait la cohérence et la véracité des connaissances scientifiques sur le terrain ?</p>
             <ul className="understandLists" id="sourcesofInspirationList">
             {sourcesofInspiration.map(source => (
              <li key={source.id} style={{ backgroundImage: `url(${source.icon})` }}>
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.sourceName}
                </a>
              </li>
              ))}
             </ul>
          </div>
          <div className="understandTextBlocks">
          <h3>Comprendre notre planète</h3>
          <p className="understandText">Scientifiques et historiens, invitez-nous à partager vos expéditions et vos voyages pour mieux comprendre le fonctionnement de notre planète et son importance dans le cycle de vie des espèces et des civilisations.</p>
          <p className="understandText">Consultez l’Atlas interactif du GIEC (IPCC) en suivant ce lien: <a href={"https://interactive-atlas.ipcc.ch/"} target="_blank">IPCC AR6-WGI Atlas</a>.</p></div>
        <div className="understandTextBlocks">
          <h3>Jouer en apprenant</h3>
          <ul className="understandLists">
          {playAndLearn.map(source => (
              <li key={source.id} style={{ backgroundImage: `url(${source.icon})` }}>
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.sourceName}
                </a>
              </li>
              ))}
            </ul>
          </div>
        </section>     
        <FooterBottom/>
    </div>
  )
}

export default Understand;
