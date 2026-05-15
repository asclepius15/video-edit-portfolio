import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-gray-200/60 border-b border-gray-300/40 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="text-2xl font-bold tracking-widest text-gray-600 dark:text-gray-100" style={{ letterSpacing: '0.15em' }}>
        PS VERSE
      </div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark/light mode"
        className="p-2 rounded-full bg-gray-300/60 dark:bg-gray-700/60 border border-gray-400/40 dark:border-gray-700/60 hover:bg-gray-400/80 hover:dark:bg-gray-800/80 transition-colors"
      >
        {theme === 'dark' ? (
          <Sun size={22} className="text-yellow-300" />
        ) : (
          <Moon size={22} className="text-blue-700" />
        )}
      </button>
    </header>
  );
};

export default Header;