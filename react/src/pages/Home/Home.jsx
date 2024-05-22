import './Home.scss'
import rose5 from "../../assets/img/Rose5.png";
import rose7 from "../../assets/img/Rose7.png";
import rose8 from "../../assets/img/Rose8.png";

function Home() {

  return (
    <div className='homeMainDiv'>
      <section class='logosSection'>
            <div className='homeLogoBlock1'>
              <div className='homeTitleCircle1'>
                 <h1 className='homeMainTitle1'>Econova</h1>
                 <p className='homeMainSubTitle1'>production</p>
              </div>
             </div>
             <div className='homeLogoBlock2'>
               <div className='homeTitleCircle2'></div>
               <img class='compass' alt="Compass" src={rose5} />
               <div className='homeTitleblock2'>
                 <h1 className='homeMainTitle2'>Econova</h1>
                 <p className='homeMainSubTitle2'>production</p>
               </div>
             </div>
             <div className='homeLogoBlock3'>
               <h1 className='homeMainTitle3'>Econova</h1>
               <div className='homeTitleCircle3'>  
                 <img class='compass2' alt="Compass" src={rose8} />
               </div>
               <p className='homeMainSubTitle3'>production</p>
             </div>
             <div className='homeLogoBlock4'>
               <div className='homeTitleblock4'>
                   <h1 className='homeMainTitle4'>Econova</h1>
                   <p className='homeMainSubTitle4'>production</p>
               </div>
               <div className='homeTitleCircle4'></div>
               <div className='homeTitleCircle4bis'></div>
               <img class='compass3' alt="Compass" src={rose7} />
             </div>
      </section>
        <div className='homeTextBlock'>
          <p className='homeText'> - En construction -<br/><br/> Création du Logo</p> 
        </div>
    </div>
  )
}

export default Home;
