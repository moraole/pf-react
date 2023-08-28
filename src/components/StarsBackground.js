import React from 'react';
import styled, { keyframes } from 'styled-components';

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const StarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent stars from extending outside */
`;

const Star = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: transparent;
  box-shadow: ${({ shadows }) => shadows};
  animation: ${animStar} ${({ speed }) => speed}s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background: transparent;
    box-shadow: ${({ shadows }) => shadows};
  }
`;

const StarsBackground = () => {
    const generateBoxShadows = (n) => {
        let shadows = [];
        for (let i = 0; i < n; i++) {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            shadows.push(`${x}px ${y}px #FFF`);
        }
        return shadows.join(', ');
    };

    const smallShadows = generateBoxShadows(700);
    const mediumShadows = generateBoxShadows(200);
    const bigShadows = generateBoxShadows(100);

    return (
        <StarContainer>
            <Star size={1} shadows={smallShadows} speed={250} />
            <Star size={2} shadows={mediumShadows} speed={505} />
            <Star size={3} shadows={bigShadows} speed={1000} />
            {/* Add more stars with different sizes and speeds if needed */}
        </StarContainer>
    );
};

export default StarsBackground;