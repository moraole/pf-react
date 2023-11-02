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
  z-index: 20;
  
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
const StyledH1 = styled.h1`
  font-weight: 2;
  font-size: 24px;
`


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
        <Heading>CS Education at SITE 2023 International Conference</Heading>
        <SimpleBar style={{ width: '90%', maxHeight: '80%', overflowY: 'auto', top: '20px' }}>
          <DescriptionContainer>
            <StyledH1>What is this project?</StyledH1>
            <Description>
              This project is based on my paper presentation at the SITE 2023 International Conference.
              I presented my research focusing on the shortage of accessible video resources for pre-service teachers
              looking to reference classroom teaching methods in K-12 education.
            </Description>
            <StyledH1>Poster Presentation</StyledH1>
            <Description>
              Here, you can find an image of my poster presentation that I used at Western Washington University
              present my research findings.
              <img src="path_to_your_poster_image.jpg" alt="Poster Presentation" />
            </Description>
            <StyledH1>Abstract</StyledH1>
            <Description>
              As education in Computer Science continues to develop for K-12, pre-service teachers may find it beneficial
              to look at current K-12 teachers demonstrate their teaching methods and curricula in a video format.
              Our focus was to find videos that showed a live lesson being taught in a classroom environment to allow pre-service
              teachers to reference the methods that may be used to teach a classroom full of students in K-12.
              In this project, we want to show the shortage of these videos as we searched thoroughly and found that there were not many
              that would be easily accessible to a current pre-service teacher looking to reference the lessons taught in a classroom setting.
            </Description>
          </DescriptionContainer>
        </SimpleBar>
      </HiddenBox>
    </Box>
  );
};

export default Project1;
