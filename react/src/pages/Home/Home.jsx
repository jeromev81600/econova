import './Home.scss'
import rose from "../../assets/img/Rose2.png";

function Home() {

  return (
    <div className='homeMainDiv'>
      <section class='logosSection'>
                <div className='homeLogoBlock'>
                   <h1 className='homeMainTitle'>Econova</h1>
                   <img class='compass' alt="Compass" src={rose} />
                   <p className='homeMainSubTitle'>production</p>
                </div>
      </section>
        <div className='homeTextBlock'>
          <p className='homeText'> - En construction -<br/><br/> Création du Logo</p> 
        </div>
    </div>
  )
}

export default Home;
