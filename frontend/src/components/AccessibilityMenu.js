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
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-sm text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      data-testid="theme-toggle"
    >
      <Sun 
        size={18} 
        className={`transition-all duration-300 ${isDark ? 'opacity-50 scale-75' : 'opacity-100 scale-100 text-yellow-300'}`} 
      />
      
      {/* Toggle Track */}
      <div className="relative w-12 h-6 bg-slate-700 rounded-full p-1 transition-colors duration-300">
        {/* Toggle Thumb */}
        <div 
          className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${
            isDark 
              ? 'right-1 bg-slate-300' 
              : 'left-1 bg-yellow-400'
          }`}
        />
      </div>
      
      <Moon 
        size={18} 
        className={`transition-all duration-300 ${isDark ? 'opacity-100 scale-100 text-blue-300' : 'opacity-50 scale-75'}`} 
      />
    </button>
  );
};

export default AccessibilityMenu;
