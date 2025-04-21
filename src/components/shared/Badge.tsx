import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default'
}) => {
  const variantStyles = {
    default: 'bg-gray-100 text-text-muted dark:bg-dark-surface dark:text-text-light/70',
    primary: 'bg-primary-light/20 text-primary-dark dark:bg-primary-dark/30 dark:text-primary-light',
    secondary: 'bg-accent-light/20 text-accent-dark dark:bg-accent-dark/30 dark:text-accent-light',
    outline: 'border border-gray-200 dark:border-dark-border text-text-muted dark:text-text-light/70'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;