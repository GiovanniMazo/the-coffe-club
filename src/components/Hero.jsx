import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const bannerUrl = '/images/banner.jpg';
  const overlay = 'linear-gradient(rgba(44,24,16,0.5), rgba(44,24,16,0.5))';

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `${overlay}, url(${bannerUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // 💫 efecto parallax
      }}
    >
      <div className="hero__container container">
        <h1 className="hero__title animate-fade-up">
          Descubre nuevos sabores <br /> y aromas cada mañana
        </h1>

        <p className="hero__paragraph animate-fade-up delay-1">
          Elige ser feliz tomando café ☕
        </p>

        <div className="hero__buttons animate-fade-up delay-2">
          <Link to="/products" className="cta cta--primary">
            Ver productos
          </Link>
          <a href="#about" className="cta cta--secondary">
            Conócenos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
