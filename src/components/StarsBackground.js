import React, { memo, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

const StarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Star = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
  box-shadow: ${({ shadows }) => shadows};
  opacity: ${({ isDarkMode }) => (isDarkMode ? '1' : '0.3')};
`;

const StarsBackground = ({ isDarkMode }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // Update viewport dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate stars within screen bounds
  const smallShadows = useMemo(() => generateBoxShadows(20, isDarkMode ? 'white' : 'gray', viewportWidth, viewportHeight), [isDarkMode, viewportWidth, viewportHeight]);
  const mediumShadows = useMemo(() => generateBoxShadows(20, isDarkMode ? 'white' : 'gray', viewportWidth, viewportHeight), [isDarkMode, viewportWidth, viewportHeight]);
  const bigShadows = useMemo(() => generateBoxShadows(20, isDarkMode ? 'white' : 'gray', viewportWidth, viewportHeight), [isDarkMode, viewportWidth, viewportHeight]);

  return (
    <StarContainer>
      <Star size={1} shadows={smallShadows} isDarkMode={isDarkMode} />
      <Star size={2} shadows={mediumShadows} isDarkMode={isDarkMode} />
      <Star size={3} shadows={bigShadows} isDarkMode={isDarkMode} />
    </StarContainer>
  );
};

// Helper function with viewport bounds to limit stars within the visible area
const generateBoxShadows = (n, color, viewportWidth, viewportHeight) => {
  let shadows = [];
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * viewportWidth);
    const y = Math.floor(Math.random() * viewportHeight);
    shadows.push(`${x}px ${y}px ${color}`);
  }
  return shadows.join(', ');
};

export default memo(StarsBackground);
