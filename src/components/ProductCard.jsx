import React from "react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD", item: product });
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
        <div className="product-card__overlay">
          <button className="product-card__button" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <span className="product-card__price">
          {formatCurrency(product.price)}
        </span>
      </div>
    </div>
  );
}
