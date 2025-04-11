import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Hacker News Clone</h3>
          <p>
          A full-stack clone of Hacker News with features like post creation, voting, and commenting.
Built using React, TypeScript, Hono, Prisma, and PostgreSQL to deliver a performant and scalable user experience.
Designed to replicate the core functionality of Hacker News while showcasing clean architecture, modular code structure, and modern full-stack development practices.
          </p>
        </div>

        <div className="project-card">
          <h3>Web Security & Penetration Testing</h3>
          <p>
            Conducted penetration testing and implemented web security best practices to enhance application security. Focused on identifying vulnerabilities such as XSS, SQL injection, and CSRF, and applying secure coding principles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
