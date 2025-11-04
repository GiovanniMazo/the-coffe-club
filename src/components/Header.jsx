import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { brand } from "../brand";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { state } = useCart();
  const items = state?.items || [];

  // Cambia color del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alternar menú en móvil
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <nav className="nav">
        <div className="nav__container">
          {/* LOGO */}
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            <h2 className="nav__title">{brand.name}</h2>
          </Link>

          {/* BOTÓN HAMBURGUESA */}
          <button
            className={`nav__toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span className="nav__toggle-icon"></span>
          </button>
        </div>

        {/* MENÚ DE NAVEGACIÓN */}
        <ul className={`nav__menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav__item">
            <NavLink
              to="/"
              end
              className="nav__link"
              onClick={closeMenu}
            >
              Inicio
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/productos"
              className="nav__link"
              onClick={closeMenu}
            >
              Productos
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/sobre-mi"
              className="nav__link"
              onClick={closeMenu}
            >
              Sobre mí
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/contacto"
              className="nav__link"
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/blog"
              className="nav__link"
              onClick={closeMenu}
            >
              Blog
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/recetas"
              className="nav__link"
              onClick={closeMenu}
            >
              Recetas
            </NavLink>
          </li>

          {/* CARRITO */}
          <li className="nav__item">
            <NavLink
              to="/carrito"
              className="nav__link nav__link--cart"
              onClick={closeMenu}
            >
              🛒
              {items.length > 0 && (
                <span className="cart-badge">{items.length}</span>
              )}
            </NavLink>
          </li>

          {/* CTA */}
          <li className="nav__item">
            <NavLink
              to="/checkout"
              className="nav__link nav__link--cta"
              onClick={closeMenu}
            >
              Ordenar ahora
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
