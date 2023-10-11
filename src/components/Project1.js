import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
  position: absolute;
  top: 80%; /* Position at the top of the parent (header) */
  left: 25%; /* Position at the left of the parent (header) */
  height: 20%;
  width: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const HiddenBox = styled.div`
  position: relative;
  top: 100%;
  background: #428bca;
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

const Project1 = ({ isVisible }) => {
  const [hovering, setHovering] = useState(false);
  const [delayedVisibility, setDelayedVisibility] = useState(isVisible);
  const handleMouseEnter = () => {
    setHovering(true);
  };
  useEffect(() => {
    if (!isVisible) {
      // Delay setting visibility to true by 1 second
      const timeout = setTimeout(() => {
        setDelayedVisibility(true);
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isVisible]);

  console.log("test:",isVisible);
  return (
    <Box
    onMouseEnter={handleMouseEnter}
    >
      <HiddenBox isVisible={delayedVisibility}>
        <Heading>Project 1</Heading>
        <Description>
          This is a description of project 1
        </Description>
      </HiddenBox>
    </Box>
  );
};

export default Project1;
