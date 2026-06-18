import React from 'react';
import { useCart } from '../context/CartContext';

function ItemCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="menu-card">
      <div className="menu-img-wrapper">
        <img src={item.img} alt={item.name} className="menu-img" />
      </div>
      <div className="menu-content">
        <h3>{item.name}</h3>
        <p className="menu-desc">{item.desc}</p>
        <div className="card-action-row">
          {/* Updated syntax here */}
          <span className="price">₹{item.price.toFixed(2)}</span>
          <button className="add-btn" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;