import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const bannerUrl = process.env.PUBLIC_URL + '/images/banner.jpg';
  const overlay = 'linear-gradient(rgba(44,24,16,0.45), rgba(44,24,16,0.45))';

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `${overlay}, url(${bannerUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}
    >
      <div className="hero__container container">
        <h1 className="hero__title">Descubre nuevos sabores y aromas cada mañana</h1>
        <p className="hero__paragraph">Elige ser feliz tomando café</p>
        <div className="hero__buttons">
          <Link
            to="/products"
            className="cta cta--primary"
          >
            Ver productos
          </Link>
          <a href="#about" className="cta cta--secondary">Conócenos</a>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-icon"></div>
          <span>Desliza para ver más</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;