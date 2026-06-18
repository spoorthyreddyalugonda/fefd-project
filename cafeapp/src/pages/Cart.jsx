import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal, estimatedTax, grandTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Your Basket is Empty</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Looks like you haven't selected any sweet pairings yet.</p>
        <Link to="/menu" className="btn">Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Your Order Summary</h2>
      
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item Details</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td style={{ fontSpread: '500' }}>{item.name}</td>
              {/* Updated syntax here */}
              <td>₹{item.price.toFixed(2)}</td>
              <td>
                <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span style={{ fontWeight: '600' }}>{item.quantity}</span>
                <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </td>
              {/* Updated syntax here */}
              <td style={{ fontWeight: '600' }}>₹{(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bill-summary">
        <h3 style={{ marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Receipt Breakdown</h3>
        <div className="bill-row">
          <span>Items Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="bill-row">
          <span>Estimated EST Tax (8%):</span>
          <span>₹{estimatedTax.toFixed(2)}</span>
        </div>
        <div className="bill-row" style={{ fontWeight: 'bold', fontSize: '1.25rem', paddingTop: '0.5rem', borderTop: '2px solid #1e110a' }}>
          <span>Grand Total:</span>
          <span style={{ color: '#a06a34' }}>₹{grandTotal.toFixed(2)}</span>
        </div>
        <button className="auth-btn" style={{ width: '100%', marginTop: '1rem' }} onClick={() => alert('Proceeding to payment gateway!')}>
          Checkout & Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
