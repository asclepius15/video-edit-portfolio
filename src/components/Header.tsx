import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-gray-200/60 border-b border-gray-300/40 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="text-2xl font-bold tracking-widest text-gray-600 dark:text-gray-100" style={{ letterSpacing: '0.15em' }}>
        PINTOO EDITZ
      </div>
      
    </header>
  );
};

export default Header;