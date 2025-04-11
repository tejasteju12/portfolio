import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} S Teja. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
