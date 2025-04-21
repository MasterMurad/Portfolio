import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeMode } from '../../types';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: ThemeMode) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-surface dark:bg-dark-surface text-text-dark dark:text-text-light hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-text-dark" />
      ) : (
        <Sun size={20} className="text-text-light" />
      )}
    </button>
  );
};

export default ThemeToggle;