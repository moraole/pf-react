import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  // Theme: light, dark, high-contrast
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Font size: small, medium, large, extra-large
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('fontSize') || 'medium';
  });

  // Motion: reduced or full
  const [reducedMotion, setReducedMotion] = useState(() => {
    return localStorage.getItem('reducedMotion') === 'true' || false;
  });

  // Dyslexia-friendly font
  const [dyslexiaFont, setDyslexiaFont] = useState(() => {
    return localStorage.getItem('dyslexiaFont') === 'true' || false;
  });

  // Focus indicators
  const [enhancedFocus, setEnhancedFocus] = useState(() => {
    return localStorage.getItem('enhancedFocus') === 'true' || false;
  });

  // Update theme
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update body class for theme
    document.body.className = theme;
  }, [theme]);

  // Update font size
  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  // Update motion preference
  useEffect(() => {
    localStorage.setItem('reducedMotion', reducedMotion.toString());
    document.documentElement.setAttribute('data-reduced-motion', reducedMotion.toString());
  }, [reducedMotion]);

  // Update dyslexia font
  useEffect(() => {
    localStorage.setItem('dyslexiaFont', dyslexiaFont.toString());
    document.documentElement.setAttribute('data-dyslexia-font', dyslexiaFont.toString());
  }, [dyslexiaFont]);

  // Update enhanced focus
  useEffect(() => {
    localStorage.setItem('enhancedFocus', enhancedFocus.toString());
    document.documentElement.setAttribute('data-enhanced-focus', enhancedFocus.toString());
  }, [enhancedFocus]);

  const value = {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    reducedMotion,
    setReducedMotion,
    dyslexiaFont,
    setDyslexiaFont,
    enhancedFocus,
    setEnhancedFocus
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};