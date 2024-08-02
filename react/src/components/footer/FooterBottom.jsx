import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.scss'
import upArrow from "../../assets/icons/Up_Arrow_Icon.svg";

function FooterBottom() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className='footerBottomDiv'>
      <div className="footerTextBlock">   
      <p className="copyright">©</p>
      <p className="footerText">2024 Econova. Tous droits réservés.</p>
      </div>
       <button type="button" className="scroll-to-top" onClick={scrollToTop}>
            <img src={upArrow} alt="arrow icon" />
        </button>
    </div>
  )
}

export default FooterBottom;
