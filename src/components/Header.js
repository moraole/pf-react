import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarsBackground from './StarsBackground';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import Project1 from './Project1';
import Project2 from './Project2';
const RadialGradient = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;

  /* Change the background color to red when projectHovered is true */
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 0%,
    ${({ projectHovered, isDarkMode }) =>
      projectHovered ? 'red' : isDarkMode ? 'white' : 'black'} 40%,
    ${({ projectHovered, isDarkMode }) =>
      projectHovered ? 'red' : isDarkMode ? 'white' : 'black'} 100%
  );

  clip-path: ${({ projectMenuHovered }) =>
    projectMenuHovered
      ? 'circle(10px at center)'
      : 'polygon(50% 0%, 61.8% 38.2%, 100% 50%, 61.8% 61.8%, 50% 100%, 38.2% 61.8%, 0% 50%, 38.2% 38.2%)'};
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1000;
  animation: glowing 1s infinite alternate;
  transition: transform 0.3s ease;
  transform: ${({ projectMenuHovered }) => (projectMenuHovered ? 'scale(1.0)' : 'scale(2.0)')};
  @keyframes glowing {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
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
`;

const LogoLetter = styled.span`
  font-family: 'Playfair Display', serif;
  user-select: none;
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

const Border = styled.div`
  border-left: 0vw solid ${({ theme }) => (theme === lightTheme ? 'white' : theme.background)};
  border-right: 0vw solid ${({ theme }) => (theme === lightTheme ? 'white' : theme.background)};
`;

const ExpandableLetter = styled.span`
  position: relative;
  cursor: pointer;

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

const ProjectMenuItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  height: 30px;
  margin: 5px 0;
  transition: color 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: solid 0.1px;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const ProjectDescription = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  width: 200px;
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 10px;
  display: none;
  z-index: 10000;
`;

const ProjectMenu = styled.div`
  position: absolute;
  top: 70%;
  right: 10%;
  transform: translateY(50%);
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  `;

const Project1Description = styled(ProjectDescription)`
  transform: translateY(-30px);
`;

const Project2Description = styled(ProjectDescription)`
  transform: translateY(0);
`;

const Project3Description = styled(ProjectDescription)`
  transform: translateY(30px);
`;

const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
const ProjectContainer = styled.div`

`
const Header = ({ isDarkMode }) => {
  const [hoveredE1, setHoveredE1] = useState(false);
  const [hoveredE2, setHoveredE2] = useState(false);
  const [hoveredM, setHoveredM] = useState(false);
  const [hoveredO, setHoveredO] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [projectMenuHovered, setProjectMenuHovered] = useState(false);
  const [projectDescriptionsVisible, setProjectDescriptionsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [projectHovered, setProjectHovered] =useState(false);
  const isPhone = window.innerWidth <= 768;

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
    setSelectedProject(projectName);
    setProjectDescriptionsVisible(true); // Add this line
    setIsVisible(true);
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

// Add this useEffect to control the animations
useEffect(() => {
  const projectDescriptions = document.querySelectorAll('.project-description');
  if (projectDescriptionsVisible) {
    projectDescriptions.forEach((desc) => {
      desc.classList.add('slide-in-active');
    });
  } else {
    projectDescriptions.forEach((desc) => {
      desc.classList.remove('slide-in-active');
    });
  }
}, [projectDescriptionsVisible]);
  return (
    <HeaderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {hovering && (
        <RadialGradient
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
      <Border>
        <HeaderContent>
          {isDarkMode ? (
            <>
              <Moon />
              <ProjectMenu
                onMouseEnter={() => setProjectMenuHovered(true)}
                onMouseLeave={() => setProjectMenuHovered(false)}
              >
                <ProjectMenuItem onClick={() =>  handleProjectItemClick('project1')}>
                  Project 1
                </ProjectMenuItem>
                <Project1Description className="project-description slide-in">
  Project 1 Description
</Project1Description>
                <ProjectMenuItem onClick={() =>  handleProjectItemClick('project2')}>
                  Project 2
                </ProjectMenuItem>
                {projectDescriptionsVisible && (
                  <Project2Description>Project 2 Description</Project2Description>
                )}
                <ProjectMenuItem href="#project3" onClick={handleProjectItemClick}>
                  Project 3
                </ProjectMenuItem>
                {projectDescriptionsVisible && (
                  <Project3Description>Project 3 Description</Project3Description>
                )}
                
              </ProjectMenu>

            </>
          ) : (
            <>
              <ProjectMenu
                onMouseEnter={() => setProjectMenuHovered(true)}
                onMouseLeave={() => setProjectMenuHovered(false)}
              >
                <ProjectMenuItem href="#project1" onClick={handleProjectItemClick}>
                  Project 1
                </ProjectMenuItem>
                {projectDescriptionsVisible && (
                  <Project1Description>Project 1 Description</Project1Description>
                )}
                <ProjectMenuItem href="#project2" onClick={handleProjectItemClick}>
                  Project 2
                </ProjectMenuItem>
                {projectDescriptionsVisible && (
                  <Project2Description>Project 2 Description</Project2Description>
                )}
                <ProjectMenuItem href="#project3" onClick={handleProjectItemClick}>
                  Project 3
                </ProjectMenuItem>
                {projectDescriptionsVisible && (
                  <Project3Description>Project 3 Description</Project3Description>
                )}
              </ProjectMenu>
            </>
          )}
          <StarsBackground isDarkMode={isDarkMode} />
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
              <ExpandedText style={{ opacity: hoveredM ? 1 : 0 }}>ora</ExpandedText>
            </ExpandableLetter>
            <ExpandableLetter
              onMouseEnter={() => setHoveredO(true)}
              onMouseLeave={() => setHoveredO(false)}
            >
              O
              <ExpandedText style={{ opacity: hoveredO ? 1 : 0 }}>lmedo</ExpandedText>
            </ExpandableLetter>
          </Logo>
        </HeaderContent>
      </Border>
      <ProjectContainer
        onMouseEnter={() => setProjectHovered(true)}
        onMouseLeave={() => setProjectHovered(false)}
      >
      {isVisible ? <Project1 isVisible={false} /> : null}
      </ProjectContainer>
      
    </HeaderContainer>
    
  );
};

export default Header;
