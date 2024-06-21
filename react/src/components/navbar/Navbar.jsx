import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../logo/Logo';
import hut from "../../assets/icons/home.png";
import './Navbar.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navBar">
      <Logo />
      <button type="button" className="burger-menu" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? "open" : ""}`} />
        <span className={`bar ${isMenuOpen ? "open" : ""}`} />
        <span className={`bar ${isMenuOpen ? "open" : ""}`} />
      </button>
      <ul className={`navbarLinksBlock ${isMenuOpen ? "open" : ""}`}>
        <li className="links">
          <Link to="/understand"><h2 className="navbartitleLinks">Comprendre</h2></Link>
        </li>
        <li className="links">
          <Link to="/adapt"><h2 className="navbartitleLinks">S'adapter</h2></Link>
        </li>
        <li className="links">
          <Link to="/act"><h2 className="navbartitleLinks">Agir</h2></Link>
        </li>
        <li className="links">
          <Link to="/adhere"><h2 className="navbartitleLinks">Adhérer</h2></Link>
        </li>
        <li className="links">
          <Link to="/contact"><h2 className="navbartitleLinks">Contact</h2></Link>
        </li>
        <li className="links">
          <Link to="/"> <img src={hut} alt="home" /></Link>
        </li>
      </ul>
    </nav>
  );
}
