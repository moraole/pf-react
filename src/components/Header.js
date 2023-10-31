import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarsBackground from './StarsBackground';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import Project1 from './Project1';
import Project2 from './Project2';
import SmallDeviceBox from './logoBox';
import { isVisible } from '@testing-library/user-event/dist/utils';

const RadialGradient = styled.div`
  cursor: none;
  position: absolute;
  ${({ isVisible, projectHovered, projectMenuHovered }) => isVisible && !projectHovered && !projectMenuHovered ? 'width: 0px;' : 'width: 20px'};
  ${({ isVisible, projectHovered, projectMenuHovered }) => isVisible && !projectHovered && !projectMenuHovered ? 'height: 0px;: -22px' : 'height: 20px'};
  mix-blend-mode: difference;
  background: radial-gradient(
    ellipse at center,
    ${({ isDarkMode }) => isDarkMode ? 'transparent 0%,' : 'white 100%,'}
    ${({ isDarkMode }) => isDarkMode ? 'transparent 0%,' : 'white 100%,'}
    ${({ projectHovered, isDarkMode }) =>
    projectHovered ? 'brown 300%' : isDarkMode ? 'white 40%' : 'black 40%'} ,
    ${({ projectHovered, isDarkMode }) =>
    projectHovered ? 'brown 100%' : isDarkMode ? 'white 100%' : 'black 100%'} 
  );
  clip-path: ${({ projectMenuHovered, projectHovered, isVisible, isDarkMode }) =>
    projectMenuHovered || projectHovered || !isDarkMode
      ? 'circle(10px at center)'
      : 'polygon(50% 0%, 61.8% 38.2%, 100% 50%, 61.8% 61.8%, 50% 100%, 38.2% 61.8%, 0% 50%, 38.2% 38.2%)'};
  
  ${({ isVisible, projectHovered, projectMenuHovered }) => isVisible && !projectHovered && !projectMenuHovered ? 'clip-path: none' : ''};
  pointer-events: none;
  z-index: 9000;
  animation: glowing 1s infinite alternate;
  transition: transform 0.3s ease;
  
  transform: ${({ projectMenuHovered }) => (projectMenuHovered ? 'scale(1.0)' : 'scale(2.0)')};
  
  ${({ projectHovered }) => projectHovered ? `transform: scale(5.0);` : ``};
  @keyframes glowing {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
    &:before {
    content: '${({ isVisible, projectHovered, projectMenuHovered }) => (!isVisible || projectHovered || projectMenuHovered ? '' : 'click to close menu')}';
    position: absolute;
    font-size: 9px;
    width: 70px;
    height: 10px;
    border: dotted 0.2px;
    border-top: 0px; 
    border-bottom: 0px; 
    padding: 5px;
    color: white; // Change the color to match your design
    cursor: pointer;
    mix-blend-mode: difference;
    top: 50%; // Adjust the positioning as needed
    left: 50%; // Adjust the positioning as needed
    transform: translate(-50%, -50%);
    @
  }
  @media (max-width: 900px) {
    display:none;
}
`;


const Moon = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background: white;
  box-shadow: rgb(255, 255, 255) 0px 0px 10px, gray 0px 0px 60px, gray 0px 0px 200px, gray 0px 0px 80px inset;
  z-index: 10;
  top: 2.5vh;
  right: 10vw;
  
  @media (max-width: 900px) {
    height: 50px;
    width: 50px;
}
`;

const Logo = styled.div`
  font-family: 'Playfair Display';
  position: absolute;
  font-size: 7.5rem;
  background-color: ${({ theme }) => theme.background};
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 95vh;
  left: 0;
  top: 0;
  z-index: 500;
  border-radius: 8px;
  padding: 20px;
`;

const HeaderContent = styled.div`
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;
  background: ${({ theme }) =>
    theme === lightTheme ? 'white' : '#181e2a'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const ExpandableLetter = styled.span`
  position: relative;
  cursor: default;

  &:hover span:last-child {
    font-size: 40px;
    opacity: 1;
    transform: translate(40px, -55px);
  }
`;

const ExpandedText = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.background};
  padding: 4px 8px;
  white-space: nowrap;
  border-radius: 4px;
  font-size: 0.8rem;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
`;

const ProjectMenu = styled.div`
  font-family: sans-serif;
  position: absolute;
  top: 70%;
  right: 3%;
  
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align project items to the left
  z-index: 900;

  @media (max-width: 900px) {
    background-color: ${({ theme }) => theme.phonebg};
    top: 50%;
    right: 40%;
  }
  @media (max-width: 1360px) {
    font-size: 13px;
  }
`;

const WorkHeading = styled.div`
  font-family: 'DM Mono', monospace;
  display: absolute;
  
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProjectMenuItem = styled.div`
  font-family: 'DM Mono', monospace;
  display: flex;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
`;

const ProjectNumber = styled.div`
  margin-left: 20px;
  width: 30px; // Adjust the width as needed
  text-align: left;
`;

const ProjectName = styled.div`
  text-align: center;
`;

const ProjectYear = styled.div`
  width: 50px; // Adjust the width as needed
  text-align: right;
`;



const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
const ProjectContainer = styled.div`

`

const Header = ({ isDarkMode, isThemeButtonHovered }) => {
  const [hoveredE1, setHoveredE1] = useState(false);
  const [hoveredE2, setHoveredE2] = useState(false);
  const [hoveredM, setHoveredM] = useState(false);
  const [hoveredO, setHoveredO] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [projectMenuHovered, setProjectMenuHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [projectHovered, setProjectHovered] = useState(false);
  const [projectClosed, setProjectClosed] = useState(false);
  const isPhone = window.innerWidth <= 900;

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleProjectItemClick = (projectName) => {
    if (selectedProject != projectName) {
        if (selectedProject) {
          setTimeout(() => {
            setSelectedProject(projectName);
            setIsVisible(true);
          }, 300);
        }
        else {
          setSelectedProject(projectName);
          setIsVisible(true);
        }
      }
      else {
        setTimeout(() => {
          setIsVisible(false);
          setSelectedProject('');
        }, 300);
      }
  };

  const handleCloseProject = () => {
    if (!projectMenuHovered && !projectHovered) {
      setTimeout(() => {
        setSelectedProject('');
        setProjectClosed(true);
        setIsVisible(false);
      }, 300);
    }
  };
  useEffect(() => {
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  // Inside your Header.js
  useEffect(() => {
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <HeaderContainer
      onClick={handleCloseProject}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      hovering={hovering}
    >
      {hovering && (
        <RadialGradient
          isVisible={isVisible}
          isDarkMode={isDarkMode}
          projectMenuHovered={projectMenuHovered}
          projectHovered={projectHovered}
          cursorPos={cursorPos}
          style={{
            top: `${cursorPos.y - 10}px`,
            left: `${cursorPos.x - 10}px`,
          }}
        />
      )}
        <HeaderContent>
          {isDarkMode ? (
            <>
              <Moon />
            </>
          ) : (
            <>

            </>
          )}
        <ProjectMenu
          onMouseEnter={() => setProjectMenuHovered(true)}
          onMouseLeave={() => setProjectMenuHovered(false)}
        >
          <WorkHeading>Work:</WorkHeading>
          <ProjectMenuItem onClick={() => handleProjectItemClick('project1')}>
            <ProjectNumber>01</ProjectNumber>
            <ProjectName>Computer Science Education</ProjectName>
            <ProjectYear>2023</ProjectYear>
          </ProjectMenuItem>
          <ProjectMenuItem onClick={() => handleProjectItemClick('project2')}>
            <ProjectNumber>02</ProjectNumber>
            <ProjectName>Project 2</ProjectName>
            <ProjectYear>2024</ProjectYear>
          </ProjectMenuItem>
        </ProjectMenu>
          <StarsBackground isDarkMode={isDarkMode} />
          {isPhone ? (
            
            isDarkMode ?
              <SmallDeviceBox isDarkMode={isDarkMode} />
              :
              <SmallDeviceBox isDarkMode={isDarkMode} />
              

              
            
          ) : (
            <>
            <Logo>
            <ExpandableLetter
              isPhone={isPhone}
              onMouseEnter={() => setHoveredE1(true)}
              onMouseLeave={() => setHoveredE1(false)}
            >
              E
              <ExpandedText style={{ opacity: hoveredE1 ? 1 : 0 }}>rick</ExpandedText>
            </ExpandableLetter>
            <ExpandableLetter
              onMouseEnter={() => setHoveredE2(true)}
              onMouseLeave={() => setHoveredE2(false)}
            >
              E
              <ExpandedText style={{ opacity: hoveredE2 ? 1 : 0 }}>mmanuel</ExpandedText>
            </ExpandableLetter>
            <ExpandableLetter
              onMouseEnter={() => setHoveredM(true)}
              onMouseLeave={() => setHoveredM(false)}
            >
              M
              <ExpandedText style={{ opacity: hoveredM ? 1 : 0 }}>
                <span style={{ paddingLeft: '10px' }}>ora</span>
              </ExpandedText>
            </ExpandableLetter>
            <ExpandableLetter
              onMouseEnter={() => setHoveredO(true)}
              onMouseLeave={() => setHoveredO(false)}
            >
              O
              <ExpandedText style={{ opacity: hoveredO ? 1 : 0 }}>lmedo</ExpandedText>
            </ExpandableLetter>
          </Logo>
            </>
          ) }
          
        </HeaderContent>
      <ProjectContainer
        onMouseEnter={() => setProjectHovered(true)}
        onMouseLeave={() => setProjectHovered(false)}
      >
        {selectedProject == 'project1' ?
          <Project1 
            isDarkMode={isDarkMode}
            isVisible={false}
            isThemeButtonHovered={isThemeButtonHovered}
          /> 
          : 
          null
          }
        {selectedProject == 'project2' ?
          <Project2
            isVisible={false}
            isThemeButtonHovered={isThemeButtonHovered}
          />
          :
          null
        }
      </ProjectContainer>

    </HeaderContainer>

  );
};

export default Header;
