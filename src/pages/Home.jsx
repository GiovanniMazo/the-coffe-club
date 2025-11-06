import React from 'react';
import Hero from '../components/Hero';
import AboutCard from '../components/AboutCard';
import PriceCard from '../components/PriceCard';
import Testimony from '../components/Testimony';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="home-page">

      {/* 🟤 HERO PRINCIPAL */}
      <Hero />

      {/* 🟤 SECCIÓN ABOUT */}
      <section id="about" className="about section">
        <h2 className="subtitle">Qué quieres probar de nuevo</h2>
        <p className="about__paragraph">
          Existe gran variedad de tipos de café que aún no conoces y debes probar ahora mismo.
        </p>
        <AboutCard />
      </section>

      {/* 🟤 SECCIÓN DE PLAN / PROMOCIÓN */}
      <section className="price section">
        <h2 className="subtitle">El plan perfecto para un día frío ☕</h2>
        <PriceCard />

        <div className="price__more">
          <h3 className="subtitle">¿Quieres conocer más cafés?</h3>
          <a href="/products" className="cta cta--more">
            Nuestros cafés ☕
          </a>
        </div>
      </section>

      {/* 🟤 LISTA DE PRODUCTOS */}
      <section className="products-preview section">
        <h2 className="subtitle">Conoce nuestros productos</h2>
        <ProductList />
      </section>

      {/* 🟤 TESTIMONIOS */}
      <section className="testimony section">
        <Testimony />
      </section>
    </div>
  );
};

export default Home;
