import React from 'react';
import './MenuList.css';
import sitioWeb from '../media/sitio-web.png';
import usuario from '../media/usuario.png';

const MenuList = ({ toggleMenu, isOpen }) => {
  return (
    <div className={`menulistdiv ${isOpen ? 'open' : ''}`} id="menuListDiv">
      <button id="closeButton" onClick={toggleMenu}>X</button>
      <div className="menuBut">
        <button className="menuButton">Vehículos<span>&gt</span></button>
        <button className="menuButton">Energía<span>&gt</span></button>
        <button className="menuButton">Carga<span>&gt</span></button>
        <button className="menuButton">Descubrir<span>&gt</span></button>
        <button className="menuButton">Tienda</button>
        <button className="menuButton">Soporte</button>
        <button className="menuButton">
          <span>
            <img src={sitioWeb} alt="web" />España<br /><span className="subtext">español</span>
          </span>
          <span>&gt</span>
        </button>
        <button className="menuButton">
          <span>
            <img src={usuario} alt="usuario" />Cuenta
          </span>
        </button>
      </div>
    </div>
  );
};

export default MenuList;
