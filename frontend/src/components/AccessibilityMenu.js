import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

const AccessibilityMenu = () => {
  const { theme, setTheme } = useAccessibility();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/80 backdrop-blur-sm text-white shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      data-testid="theme-toggle"
    >
      <Sun 
        size={16} 
        className={`sm:w-[18px] sm:h-[18px] transition-all duration-300 ${isDark ? 'opacity-50 scale-75' : 'opacity-100 scale-100 text-yellow-300'}`} 
      />
      
      {/* Toggle Track */}
      <div className="relative w-10 h-5 sm:w-12 sm:h-6 bg-slate-700 rounded-full p-1 transition-colors duration-300">
        {/* Toggle Thumb */}
        <div 
          className={`absolute top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
            isDark 
              ? 'right-1 bg-slate-300' 
              : 'left-1 bg-yellow-400'
          }`}
        />
      </div>
      
      <Moon 
        size={16} 
        className={`sm:w-[18px] sm:h-[18px] transition-all duration-300 ${isDark ? 'opacity-100 scale-100 text-blue-300' : 'opacity-50 scale-75'}`} 
      />
    </button>
  );
};

export default AccessibilityMenu;
