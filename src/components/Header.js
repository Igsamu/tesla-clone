import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../media/Logo.webp';
import sitioWeb from '../media/sitio-web.png';
import usuario from '../media/usuario.png';
import question from '../media/informacion.png';
import net from '../media/sitio-web.png';
import user from '../media/usuario.png';
import { Arrow } from './Components.js';

import models from '../media/Mega-Menu-Vehicles-Model-S.avif';
import model3 from '../media/Mega-Menu-Vehicles-Model-3-Performance-LHD.avif';
import modelx from '../media/Mega-Menu-Vehicles-Model-X.avif';
import modely from '../media/Mega-Menu-Vehicles-Model-Y.avif';
import cybertruck from '../media/Mega-Menu-Vehicles-Cybertruck-1x.avif';
import doubleCar from '../media/Mega-Menu-Vehicles-HMC-RedBlue-EMEA.avif';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = () => {
    setIsPanelOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPanelOpen(false);
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
    <header className={isPanelOpen ? 'white-background' : ''}>
      <nav>
        <a href="logo" className="logo">
          <img src={logo} alt="Tesla Logo" />
        </a>
        {isDesktop ? (
          <>
            <div className="desktop-menu">
              <button className="desktop-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Vehículos</button>
              {isPanelOpen && (
                <div className="panel-blanco" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="panel-content">
                    <div className='leftPanel'>
                      <div className='car-button'>
                        <button className="panel-button">
                          <img src={models} alt='models'/>
                        </button>
                        <p>Model S</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                          <a href='#'>Pedir</a>
                        </div>
                      </div>
                      <div className='car-button'>
                        <button className="panel-button">
                          <img src={model3} alt='model3'/>
                        </button>
                        <p>Model 3</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                          <a href='#'>Pedir</a>
                        </div>
                      </div>
                      <div className='car-button'>
                        <button className="panel-button">
                          <img src={modelx} alt='modelx'/>
                        </button>
                        <p>Model X</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                          <a href='#'>Pedir</a>
                        </div>
                      </div>
                      <div className='car-button'>
                        <button className="panel-button">
                          <img src={modely} alt='modely'/>
                        </button>
                        <p>Model Y</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                          <a href='#'>Pedir</a>
                        </div>
                      </div>
                      <div className='car-button'>
                        <button className="panel-button">
                          <img src={cybertruck} alt='cybertruck'/>
                        </button>
                        <p>Cybertruck</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                        </div>
                      </div>
                      <div className='car-button'>
                        <button className="panel-button">
                          <img src={doubleCar} alt='doubleCar'/>
                        </button>
                        <p>Necesito ayuda para elegir</p>
                        <div className='abuttons'>
                          <a href='#'>Comenzar</a>
                        </div>
                      </div>
                    </div>
                    <div className='vline'></div>
                    <div className='rightPanel'>
                      <a href='#'>Prueba de conducción</a>
                      <a href='#'>Tasación</a>
                      <a href='#'>Vehículos preconfigurados</a>
                      <a href='#'>Ocasión</a>
                      <a href='#'>Coche de empresa</a>
                      <a href='#'>Roadster</a>
                    </div>
                  </div>
                </div>
              )}
              <button className="desktop-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Energía</button>
              <div className="panel-blanco">
                <div className="panel-content">
                  <button className="panel-button">Sub opción 1</button>
                  <button className="panel-button">Sub opción 2</button>
                  <button className="panel-button">Sub opción 3</button>
                </div>
              </div>
              <button className="desktop-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Carga</button>
              <div className="panel-blanco">
                <div className="panel-content">
                  <button className="panel-button">Sub opción 1</button>
                  <button className="panel-button">Sub opción 2</button>
                  <button className="panel-button">Sub opción 3</button>
                </div>
              </div>
              <button className="desktop-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Descubrir</button>
              <div className="panel-blanco">
                <div className="panel-content">
                  <button className="panel-button">Sub opción 1</button>
                  <button className="panel-button">Sub opción 2</button>
                  <button className="panel-button">Sub opción 3</button>
                </div>
              </div>
              <button className="desktop-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Tienda</button>
              <div className="panel-blanco">
                <div className="panel-content">
                  <button className="panel-button">Sub opción 1</button>
                  <button className="panel-button">Sub opción 2</button>
                  <button className="panel-button">Sub opción 3</button>
                </div>
              </div>
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
