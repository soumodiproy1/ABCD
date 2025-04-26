// components/Navbar.jsx
import React from "react";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>iPhone Store</h1>
      <div className="cart-info">Cart: {cartCount}</div>
    </nav>
  );
}

export default Navbar;