import React from 'react';
import Hero from '../components/Hero';
import AboutCard from '../components/AboutCard';
import PriceCard from '../components/PriceCard';
import Testimony from '../components/Testimony';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="about">
        <h2 className="subtitle">Qué quieres probar de nuevo.</h2>
        <p className="about__paragraph">
          Existe gran variedad de tipos de café que aún no conoces y debes probar ahora mismo.
        </p>
        <AboutCard />
      </section>
      <section className="price">
        <h2 className="subtitle">El plan perfecto para un día frío</h2>
        <PriceCard />
        <div className="price__more">
          <h3 className="subtitle" style={{ marginTop: '40px' }}>¿Quieres conocer más cafés?</h3>
          <a href="#products" className="cta cta--more">Nuestros cafés ☕</a>
        </div>
      </section>
      <ProductList />
      <section className="testimony">
        <Testimony />
      </section>
    </div>
  );
};

export default Home;