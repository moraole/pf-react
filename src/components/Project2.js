import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
  position: absolute;
  top: 70%;
  left: 25%;
  height: 30%;
  width: 50%;
  overflow: hidden;
  cursor: pointer;
    
  @media (max-width: 900px) {
    width: 85%;
    left: 7.5%;
  }
`;

const HiddenBox = styled.div`
  position: relative;
  top: 100%;
  background: darkred;
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
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
`;

const Project1 = ({ isVisible, isDarkMode, isThemeButtonHovered }) => {
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
            <HiddenBox isVisible={delayedVisibility}>
                <Heading>Project 2</Heading>
                <Description>This is a description of project 2</Description>
            </HiddenBox>
        </Box>
    );
};

export default Project1;
