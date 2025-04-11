import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <h2 className="education-heading">Education</h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>AP Model School</h3>
            <p>2013 – 2018</p>
            <span>High School Education</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Sri Saptagiri PU College, Tumkur</h3>
            <p>2018 – 2020</p>
            <span>Pre-University Course</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Siddaganga Institute of Technology</h3>
            <p>2021 – 2025</p>
            <span>Bachelor of Technology in AI & Data Science</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
