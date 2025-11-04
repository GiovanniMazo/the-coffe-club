import product1 from '../assets/products/product1.jpg';
import product2 from '../assets/products/product2.jpg';
import product3 from '../assets/products/product3.jpg';

export const products = [
  {
    id: 1,
    name: "Café Arábica Premium",
    description: "Café de altura con notas de chocolate y frutos rojos",
    price: 15.99,
    image: product1,
    category: "granos",
    origin: "Colombia",
    roastLevel: "Medio"
  },
  {
    id: 2,
    name: "Espresso Blend",
    description: "Mezcla perfecta para espresso con cuerpo intenso",
    price: 14.99,
    image: product2,
    category: "granos",
    origin: "Brasil, Ethiopia",
    roastLevel: "Oscuro"
  },
  {
    id: 3,
    name: "Café Orgánico",
    description: "Cultivado naturalmente sin pesticidas",
    price: 17.99,
    image: product3,
    category: "granos",
    origin: "Perú",
    roastLevel: "Medio-Claro"
  },
  {
    id: 4,
    name: "Café Descafeinado",
    description: "Todo el sabor sin cafeína",
    price: 16.99,
    image: product1,
    category: "descafeinado",
    origin: "México",
    roastLevel: "Medio"
  },
  {
    id: 5,
    name: "Café Molido Clásico",
    description: "Blend tradicional, perfecto para cafeteras de filtro",
    price: 12.99,
    image: product2,
    category: "molido",
    origin: "Guatemala",
    roastLevel: "Medio"
  },
  {
    id: 6,
    name: "Café en Cápsulas",
    description: "Compatibles con máquinas Nespresso®",
    price: 19.99,
    image: product3,
    category: "capsulas",
    origin: "Varios",
    roastLevel: "Variado"
  }
];