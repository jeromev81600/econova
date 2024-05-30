import Logo from '../logo/Logo';
import './Navbar.scss'

function Navbar() {

  return (
    <div className='navbarDiv'>
        <Logo/>
        <div class="linksBlock">
         <h2 class="titleLinks">Comprendre</h2>
         <h2 class="titleLinks">S'adapter</h2>
         <h2 class="titleLinks">Agir</h2>
         <h2 class="titleLinks">Adhérer</h2>
         <h2 class="titleLinks">Contact</h2>
        </div>
    </div>
  )
}

export default Navbar;
