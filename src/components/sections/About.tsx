import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';
import { Code, Database, Server, Laptop } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: "Backend Development",
      description: "Building robust APIs and services with C# and .NET Core"
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description: "Creating efficient database schemas with SQL Server and Entity Framework"
    },
    {
      icon: <Server size={24} />,
      title: "Cloud Services",
      description: "Deploying and managing applications on Azure cloud platform"
    },
    {
      icon: <Laptop size={24} />,
      title: "Frontend Integration",
      description: "Connecting backend services with modern frontend frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-light-surface dark:bg-dark-surface">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background and what I do"
        />
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-text-dark dark:text-text-light leading-relaxed">
              I'm a passionate .NET Developer with a strong foundation in building web applications using Microsoft technologies. My journey in software development began during my computer science studies, where I discovered my enthusiasm for creating elegant solutions to complex problems.
            </p>
            
            <p className="text-lg text-text-dark dark:text-text-light leading-relaxed mt-4">
              As a fresh graduate, I bring a combination of academic knowledge and practical experience gained through internships and personal projects. I'm particularly interested in backend development using ASP.NET Core, database design with Entity Framework, and cloud-based solutions with Azure.
            </p>
            
            <p className="text-lg text-text-dark dark:text-text-light leading-relaxed mt-4">
              I'm constantly learning and exploring new technologies to enhance my skills and stay at the forefront of .NET development. My goal is to build efficient, scalable, and maintainable applications that deliver real value.
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-light-bg dark:bg-dark-bg p-6 rounded-lg shadow-sm border border-light-border dark:border-dark-border hover:border-primary-light dark:hover:border-primary-light transition-colors"
              >
                <div className="w-12 h-12 bg-primary-light/20 dark:bg-primary-dark/20 rounded-lg flex items-center justify-center text-primary-light mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-dark dark:text-text-light mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-muted dark:text-text-light/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;