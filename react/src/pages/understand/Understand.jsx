import { sourcesofInspirationList } from '../../Utils';
import './Understand.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Understand() {

  return (
    <div className='understandMainDiv'>
      <Navbar/>
      <h1>Comprendre et apprendre</h1>
      <div className='understandTextBlock'>
         <p>Et si on vérifiait la cohérence et la véracité des connaissances scientifiques sur le terrain ?</p>
         <div className="sourcesofInspirationBlock">
            <p>Nos sources d'inspiration :</p>
            <ul className="sourcesofInspirationList">
            {sourcesofInspirationList.map(source => (
              <li key={source.id} style={{ backgroundImage: `url(${source.icon})` }}>
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.sourceName}
                </a>
              </li>
            ))}
            </ul>
         </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Understand;
