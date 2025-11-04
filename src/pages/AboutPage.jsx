import React from 'react';
import AboutCard from '../components/AboutCard';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2 className="subtitle">Qué quieres probar de nuevo.</h2>
      <p className="about__paragraph">
        Existe gran variedad de tipos de café que aún no conoces y debes probar ahora mismo.
      </p>
      <div className="about__main">
        <AboutCard 
          title="Capuccino" 
          description="Es una bebida nacida en Italia, preparada con café expreso y leche montada con vapor para darle cremosidad."
          image="./imagenes/vaso.svg"
        />
        <AboutCard 
          title="Mocacino" 
          description="Es una variante del café con leche. Lleva expreso, leche vaporizada y chocolate en jarabe o polvo."
          image="./imagenes/coffe.svg"
        />
        <AboutCard 
          title="Espresso" 
          description="Es un tipo de café negro fuerte que se forma cuando el agua caliente pasa a mucha presión a través del café molido."
          image="./imagenes/vasito.svg"
        />
      </div>
    </div>
  );
};

export default AboutPage;