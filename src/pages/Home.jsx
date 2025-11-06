import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutCard from '../components/AboutCard';
import PriceCard from '../components/PriceCard';
import Testimony from '../components/Testimony';

const Home = () => {
  return (
    <div>
      {/* 🟤 Sección principal con banner */}
      <Hero />

      {/* 🟢 Sección “Sobre nosotros” */}
      <section id="about" className="about">
        <h2 className="subtitle">Qué quieres probar de nuevo.</h2>
        <p className="about__paragraph">
          Existe gran variedad de tipos de café que aún no conoces y debes probar ahora mismo.
        </p>
        <AboutCard />
      </section>

      {/* 🟠 Plan perfecto */}
      <section className="price">
        <h2 className="subtitle">El plan perfecto para un día frío</h2>
        <PriceCard />

        <div className="price__more">
          <h3 className="subtitle" style={{ marginTop: '40px' }}>
            ¿Quieres conocer más cafés?
          </h3>
          {/* Cambiamos el enlace interno por navegación hacia /products */}
          <Link to="/products" className="cta cta--more">
            Nuestros cafés ☕
          </Link>
        </div>
      </section>

      {/* 💬 Opiniones de clientes */}
      <section className="testimony">
        <Testimony />
      </section>
    </div>
  );
};

export default Home;
