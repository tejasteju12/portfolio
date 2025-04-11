import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>

        <div className="about-item">
          <i className="fas fa-user-circle"></i>
          <p>
            I'm <strong>S Teja</strong>, a full-stack developer and data enthusiast passionate about building clean, functional, and insightful digital experiences.
          </p>
        </div>

        <div className="about-item">
          <i className="fas fa-chart-line"></i>
          <p>
            From Airbnb market analysis to mining Udemy course data and building AI-powered health tools, I blend technology with real-world impact.
          </p>
        </div>

        <div className="about-item">
          <i className="fas fa-code"></i>
          <p>
            I started as a competitive programmer — a journey that sharpened my problem-solving mindset and still influences my work today.
          </p>
        </div>

        <div className="about-item">
          <i className="fas fa-briefcase"></i>
          <p>
            I recently completed an internship at <strong>Stacklane</strong>, where I worked with scalable systems and gained real-world development experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
