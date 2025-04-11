import React from 'react';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  return (
    <section className="work-experience">
      <div className="experience-container">
        <h2 className="experience-heading">Work Experience</h2>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Fullstack Developer Intern – <span>Stacklane</span></h3>
            <p className="experience-date">March 2025 – Present</p>
          </div>
          <p className="experience-description">
            Working across the stack to build and maintain scalable web applications.
            Responsible for developing frontend components with React and TypeScript,
            integrating backend APIs, and optimizing performance across the application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
