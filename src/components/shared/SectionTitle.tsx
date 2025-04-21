import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = false }) => {
  return (
    <motion.div 
      className={`mb-10 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-text-light">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-text-muted dark:text-text-light/70">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-primary-light mt-4 mb-2 rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;