import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '../shared/Button';
import SocialIcon from '../shared/SocialIcon';
import { socialLinks } from '../../data/socials';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-light-bg dark:bg-dark-bg pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark dark:text-text-light">
              <span className="block">Hi, I'm Murad Hossen</span>
              <span className="block mt-2 text-primary-light">
                .NET Developer
              </span>
            </h1>
            
            <p className="mt-4 text-xl text-text-muted dark:text-text-light/70 max-w-lg mx-auto lg:mx-0">
              Building robust, scalable web applications with C#, ASP.NET Core, and modern frontend technologies.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToAbout} size="lg">
                Explore My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center lg:justify-start gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted dark:text-text-light/70 hover:text-primary-light dark:hover:text-primary-light transition-colors"
                  aria-label={link.name}
                >
                  <SocialIcon type={link.icon} size={24} />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 p-2 mx-auto">
                <div className="w-full h-full rounded-full bg-light-surface dark:bg-dark-surface overflow-hidden border-4 border-primary-light">
                  {/* This would be a profile image - using a placeholder for now */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-light/40 to-accent-light/40 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary-dark">MD</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-light/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light/30 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button 
            onClick={scrollToAbout}
            aria-label="Scroll down"
            className="text-text-muted dark:text-text-light/70 hover:text-primary-light dark:hover:text-primary-light transition-colors"
          >
            <ArrowDown size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;