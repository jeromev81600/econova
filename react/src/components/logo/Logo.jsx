import './Logo.scss'
import rose from "../../assets/img/Rose2.png";

function Logo() {

  return (
    <div className='logoDiv'>
                   <h1 className='homeMainTitle'>Econova</h1>
                   <img class='compass' alt="Compass" src={rose} />
                   <p className='homeMainSubTitle'>production</p>
                </div>
  )
}

export default Logo;
