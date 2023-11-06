import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import posterPresentation from '../images/img1.png';

const Box = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  height: 75%;
  width: 50%;
  overflow: hidden;
  font-family: sans-serif;
  z-index: 20;

  @media (max-width: 900px) {
    width: 85%;
    left: 7%;
    top: 23%;
    font-size: 12px;
  }
  @media (max-width: 1450px) {
    width: 70%;
    font-size: 12px;
    left:15%;
  }
`;

const HiddenBox = styled.div`
  border-radius: 8px;
  position: relative;
  top: 100%;
  background: ${({ theme }) => theme.primaryColor};
  height: 100%;
  transition: top 0.3s ease-out;
  display: block;
  align-items: center; /* Center the content vertically */
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
  
  @media (max-width: 1541px) {

    font-size: 25px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex; /* Make the child elements flex */
  
  justify-content: space-between; /* Space the child elements evenly */
  align-items: center; /* Center the content vertically */
`;

const LeftContainer = styled.div`
  width: 40%; /* Adjust the width as needed */
  
`;

const RightContainer = styled.div`
  width: 60%; /* Adjust the width as needed */
  display: flex;
  position: relative;
  right: 8px;
  
  
`;

const Description = styled.p`
  margin: 0;
  width: 100%;
`;
const StyledH1 = styled.h1`
  font-weight: 2;
  font-size: 24px;
`;
const RightStyledH1 = styled(StyledH1)`
  position: absolute;
  font-weight: 2;
  font-size: 24px;
  top: -60px;
  bottom: 100px;
`;
const ZoomedImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Grayed out background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const ZoomedImg = styled.img`
  max-width: 100%;
  max-height: 95%;
  object-fit: contain;
  cursor: zoom-out;
`;

const Project1 = ({ isVisible, isDarkMode, isThemeButtonHovered }) => {
  const [hovering, setHovering] = useState(false);
  const [delayedVisibility, setDelayedVisibility] = useState(isVisible);
  const [isZoomed, setZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const boxRef = useRef(null);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handleClickOutside = e => {
    if (
      boxRef.current &&
      !boxRef.current.contains(e.target) &&
      !isThemeButtonHovered &&
      !isZoomed &&
      !e.target.classList.contains('zoomed-image')
    ) {
      setDelayedVisibility(false);
    }
  };

  const handleZoomImage = e => {
    setZoomedImage(e);
    setZoomed(true);
  };

  const handleZoomOut = () => {
    setZoomed(false);
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
        <SimpleBar style={{ width: '95%', maxHeight: '90%', top: '55px' }}>
          <StyledH1>What is this project?</StyledH1>
          <Description>
            This project is based on my paper presentation at the SITE 2023 International Conference.
            I presented my research focusing on the shortage of accessible video resources for pre-service teachers
            looking to reference classroom teaching methods in K-12 education.
          </Description>
          <DescriptionContainer>

            <LeftContainer>
              <img
                src={posterPresentation}
                alt="Poster Presentation"
                onClick={() => handleZoomImage(posterPresentation)}
                style={{
                  maxWidth: '90%',
                  position: 'relative',
                  left: '5px',
                  height: 'auto',
                  display: 'flex', // Center the image horizontally
                  marginTop: '30px', // Add some top margin for spacing
                  cursor: 'pointer', // Change cursor to indicate it's clickable
                }}
              />
            </LeftContainer>
            <RightContainer>
              <RightStyledH1>Abstract</RightStyledH1>
              <Description>
                As education in Computer Science continues to develop for K-12, pre-service teachers may find it beneficial
                to look at current K-12 teachers demonstrate their teaching methods and curricula in a video format.
                Our focus was to find videos that showed a live lesson being taught in a classroom environment to allow pre-service
                teachers to reference the methods that may be used to teach a classroom full of students in K-12.
                In this project, we want to show the shortage of these videos as we searched thoroughly and found that there were not many
                that would be easily accessible to a current pre-service teacher looking to reference the lessons taught in a classroom setting.
              </Description>
              
            </RightContainer>
            
          </DescriptionContainer>
          
          <br></br><br></br>information about the conference and specific paper presented can be found here: https://academicexperts.org/conf/site/2023/papers/62010/
          <h2>test</h2>
        </SimpleBar>
      </HiddenBox>
      {isZoomed && (
        <ZoomedImage onClick={handleZoomOut} className="zoomed-image">
          <ZoomedImg
            src={zoomedImage}
            alt="Zoomed Poster Presentation"
            className="zoomed-image"
          />
        </ZoomedImage>
      )}
    </Box>
  );
};

export default Project1;
