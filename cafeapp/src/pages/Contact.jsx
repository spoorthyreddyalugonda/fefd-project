import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h2 style={{ fontSize: '2.5rem', color: '#1e110a', textAlign: 'center', marginBottom: '2rem' }}>Get in Touch</h2>
      <div className="row">
        <div className="col">
          <form className="form-group" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <textarea rows="6" placeholder="Write your message here..." required></textarea>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>
        <div className="col" style={{ paddingLeft: '1rem' }}>
          <h3>The Cafe Location</h3>
          <p style={{ color: '#555' }}>📍 Kharmanghat,Road.no 3,opp.of.vv appartments</p>
          <p style={{ color: '#555' }}>📞 Telephone: 9876543201</p>
          <p style={{ color: '#555' }}>✉️ Email: contact@cafenoir.com</p>
          
          <h3 style={{ marginTop: '2rem' }}>Working Hours</h3>
          <p style={{ color: '#555', margin: '0.4rem 0' }}>🗓️ Weekdays: 6:30 AM – 8:00 PM</p>
          <p style={{ color: '#555', margin: '0.4rem 0' }}>🗓️ Week weekends: 8:00 AM – 9:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact; // <-- Make sure this is here too!