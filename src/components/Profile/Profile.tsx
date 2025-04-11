import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <section className="profile">
      <img
        src="/profile.jpg"
        alt="S Teja"
        className="profile-image"
      />

      <h1 className="profile-name">S Teja</h1>
      <h3 className="profile-title">Fullstack Developer</h3>

      {/* Tagline in a box */}
      <p className="profile-tagline-box">Developer | Creator</p>

      {/* Social Links in boxes */}
      <div className="profile-links-boxes">
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">X / Twitter</a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </section>
  );
};

export default Profile;
