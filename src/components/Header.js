import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarsBackground from './StarsBackground';
import lightTheme from '../themes/lightTheme';
const RadialGradient = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 40%,
    ${({ theme }) => (theme === lightTheme ? 'black' : 'white')} 40%,
    ${({ theme }) => (theme === lightTheme ? 'black' : 'white')} 100%
  );
  clip-path: polygon(
    50% 0%,
    61.8% 38.2%,
    100% 50%,
    61.8% 61.8%,
    50% 100%,
    38.2% 61.8%,
    0% 50%,
    38.2% 38.2%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10000;
  animation: glowing 1s infinite alternate;
  transition: transform 0.3s ease;
  transform: ${({ projectMenuHovered }) => (projectMenuHovered ? 'scale(1.0)' : 'scale(1.0')};
  @keyframes glowing {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  /* Add the hover effect */
  &:hover {
    transform: scale(0.5);
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
  flex-direction: column; /* Stack the letters vertically */
  justify-content: space-between; /* Evenly space the rows */
  align-items: center; /* Center horizontally */
  width: 300px;
  height: 95vh;
  left: 0;
  top: 0;
  z-index: 500;
  border-radius: 8px;
  padding: 20px; /* Add padding to space out the letters from the edges */
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between; /* Evenly space the letters in each row */
  width: 100%;
`;

const ELetter = styled(LogoLetter)`
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isPhone }) => (isPhone ? 'black' : 'white')}; // Conditional color based on isPhone
`;

const SecondELetter = styled(LogoLetter)`
  width: 50%;
  height: 50%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const MLetter = styled(LogoLetter)`
  width: 50%;
  height: 50%;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const OLetter = styled(LogoLetter)`
  width: 50%;
  height: 50%;
  font-family: 'Playfair Display';
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

// Modify the gradient background for light mode
const HeaderContent = styled.div`
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s; /* Add transition here */
  background: ${({ theme }) =>
    theme === lightTheme ? 'white' /* Gradient background for light mode */ : '#181e2a'};
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
  ${({isPhone}) => isPhone ? 'color: black;' : ''}

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
  left: 100%; /* Position to the left of the menu item */
  top: 0;
  width: 200px; /* Adjust the width as needed */
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 10px;
  display: none;
  z-index: 1000;
  
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
  z-index: 1000;

  /* Apply the hover effect to ProjectMenu */
  &:hover {
    ${RadialGradient} {
      transform: scale(1.5);
    }
  }
`;
const Project1Description = styled(ProjectDescription)`
  
`;

const Project2Description = styled(ProjectDescription)`
  transform: translateY(30px);
`;

const Project3Description = styled(ProjectDescription)`
  transform: translateY(60px);
`;


const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
const Header = ({ isDarkMode }) => {
  const [hoveredE1, setHoveredE1] = useState(false);
  const [hoveredE2, setHoveredE2] = useState(false);
  const [hoveredM, setHoveredM] = useState(false);
  const [hoveredO, setHoveredO] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [projectMenuHovered, setProjectMenuHovered] = useState(false);

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


  useEffect(() => {
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    // Add event listeners for project menu hover
    document.addEventListener('mouseenter', handleProjectMenuEnter);
    document.addEventListener('mouseleave', handleProjectMenuLeave);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);

      // Remove event listeners for project menu hover
      document.removeEventListener('mouseenter', handleProjectMenuEnter);
      document.removeEventListener('mouseleave', handleProjectMenuLeave);
    };
  }, []);
  
  const handleProjectMenuEnter = () => {
    setProjectMenuHovered(true); // Set project menu hover state to true
  };

  const handleProjectMenuLeave = () => {
    setProjectMenuHovered(false); // Set project menu hover state to false
  };
  return (
    <HeaderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {hovering && (
        <RadialGradient
          cursorPos={cursorPos}
          projectMenuHovered={projectMenuHovered}
          style={{
            top: `${cursorPos.y-10}px`,
            left: `${cursorPos.x-10}px`,
          }}
        />
      )}
      <Border>
        <HeaderContent>
          {isDarkMode ? (
            <>
              <Moon />
              <ProjectMenu>
                <ProjectMenuItem href="#project1">Project 1</ProjectMenuItem>
                <Project1Description>Project 1 Description</Project1Description>
                <ProjectMenuItem href="#project2">Project 2</ProjectMenuItem>
                <Project2Description>Project 2 Description</Project2Description>
                <ProjectMenuItem href="#project3">Project 3</ProjectMenuItem>
                <Project3Description>Project 3 Description</Project3Description>
              </ProjectMenu>
            </>
          ) : (
            <>
              <ProjectMenu>
                <ProjectMenuItem href="#project1">Project 1</ProjectMenuItem>
                <Project1Description>Project 1 Description</Project1Description>
                <ProjectMenuItem href="#project2">Project 2</ProjectMenuItem>
                <Project2Description>Project 2 Description</Project2Description>
                <ProjectMenuItem href="#project3">Project 3</ProjectMenuItem>
                <Project3Description>Project 3 Description</Project3Description>
              </ProjectMenu>
            </>
          )}
          <StarsBackground isDarkMode={isDarkMode} />
          <Logo>
            {/* Apply the shrink effect to RadialGradient when project menu is hovered */}
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
    </HeaderContainer>
  );
};

export default Header;

