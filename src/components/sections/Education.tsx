import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';
import Card from '../shared/Card';
import { education } from '../../data/education';
import { certificates } from '../../data/certificates';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Education & Certifications" 
          subtitle="My academic background and professional certifications"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-text-dark dark:text-text-light mb-6 flex items-center">
              <GraduationCap className="mr-2 text-primary-light" />
              Education
            </h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-primary-light/30 before:bg-gradient-to-b before:from-primary-light before:to-transparent">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary-light border-4 border-light-bg dark:border-dark-bg"></div>
                  
                  <Card className="p-5">
                    <h4 className="text-lg font-semibold text-text-dark dark:text-text-light">
                      {item.degree}
                    </h4>
                    <p className="text-primary-light font-medium">
                      {item.institution}
                    </p>
                    <p className="text-sm text-text-muted dark:text-text-light/70 mt-1">
                      {item.duration}
                    </p>
                    <p className="mt-2 text-text-muted dark:text-text-light/70">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-text-dark dark:text-text-light mb-6 flex items-center">
              <Award className="mr-2 text-primary-light" />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 gap-5">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="p-5 border-l-4 border-l-primary-light">
                    <h4 className="text-lg font-semibold text-text-dark dark:text-text-light">
                      {certificate.name}
                    </h4>
                    <p className="text-text-muted dark:text-text-light/70">
                      {certificate.issuer}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-text-muted dark:text-text-light/70">
                        {certificate.date}
                      </span>
                      <a
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light hover:text-primary-dark dark:hover:text-primary-light/80 transition-colors text-sm"
                      >
                        View Certificate
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;