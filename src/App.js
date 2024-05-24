import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import MenuList from './components/MenuList';

import modelYMobile from './media/Homepage-Model-Y-Mobile-Global.avif';
import modelYDesktop from './media/Homepage-Model-Y-Desktop-Global.avif';

import model3Mobile from './media/Homepage-Model-3-Mobile-LHD-v2.avif';
import model3Desktop from './media/Homepage-Model-3-Desktop-LHD-v2.avif';

import modelSMobile from './media/Model-S-homepage-Mobile.avif';
import modelSDesktop from './media/Model-S-homepage-Desktop.avif';

import modelXMobile from './media/Homepage-Model-X-Mobile.avif';
import modelXDesktop from './media/Homepage-Model-X-Desktop.avif';

import demoDriveMobile from './media/Homepage-Demo-Drive-Mobile-NA.webm';
import demoDriveDesktop from './media/Homepage-Demo-Drive-Desktop-Poster-NA.avif';

import solarPanelsMobile from './media/SolarPanels-Mobile.avif';
import solarPanelsDesktop from './media/SolarPanels-Desktop.avif';

import accessoriesMobile from './media/Homepage-Accessories-Mobile-EMEA.avif';
import accessoriesDesktop from './media/Homepage-Accessories-Desktop-EMEA.avif';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDesktop = screenWidth > 724;

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
      <MenuList isOpen={menuOpen} toggleMenu={toggleMenu} />
      <main>  
      <HeroSection
          title="Model Y"
          imgSrc={isDesktop ? modelYDesktop : modelYMobile}
          buttons={[
            { className: 'order', text: 'Encargar' },
            { className: 'test-drive', text: 'Prueba de conducción' },
          ]}
        />
        <HeroSection 
          title="Model 3"
          imgSrc={isDesktop ? model3Desktop : model3Mobile} 
          buttons={[
            { className: 'order', text: 'Encargar' },
            { className: 'test-drive', text: 'Prueba de conducción' },
          ]}
        />
        <HeroSection 
          title="Model S"
          imgSrc={isDesktop ? modelSDesktop : modelSMobile} 
          buttons={[
            { className: 'order', text: 'Encargar' },
            { className: 'test-drive', text: 'Prueba de conducción' },
          ]}
        />
        <HeroSection 
          title="Model X"
          imgSrc={isDesktop ? modelXDesktop : modelXMobile} 
          buttons={[
            { className: 'order', text: 'Encargar' },
            { className: 'test-drive', text: 'Prueba de conducción' },
          ]}
        />
        <HeroSection 
          title="Disfrute de Tesla"
          subtitle="Programe una prueba de conducción hoy mismo"
          imgSrc={isDesktop ? demoDriveDesktop : demoDriveMobile} 
          buttons={[
            { className: 'test-drive-d', text: 'Prueba de conducción' },
          ]}
        />
        <HeroSection 
          title="Solar y Powerwall"
          subtitle="Energía para todos"
          imgSrc={isDesktop ? solarPanelsDesktop : solarPanelsMobile} 
          buttons={[
            { className: 'order', text: 'Saber más' },
          ]}
        />
        <HeroSection 
          title="Accesorios"
          imgSrc={isDesktop ? accessoriesDesktop : accessoriesMobile} 
          buttons={[
            { className: 'test-drive', text: 'Comprar' },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
