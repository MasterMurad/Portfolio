import React from 'react';
import SocialIcon from '../shared/SocialIcon';
import { socialLinks } from '../../data/socials';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light-surface dark:bg-dark-surface py-8 border-t border-light-border dark:border-dark-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-text-dark dark:text-text-light">
              Murad.Hossen
            </h3>
            <p className="text-text-muted dark:text-text-light/70 mt-1">
              .NET Developer | ASP.NET Core | Angular
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted dark:text-text-light/70 hover:text-primary-light dark:hover:text-primary-light transition-colors"
                aria-label={link.name}
              >
                <SocialIcon type={link.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-light-border dark:border-dark-border text-center">
          <p className="text-text-muted dark:text-text-light/70 text-sm">
            &copy; {currentYear} Murad.Hossen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;