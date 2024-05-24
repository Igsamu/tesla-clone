// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../media/Logo.webp';

const Header = ({ toggleMenu }) => {
  return (
    <header>
      <nav>
        <a href="logo" className="logo">
          <img src={logo} alt="Tesla Logo" />
        </a>
        <button className="menu" onClick={toggleMenu}>Menú</button>
      </nav>
    </header>
  );
};

export default Header;
