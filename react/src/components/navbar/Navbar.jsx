import { Link } from "react-router-dom";
import Logo from '../logo/Logo';
import hut from "../../assets/icons/home.png";
import './Navbar.scss'

function Navbar() {

  return (
    <div className='navbarDiv'>
        <Logo/>
        <div class="navbarLinksBlock">
        <Link class="links" to="/understand"><h2 class="navbartitleLinks">Comprendre</h2></Link>
        <Link class="links" to="/adapt"><h2 class="navbartitleLinks">S'adapter</h2></Link>
        <Link class="links" to="/act"><h2 class="navbartitleLinks">Agir</h2></Link>
        <Link class="links" to="/adhere"><h2 class="navbartitleLinks">Adhérer</h2></Link>
        <Link class="links" to="/contact"><h2 class="navbartitleLinks">Contact</h2></Link>
        <Link class="links" to="/"> <img src={hut} alt="home" /></Link>
        </div>
    </div>
  )
}

export default Navbar;
