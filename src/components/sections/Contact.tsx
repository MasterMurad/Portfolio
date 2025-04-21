import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';
import SocialIcon from '../shared/SocialIcon';
import { socialLinks } from '../../data/socials';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      // This would typically send the form data to a backend
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-light-surface dark:bg-dark-surface">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact Me" 
          subtitle="Get in touch for opportunities or collaborations" 
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-text-dark dark:text-text-light mb-6">
              Let's Talk
            </h3>
            
            <p className="text-text-muted dark:text-text-light/70 mb-8">
              Feel free to contact me for job opportunities, project collaborations, or just to say hello. I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary-light shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-dark dark:text-text-light">
                    Email
                  </h4>
                  <a 
                    href="mailto:mastercottage007@gmail.com" 
                    className="text-text-muted dark:text-text-light/70 hover:text-primary-light dark:hover:text-primary-light transition-colors"
                  >
                    mastercottage007@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary-light shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-dark dark:text-text-light">
                    Phone
                  </h4>
                  <a 
                    href="tel:+880 106 796571" 
                    className="text-text-muted dark:text-text-light/70 hover:text-primary-light dark:hover:text-primary-light transition-colors"
                  >
                    +880 1406 796571
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary-light shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-dark dark:text-text-light">
                    Location
                  </h4>
                  <p className="text-text-muted dark:text-text-light/70 hover:text-primary-light dark:hover:text-primary-light transition-colors">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-text-dark dark:text-text-light mb-4">
                Connect with me
              </h4>
              
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center text-text-muted dark:text-text-light/70 hover:text-primary-light dark:hover:text-primary-light hover:bg-primary-light/10 transition-colors"
                    aria-label={link.name}
                  >
                    <SocialIcon type={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light-bg dark:bg-dark-bg p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <label htmlFor="name" className="block text-text-dark dark:text-text-light font-medium mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.name ? 'border-alert-light' : 'border-light-border dark:border-dark-border'
                  } bg-light-surface dark:bg-dark-surface text-text-dark dark:text-text-light focus:outline-none focus:ring-1 focus:ring-primary-light`}
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-alert-light">{errors.name.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-text-dark dark:text-text-light font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.email ? 'border-alert-light' : 'border-light-border dark:border-dark-border'
                  } bg-light-surface dark:bg-dark-surface text-text-dark dark:text-text-light focus:outline-none focus:ring-1 focus:ring-primary-light`}
                  placeholder="Your email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-alert-light">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-text-dark dark:text-text-light font-medium mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.subject ? 'border-alert-light' : 'border-light-border dark:border-dark-border'
                  } bg-light-surface dark:bg-dark-surface text-text-dark dark:text-text-light focus:outline-none focus:ring-1 focus:ring-primary-light`}
                  placeholder="Message subject"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-alert-light">{errors.subject.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-text-dark dark:text-text-light font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.message ? 'border-alert-light' : 'border-light-border dark:border-dark-border'
                  } bg-light-surface dark:bg-dark-surface text-text-dark dark:text-text-light focus:outline-none focus:ring-1 focus:ring-primary-light`}
                  placeholder="Your message"
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-alert-light">{errors.message.message}</p>
                )}
              </div>
              
              <Button type="submit" size="lg" className="w-full flex items-center justify-center" disabled={isSubmitting}>
                <Send size={18} className="mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;