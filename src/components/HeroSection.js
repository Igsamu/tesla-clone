import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, imgSrc, videoSrc, buttons }) => {

  return (
    <section className="hero">
      <div className="selection">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="image">
        {imgSrc ? <img src={imgSrc} alt={title} /> : <video autoPlay muted loop>
          <source src={videoSrc} type="video/webm" />
          Tu navegador no soporta la reproducción de videos.
        </video>}
      </div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} className={button.className}>{button.text}</button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
