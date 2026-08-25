import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Publications from './components/Publications/Publications';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Patents from './components/Patents/Patents';
import Awards from './components/Awards/Awards';
import Activities from './components/Activities/Activities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loading from './components/Loading/Loading';
import Robot from './components/Robot/Robot';
import CustomCursor from './components/CustomCursor/CustomCursor';


function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Sync body background color with theme
    if (darkMode) {
      document.body.style.backgroundColor = '#0a0a0b';
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.style.backgroundColor = '#f9fafb';
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Publications />
      <Projects />
      <Certifications />
      <Patents />
      <Awards />
      <Activities />
      <Contact />
      <Footer />
      <ScrollToTop />
      <CustomCursor />
      <Robot />
    </div>
  );
}

export default App;
