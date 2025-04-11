import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-subtitle">Let’s connect and build something awesome together.</p>

      <div className="contact-container">
        <div className="contact-cards">
          <div className="contact-card">
            <i className="fas fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:steja.1si21ad059@gmail.com">steja.1si21ad059@gmail.com</a>
          </div>

          <div className="contact-card">
            <i className="fab fa-linkedin" />
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/steja" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/steja
            </a>
          </div>
        </div>

        <p className="or-separator">— OR —</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="What's on your mind?" rows={4} required />
          <button type="submit">Let's Talk</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
