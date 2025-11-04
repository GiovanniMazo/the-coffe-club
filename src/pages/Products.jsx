import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

export default function Products() {
  const [showProducts, setShowProducts] = useState(true);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className="products-page">
      {/* 🟤 Hero principal */}
      <section className="products-hero">
        <div className="hero-content">
          <h1>Descubre nuestros cafés artesanales ☕</h1>
          <p>
            Granos seleccionados de Colombia y del mundo, tostados con pasión
            para despertar tus sentidos.
          </p>
          <button className="hero-button" onClick={toggleProducts}>
            {showProducts ? "Ocultar cafés" : "Ver nuestros cafés"}
          </button>
        </div>
      </section>

      {/* 🟢 Lista de productos */}
      {showProducts && (
        <section className="products-section">
          <h2 className="products-title">Nuestros Productos</h2>
          <p className="products-description">
            Conoce nuestras variedades de café premium y elige tu favorito.
          </p>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
