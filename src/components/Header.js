import React, { useState } from 'react';
import styled from 'styled-components';
import StarsBackground from './StarsBackground';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import SmallDeviceBox from './logoBox';

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

const LinkedInButton = styled.a`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #0077b5; /* LinkedIn blue */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005582;
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
  border-radius: 8px;
  padding: 20px;
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
  z-index: 15;
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    background-color: ${({ theme }) => theme.phonebg};
    top: 50%;
    right: 0%;
    left: 2%;
  }
  @media (max-width: 1360px) {
    font-size: 13px;
  }
`;

const ProjectMenuItem = styled.div`
  font-family: 'DM Mono', monospace;
  display: flex;
  align-items: center;
  width: 340px;
  margin: 5px 0;
  cursor: pointer;
`;

const ProjectNumber = styled.div`
  margin-left: 20px;
  width: 30px;
  text-align: left;
`;

const ProjectName = styled.div`
  text-align: center;
  flex: 1;
`;

const ProjectYear = styled.div`
  width: 50px;
  text-align: right;
`;

const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
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

const Header = ({ isDarkMode }) => {
  const [hoveredE1, setHoveredE1] = useState(false);
  const [hoveredE2, setHoveredE2] = useState(false);
  const [hoveredM, setHoveredM] = useState(false);
  const [hoveredO, setHoveredO] = useState(false);
  const [projectMenuHovered, setProjectMenuHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const isPhone = window.innerWidth <= 900;

  const handleProjectItemClick = (projectName) => {
    if (selectedProject !== projectName) {
      setSelectedProject(projectName);
    } else {
      setSelectedProject('');
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        {isDarkMode ? <Moon /> : null}

        <ProjectMenu
          onMouseEnter={() => setProjectMenuHovered(true)}
          onMouseLeave={() => setProjectMenuHovered(false)}
        >
          <ProjectMenuItem onClick={() => handleProjectItemClick('project1')}>
            <ProjectNumber>01</ProjectNumber>
            <ProjectName>WorldCup Database using PostgresSQL</ProjectName>
            <ProjectYear>2023</ProjectYear>
          </ProjectMenuItem>
          <ProjectMenuItem onClick={() => handleProjectItemClick('project2')}>
            <ProjectNumber>02</ProjectNumber>
            <ProjectName>SITE 2023 Publication</ProjectName>
            <ProjectYear>2023</ProjectYear>
          </ProjectMenuItem>
          <ProjectMenuItem onClick={() => handleProjectItemClick('project3')}>
            <ProjectNumber>03</ProjectNumber>
            <ProjectName>League Of Legends Player Comparison App</ProjectName>
            <ProjectYear>2025</ProjectYear>
          </ProjectMenuItem>
          <ProjectMenuItem onClick={() => handleProjectItemClick('project4')}>
            <ProjectNumber>04</ProjectNumber>
            <ProjectName>Neural Network SMS Text Classifier</ProjectName>
            <ProjectYear>2024</ProjectYear>
          </ProjectMenuItem>
        </ProjectMenu>

        <StarsBackground isDarkMode={isDarkMode} />

        {isPhone ? (
          <SmallDeviceBox isDarkMode={isDarkMode} />
        ) : (
          <Logo>
            <ExpandableLetter
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
        )}
      </HeaderContent>

      {selectedProject === 'project1' && <Project1 isDarkMode={isDarkMode} />}
      {selectedProject === 'project2' && <Project2 isDarkMode={isDarkMode} />}
      {selectedProject === 'project3' && <Project3 isDarkMode={isDarkMode} />}
      {selectedProject === 'project4' && <Project4 isDarkMode={isDarkMode} />}

      {/* LinkedIn Button */}
      <LinkedInButton
        href="https://www.linkedin.com/in/your-linkedin-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect on LinkedIn
      </LinkedInButton>
    </HeaderContainer>
  );
};

export default Header;