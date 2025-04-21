import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';
import SocialIcon from '../shared/SocialIcon';
import { socialLinks } from '../../data/socials';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SERVICE_ID = 'service_m8t2yee';
const TEMPLATE_ID = 'template_8ffddu6';
const PUBLIC_KEY = 'g2T17_D-SRp_MW4sA';

const ContactTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      alert('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Email sending error:', error);
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
            <h3 className="text-2xl font-semibold text-text-dark dark:text-text-light mb-6">Let's Talk</h3>
            <p className="text-text-muted dark:text-text-light/70 mb-8">
              Feel free to contact me for job opportunities, project collaborations, or just to say hello.
            </p>
            <div className="space-y-4">
              {/* Contact Info */}
              <ContactInfo icon={Mail} label="Email" value="mastercottage007@gmail.com" link="mailto:mastercottage007@gmail.com" />
              <ContactInfo icon={Phone} label="Phone" value="+880 1406 796571" link="tel:+8801406796571" />
              <ContactInfo icon={MapPin} label="Location" value="Dhaka, Bangladesh" />
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium text-text-dark dark:text-text-light mb-4">Connect with me</h4>
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light-bg dark:bg-dark-bg p-6 rounded-lg shadow-sm">
              <InputField label="Name" id="name" register={register} errors={errors} required />
              <InputField label="Email" id="email" register={register} errors={errors} required type="email" />
              <InputField label="Subject" id="subject" register={register} errors={errors} required />
              <TextareaField label="Message" id="message" register={register} errors={errors} required />

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

// ⬇️ Reusable sub-components for cleaner code
const ContactInfo = ({ icon: Icon, label, value, link }: any) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary-light shrink-0">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-lg font-medium text-text-dark dark:text-text-light">{label}</h4>
      {link ? (
        <a href={link} className="text-text-muted dark:text-text-light/70 hover:text-primary-light transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-text-muted dark:text-text-light/70">{value}</p>
      )}
    </div>
  </div>
);

const InputField = ({ label, id, register, errors, required, type = 'text' }: any) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-text-dark dark:text-text-light font-medium mb-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      className={`w-full px-4 py-2 rounded-md border ${
        errors[id] ? 'border-alert-light' : 'border-light-border dark:border-dark-border'
      } bg-light-surface dark:bg-dark-surface text-text-dark dark:text-text-light focus:outline-none focus:ring-1 focus:ring-primary-light`}
      {...register(id, { required: `${label} is required` })}
    />
    {errors[id] && <p className="mt-1 text-sm text-alert-light">{errors[id]?.message}</p>}
  </div>
);

const TextareaField = ({ label, id, register, errors, required }: any) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-text-dark dark:text-text-light font-medium mb-1">
      {label}
    </label>
    <textarea
      id={id}
      rows={5}
      className={`w-full px-4 py-2 rounded-md border ${
        errors[id] ? 'border-alert-light' : 'border-light-border dark:border-dark-border'
      } bg-light-surface dark:bg-dark-surface text-text-dark dark:text-text-light focus:outline-none focus:ring-1 focus:ring-primary-light`}
      {...register(id, { required: `${label} is required` })}
    />
    {errors[id] && <p className="mt-1 text-sm text-alert-light">{errors[id]?.message}</p>}
  </div>
);

export default ContactTest;