import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { totalItemsCount } = useCart();

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">☕ Cafe Noir</NavLink>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">
          Cart 
          {totalItemsCount > 0 && <span className="cart-badge">{totalItemsCount}</span>}
        </NavLink>
        <NavLink to="/login" style={{ border: '1px solid #e6b87d', padding: '0.4rem 1.2rem' }}>Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;