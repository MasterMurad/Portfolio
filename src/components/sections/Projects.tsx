import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';
import Card from '../shared/Card';
import Badge from '../shared/Badge';
import Button from '../shared/Button';
import { projects } from '../../data/projects';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique technologies from all projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))].sort();
  
  const filteredProjects = filter
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-20 bg-light-surface dark:bg-dark-surface">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore my recent work" 
          center
        />
        
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === null
                ? 'bg-primary-light text-white'
                : 'bg-light-bg dark:bg-dark-bg text-text-muted dark:text-text-light/70 hover:bg-primary-light/20'
            }`}
          >
            All
          </button>
          
          {allTechnologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === tech
                  ? 'bg-primary-light text-white'
                  : 'bg-light-bg dark:bg-dark-bg text-text-muted dark:text-text-light/70 hover:bg-primary-light/20'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-text-dark dark:text-text-light mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-muted dark:text-text-light/70 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-text-dark dark:text-text-light hover:text-primary-light dark:hover:text-primary-light transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-text-dark dark:text-text-light hover:text-primary-light dark:hover:text-primary-light transition-colors ml-4"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
            size="lg"
          >
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;