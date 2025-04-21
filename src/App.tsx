import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import ContactTest from './components/sections/ContactTest';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Update the document title
    document.title = "Md. Murad Hossen | .NET Developer Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-text-dark dark:text-text-light">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-light z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        {/* <Contact /> */}
        <ContactTest/>
      </main>
      <Footer />
    </div>
  );
}

export default App;