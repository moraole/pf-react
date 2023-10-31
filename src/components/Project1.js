import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Box = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  height: 75%;
  width: 50%;
  overflow: hidden;
  cursor: pointer;
  font-family: sans-serif;
  
  @media (max-width: 900px) {
    width: 85%;
    left: 7%;
    top: 23%;
    
  }
`;

const HiddenBox = styled.div`
  border-radius: 8px;
  position: relative;
  top: 100%;
  background: ${({ theme }) => theme.primaryColor};
  height: 100%;
  transition: top 0.3s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 800;

  ${props =>
    props.isVisible &&
    css`
      top: 0;
    `}
`;

const Heading = styled.h1`
font-weight: 100;
  position: absolute;
  top: -4px;
  left: 20px;
  
`;

const DescriptionContainer = styled.div`

`;

const Description = styled.p`
  margin: 0;
  width: 100%;
`;



const Project1 = ({ isVisible, isDarkMode, isThemeButtonHovered}) => {
  const [hovering, setHovering] = useState(false);
  const [delayedVisibility, setDelayedVisibility] = useState(isVisible);
  const boxRef = useRef(null);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };
  const handleClickOutside = (e) => {

    if (boxRef.current && !boxRef.current.contains(e.target) && !isThemeButtonHovered) {
      setDelayedVisibility(false);
    }
  };

  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(() => {
        setDelayedVisibility(true);
      }, 100);

      document.addEventListener('click', handleClickOutside);

      return () => {
        clearTimeout(timeout);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isVisible, isThemeButtonHovered]);

  return (
    <Box ref={boxRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <HiddenBox theme={isDarkMode ? darkTheme : lightTheme} isVisible={delayedVisibility}>
        <Heading>CS Education at SITE 2023</Heading>
        <SimpleBar style={{ width: '90%', maxHeight: '80%', overflowY: 'auto', top: '20px' }}>
          <DescriptionContainer>
            <Description>
              1Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.
              Your long description content goes here. Your long description content goes here.end
            </Description>
          </DescriptionContainer>
        </SimpleBar>
      </HiddenBox>
      
    </Box>
  );
};

export default Project1;
