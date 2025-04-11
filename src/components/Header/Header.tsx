import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-header">
      <nav className="navbar">
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work-experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/interests">Interests</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
