// Project1.js
import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  position: absolute;
  bottom: 0; /* Start off-screen */
  left: 20%;
  width: 50%;
  height: 20%;
  background-color: red;
  transition: transform 0.3s ease, background-color 0.3s ease;
  z-index: 99999999;
`;

const Project1 = () => {
  return (
    <ProjectContainer className="slide-in">
      test test test
    </ProjectContainer>
  );
};

export default Project1;