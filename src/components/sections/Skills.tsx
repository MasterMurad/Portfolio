import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';
import SkillIcon from '../shared/SkillIcon';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies and tools I work with" 
          center
        />
        
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === null
                ? 'bg-primary-light text-white'
                : 'bg-light-surface dark:bg-dark-surface text-text-muted dark:text-text-light/70 hover:bg-primary-light/20'
            }`}
          >
            All
          </button>
          
          {skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(skill.category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === skill.category
                  ? 'bg-primary-light text-white'
                  : 'bg-light-surface dark:bg-dark-surface text-text-muted dark:text-text-light/70 hover:bg-primary-light/20'
              }`}
            >
              {skill.category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredSkills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-md p-6 border border-light-border dark:border-dark-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-text-dark dark:text-text-light mb-6">
                {skillCategory.category}
              </h3>
              
              <div className="space-y-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <SkillIcon
                          type={skill.icon}
                          className="text-primary-light"
                        />
                        <span className="text-text-dark dark:text-text-light">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-text-muted dark:text-text-light/70">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2.5">
                      <motion.div
                        className="bg-primary-light h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;