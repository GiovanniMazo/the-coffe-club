import React from 'react';

const PriceCard = ({ name, price, onBuy }) => {
  return (
    <div className="price__element">
      <p className="price__name">{name}</p>
      <h3 className="price__price">{price} COP</h3>
      <button className="price__cta" onClick={onBuy}>
        Comprar
      </button>
    </div>
  );
};

export default PriceCard;