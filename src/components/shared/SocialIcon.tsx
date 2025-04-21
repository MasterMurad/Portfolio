import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

interface SocialIconProps {
  type: string;
  size?: number;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type, size = 20, className = '' }) => {
  const getIcon = () => {
    switch (type.toLowerCase()) {
      case 'github':
        return <Github size={size} />;
      case 'linkedin':
        return <Linkedin size={size} />;
      case 'twitter':
        return <Twitter size={size} />;
      case 'mail':
        return <Mail size={size} />;
      default:
        return <ExternalLink size={size} />;
    }
  };

  return (
    <span className={className}>
      {getIcon()}
    </span>
  );
};

export default SocialIcon;