import React, { useState, useEffect} from 'react';
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
import powerwall from '../media/Mega-Menu-Energy-Powerwall-Global.avif';
import megapack from '../media/Mega-Menu-Energy-Megapack.avif';
import charge from '../media/Mega-Menu-Charging-Charging-Global.avif';
import homeCharge from '../media/Mega-Menu-Charging-Home-Charging-Global.avif';
import highCharge from '../media/Mega-Menu-Charging-Supercharging-EMEA.avif';
import weel from '../media/Mega-Menu-Shop-Vehicle-Accessories.avif';
import cap from '../media/Mega-Menu-Shop-Apparel.avif';
import back from '../media/Mega-Menu-Shop-Lifestyle.avif';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [activePanel, setActivePanel] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (panel) => {
    setActivePanel(panel);
  };

  const handleMouseLeave = () => {
    setActivePanel(null);
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
    <header className={activePanel ? 'white-background' : ''}>      
      <nav onMouseLeave={handleMouseLeave}>
        <a href="logo" className="logo">
          <img src={logo} alt="Tesla Logo" />
        </a>
        {isDesktop ? (
          <>
            <div className="desktop-menu">
            <button className="desktop-button" onMouseEnter={() => handleMouseEnter('vehicles')} onMouseLeave={handleMouseLeave}>Vehículos</button>
            {activePanel === 'vehicles' && (
                <div className="panel-blanco" onMouseEnter={() => handleMouseEnter('vehicles')} onMouseLeave={handleMouseLeave}>
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
              <button className="desktop-button" onMouseEnter={() => handleMouseEnter('energy')} onMouseLeave={handleMouseLeave}>Energía</button>
              {activePanel ==='energy' && (
                <div className="panel2" onMouseEnter={() => handleMouseEnter('energy')} onMouseLeave={handleMouseLeave}>
                  <div className="panel-content">
                    <div className='leftPanel2'>
                      <div className='imageButton'>
                        <button className="panel-button">
                          <img src={powerwall} alt='powerwall'/>
                        </button>
                        <p>Powerwall</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                        </div>
                      </div>
                      <div className='imageButton'>
                        <button className="panel-button">
                          <img src={megapack} alt='megapack'/>
                        </button>
                        <p>Megapack</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                        </div>
                      </div>
                    </div>
                    <div className='vline2'></div>
                    <div className='rightPanel'>
                      <a href='#'>Soporte</a>
                      <a href='#'>Sea un socio de Tesla</a>
                      <a href='#'>Historias de clientes</a>
                      <a href='#'>Utilities</a>
                      <a href='#'>Comercial</a>
                    </div>
                  </div>
                </div>
              )}
              <button className="desktop-button" onMouseEnter={() => handleMouseEnter('charge')} onMouseLeave={handleMouseLeave}>Carga</button>

              {activePanel === 'charge' && (
                <div className="panel2" onMouseEnter={() => handleMouseEnter('charge')} onMouseLeave={handleMouseLeave}>
                  <div className="panel-content">
                    <div className='leftPanel2'>
                      <div className='imageButton'>
                        <button className="panel-button">
                          <img src={charge} alt='charge'/>
                        </button>
                        <p>Carga</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                        </div>
                      </div>
                      <div className='imageButton'>
                        <button className="panel-button">
                          <img src={homeCharge} alt='homeCharge'/>
                        </button>
                        <p>Megapack</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                          <a href='#'>Tienda</a>
                        </div>
                      </div>
                      <div className='imageButton'>
                        <button className="panel-button">
                          <img src={highCharge} alt='highcharge'/>
                        </button>
                        <p>Supercarga</p>
                        <div className='abuttons'>
                          <a href='#'>Saber más</a>
                          <a href='#'>Buscar</a>
                        </div>
                      </div>
                    </div>
                    <div className='vline2'></div>
                    <div className='rightPanel'>
                      <a href='#'>Votación de Supercargador</a>
                      <a href='#'>Instale un Supercargador</a>
                      <a href='#'>Instale Wall Connectors</a>
                    </div>
                  </div>
                </div>
              )}
              <button className="desktop-button" onMouseEnter={() => handleMouseEnter('find')} onMouseLeave={handleMouseLeave}>Descubrir</button>
              {activePanel === 'find' && (
                <div className="panel2" onMouseEnter={() => handleMouseEnter('find')} onMouseLeave={handleMouseLeave}>
                  <div className="panel-content">
                    <div className='panela'>
                      <p>Recursos</p>
                      <a href='#'>Prueba de conducción</a>
                      <a href='#'>Historias de clientes</a>
                      <a href='#'>Eventos</a>
                      <a href='#'>Video guías</a>
                    </div>
                    <div className='panela'>
                      <p>Servicios de ubicación</p>
                      <a href='#'>Dónde estamos</a>
                      <a href='#'>Encuentre un instalador certificado</a>
                      <a href='#'>Buscar un taller de carrocería</a>
                    </div>
                    <div className='panela'>
                      <p>Persona Jurídica (Empresa)</p>
                      <a href='#'>Acerca de</a>
                      <a href='#'>Empleo</a>
                      <a href='#'>Relaciones con los inversores</a>
                    </div>
                  </div>
                </div>
              )}
              <button className="desktop-button" onMouseEnter={() => handleMouseEnter('shop')} onMouseLeave={handleMouseLeave} >Tienda</button>
              {activePanel === 'shop' && (
                <div className="panel2" onMouseEnter={() => handleMouseEnter('shop')} onMouseLeave={handleMouseLeave}>
                  <div className="panel-content">
                    <div className='imageButton'>
                      <button className="panel-button">
                        <img src={homeCharge} alt='homeCharge'/>
                      </button>
                      <p>Carga</p>
                    </div>
                    <div className='imageButton'>
                      <button className="panel-button">
                        <img src={weel} alt='weel'/>
                      </button>
                      <p>Accesorios para el vehículo</p>
                    </div>
                    <div className='imageButton'>
                      <button className="panel-button">
                        <img src={cap} alt='cap'/>
                      </button>
                      <p>Ropa</p>
                    </div>
                    <div className='imageButton'>
                      <button className="panel-button">
                        <img src={back} alt='back'/>
                      </button>
                      <p>Estilo de vida</p>
                    </div>
                  </div>
                </div>
              )}
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
