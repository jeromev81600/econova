import './Home.scss'

function Home() {

  return (
    <div className='homeMainDiv'>
      <div className='line'></div>
        <div className='homeTitleBlock'>
          <div className='homeTitleCircle'>
           <h1 className='homeMainTitle'>Econova</h1>
           <p className='homeMainSubTitle'>production</p>
          </div>
        </div>
        <div className='homeTextBlock'>
          <p className='homeText'>Préparez-vous !<br/><br/> Le site de la chaîne Econova arrive bientôt.</p> 
        </div>
        <div className='line'></div>
    </div>
  )
}

export default Home;
