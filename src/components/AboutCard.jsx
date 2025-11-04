import React from 'react';

const AboutCard = ({ title, description, image }) => {
  return (
    <article className="about__icons">
      <img src={image} alt={title} className="about__icon" />
      <h3 className="about__title">{title}</h3>
      <p className="about__paragraph">{description}</p>
    </article>
  );
};

export default AboutCard;