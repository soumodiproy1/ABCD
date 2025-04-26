// components/Home.jsx
import React from "react";
import ProductCard from "./ProductCard";
import "./Home.css";

const products = [
  { id: 1, name: "iPhone 14", price: 799 },
  { id: 2, name: "iPhone 14 Pro", price: 999 },
  { id: 3, name: "iPhone 13", price: 699 },
];

function Home({ addToCart }) {
  return (
    <div className="home">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Home;