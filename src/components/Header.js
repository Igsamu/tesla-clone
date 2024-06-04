import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../media/Logo.webp';
import sitioWeb from '../media/sitio-web.png';
import usuario from '../media/usuario.png';
import question from '../media/informacion.png';
import net from '../media/sitio-web.png';
import user from '../media/usuario.png';
import { Arrow } from './Components.js';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav>
        <a href="logo" className="logo">
          <img src={logo} alt="Tesla Logo" />
        </a>
        {isDesktop ? (
          <>
            <div className="desktop-menu">
              <button className="desktop-button">Vehículos</button>
              <button className="desktop-button">Energía</button>
              <button className="desktop-button">Carga</button>
              <button className="desktop-button">Descubrir</button>
              <button className="desktop-button">Tienda</button>
            </div>
            <div className="logos">
              <button className="imgButton"><img src={question} alt='informacion'/></button>
              <button className="imgButton"><img src={net} alt='web'/></button>
              <button className="imgButton"><img src={user} alt='usuario'/></button>
            </div>
          </>
        ) : (
          <button className="menu" onClick={toggleMenu}>Menú</button>
        )}
      {!isDesktop && (
        <div className={`menulistdiv ${menuOpen ? 'open' : ''}`} id="menuListDiv">
          <button id="closeButton" onClick={toggleMenu}>X</button>
          <div className="menuBut">
            <button className="menuButton">Vehículos<span><Arrow/></span></button>
            <button className="menuButton">Energía<span><Arrow/></span></button>
            <button className="menuButton">Carga<span><Arrow/></span></button>
            <button className="menuButton">Descubrir<span><Arrow/></span></button>
            <button className="menuButton">Tienda</button>
            <button className="menuButton">Soporte</button>
            <button className="menuButton">
              <span>
                <img src={sitioWeb} alt="web" />España<br /><span className="subtext">español</span>
              </span>
              <span><Arrow/></span>
            </button>
            <button className="menuButton">
              <span>
                <img src={usuario} alt="usuario" />Cuenta
              </span>
            </button>
          </div>
        </div>
      )}
      </nav>
    </header>
  );
};

export default Header;
