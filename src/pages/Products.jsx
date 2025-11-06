import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'origin') return a.origin.localeCompare(b.origin);
      return 0;
    });

  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Nuestros Productos</h1>
        <p>Descubre nuestra selección de cafés premium</p>
      </div>
      
      <div className="container">
        <div className="products-controls">
          <div className="products-filters">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>

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

        <div className={`products-grid ${viewMode}`}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
