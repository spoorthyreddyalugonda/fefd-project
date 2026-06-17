import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Success! Logged into Cafe Noir as: ${email}`);
  };

  return (
    <div className="container">
      <div className="auth-wrapper">
        <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>Welcome Back</h2>
        <p style={{ color: '#777', marginBottom: '2.5rem' }}>Sign in to access your loyalty points & orders.</p>
        
        <form onSubmit={handleLogin}>
          <div className="auth-input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@domain.com" 
              value={email} 
              // This update handler allows typing and backspacing smoothly
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="auth-input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <button type="submit" className="auth-btn">Sign Into Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;