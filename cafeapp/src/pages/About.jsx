import React from 'react';
function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img 
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600" 
            alt="Interior" 
            style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }} 
          />
        </div>
        <div className="col">
          <h2 style={{ fontSize: '2.5rem', color: '#1e110a', marginBottom: '1rem' }}>Our Story</h2>
          <p style={{ lineHeight: '1.6', color: '#444' }}>
            Born out of a deep-seated passion for specialty coffee roasting, Cafe Noir opened its heavy oak doors in 2022. We set out with one goal: to create an unhurried, beautiful sanctuary for coffee enthusiasts.
          </p>
          <p style={{ lineHeight: '1.6', color: '#444' }}>
            We hand-select single-origin green coffee beans from sustainable farms across high-altitude regions. By roasting them fresh in small batches weekly, we tease out sweet, complex flavor balances unique to every bean.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About; // <-- This is the exact line that was missing or broken!