import React, { useState, useEffect } from 'react';

import style from "./Style.css";
import Logo from "../../images/PortBakuLogo.svg";
const Index = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      function handleScroll() {
        const windowTop = window.pageYOffset;
        if (windowTop > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
      window.addEventListener('scroll', handleScroll);
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      }
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div>
    <header className={`header ${isScrolled ? 'mini' : ''}`}>
      <div className="container">
        <nav className="nav-links">
          <ul>
            <li><a href="#">Eat</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="/"><img src={Logo} alt="" /></a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div> 
  );
};

export default Index;
