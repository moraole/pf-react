import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-1000px);
  }
`;

const StarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index
`;

const Star = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')}; /* Set background to black in dark mode */
  box-shadow: ${({ shadows }) => shadows};
  animation: ${animStar} ${({ speed }) => speed}s linear infinite;
  opacity: ${({ isDarkMode }) => (isDarkMode ? '1' : '0.3')};
 
`;

const StarsBackground = ({ isDarkMode }) => {
  const generateBoxShadows = (n, color) => {
    let shadows = [];
    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * 3440);
      const y = Math.floor(Math.random() * 2000);
      shadows.push(`${x}px ${y}px ${color}`); /* Use white shadow in dark mode, black shadow in light mode */
    }
    return shadows.join(', ');
  };

  const smallShadows = generateBoxShadows(700, 'white');
  const mediumShadows = generateBoxShadows(200, 'white');
  const bigShadows = generateBoxShadows(100, 'white');

  return (
    <StarContainer>
      <Star size={1} shadows={smallShadows} speed={250} isDarkMode={isDarkMode} />
      <Star size={2} shadows={mediumShadows} speed={505} isDarkMode={isDarkMode} />
      <Star size={3} shadows={bigShadows} speed={1000} isDarkMode={isDarkMode} />
      <Star size={3} shadows={bigShadows} speed={1000} isDarkMode={isDarkMode} /> 
      {isDarkMode ? (
        <Star size={0} shadows={bigShadows} speed={1000} isDarkMode={isDarkMode} />
      ) : (
        <>
            <Star size={5} shadows={generateBoxShadows(999, 'gray')} speed={1000} isDarkMode={isDarkMode} />
          <Star size={5} shadows={generateBoxShadows(999, 'black')} speed={9900} isDarkMode={isDarkMode} />
          {/* Add more stars here */}
        </>
      )}
      {/* Add more stars with different sizes and speeds if needed */}
    </StarContainer>
  );
};

export default memo(StarsBackground);
