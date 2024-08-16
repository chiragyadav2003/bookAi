import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className='relative'>
      <button
        onClick={toggleTheme}
        className="absolute right-2 top-2 mb-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 max-w-7xl"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default ThemeToggle;