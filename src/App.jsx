import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [backgroundImage, setBackgroundImage] = useState('/images/back.png');

  const handleThemeChange = (theme, themeColors) => {
    setCurrentTheme(theme);
    setBackgroundImage(themeColors.background);
  };

  return (
    <div>
      <Navbar />
      <Hero backgroundImage={backgroundImage} />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <section>
        <Footer/>
      </section>
      <ThemeSwitcher 
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />
    </div>
  );
};

export default App;
