// App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navber";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Navbar cartCount={cartItems.length} />
      <Home addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
