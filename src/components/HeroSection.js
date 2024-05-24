import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, imgSrc, videoSrc, buttons }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <section className="hero">
      <div className="selection">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="media">
        {imgSrc ? (
          <img src={imgSrc} alt={title} />
        ) : videoSrc ? (
          <video ref={videoRef} autoPlay muted loop>
            <source src={videoSrc} type="video/webm" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        ) : (
          <p>Contenido no disponible</p>
        )}
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
