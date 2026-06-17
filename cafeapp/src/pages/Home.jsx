import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Warm Cups. Cozy Spaces.</h1>
        <p>Premium artisan coffee and fresh bakes served daily.</p>
        <Link to="/menu" className="btn">Order Online Now</Link>
      </div>
    </div>
  );
}

export default Home;