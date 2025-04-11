import React from 'react';
import './Interests.css';

const Interests: React.FC = () => {
  return (
    <section className="interests-section">
      <h2 className="interests-heading">My Interests</h2>
      <p className="interests-subtitle">
        Here are a few areas that keep me curious and constantly learning:
      </p>

      <div className="interests-grid">
        <div className="interest-card">
          <i className="fas fa-pencil-ruler"></i>
          <h3>UI/UX Design</h3>
          <p>Passionate about crafting intuitive, user-centered designs and seamless user experiences.</p>
        </div>

        <div className="interest-card">
          <i className="fas fa-code-branch"></i>
          <h3>Open Source</h3>
          <p>Love collaborating on open source projects, contributing to the community and learning from others.</p>
        </div>

        <div className="interest-card">
          <i className="fas fa-laptop-code"></i>
          <h3>Frontend Tech</h3>
          <p>Excited by the latest in React, animations, and frontend performance optimization.</p>
        </div>

        <div className="interest-card">
          <i className="fas fa-blog"></i>
          <h3>Technical Writing</h3>
          <p>Enjoy simplifying complex tech concepts into engaging, digestible blog posts and tutorials.</p>
        </div>

        <div className="interest-card">
          <i className="fas fa-users"></i>
          <h3>Developer Communities</h3>
          <p>Active in dev communities — sharing knowledge, solving problems, and growing together.</p>
        </div>
      </div>
    </section>
  );
};

export default Interests;
