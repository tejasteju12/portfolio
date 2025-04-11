import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';
import Interests from './components/Interests/Interests';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import './App.css'; // Import the styles

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
