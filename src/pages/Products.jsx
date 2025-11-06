import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // ✅ Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setIsCartVisible(true);

    // Ocultar notificación luego de 2 segundos
    setTimeout(() => setIsCartVisible(false), 2000);
  };

  // ✅ Obtener categorías dinámicamente
  const categories = ['all', ...new Set(products.map((p) => p.category))];

  // ✅ Filtrar y ordenar productos
  const filteredProducts = products
    .filter(
      (p) => selectedCategory === 'all' || p.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'origin') return a.origin.localeCompare(b.origin);
      return 0;
    });

  return (
    <div className="products-page">
      {/* 🟤 Encabezado de sección con fondo dinámico */}
      <div
        className="products-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.7)),
            url('/images/products/CafeColombia.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1>Nuestros Productos</h1>
        <p>Descubre nuestra selección de cafés premium</p>
      </div>

      <div className="container">
        {/* 🎛️ Controles de filtrado y vista */}
        <div className="products-controls">
          {/* Filtros */}
          <div className="products-filters">
            {/* Filtro de categoría */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>

            {/* Filtro de orden */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="name">Ordenar por nombre</option>
              <option value="price">Ordenar por precio</option>
              <option value="origin">Ordenar por origen</option>
            </select>
          </div>

          {/* Botones de cambio de vista */}
          <div className="view-toggle">
            <button
              onClick={() => setViewMode('grid')}
              className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
            >
              Lista
            </button>
          </div>
        </div>

        {/* 🟤 Contenedor de productos */}
        <div className={`products-grid ${viewMode}`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart} // ✅ Pasamos la función al hijo
            />
          ))}
        </div>
      </div>

      {/* 🟢 Notificación visual */}
      <div className={`cart-notification ${isCartVisible ? 'active' : ''}`}>
        ¡Producto agregado al carrito!
      </div>
    </div>
  );
};

export default Products;
