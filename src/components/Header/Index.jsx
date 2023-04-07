import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
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
          
            <li><NavLink to="/dining">Eat</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/"><img src={Logo} alt="" /></NavLink></li>
            <li><NavLink href="#">Events</NavLink></li>
            <li><NavLink href="#">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  </div> 
  );
};

export default Index;
