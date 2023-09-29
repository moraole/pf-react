import React, { useState } from 'react';
import styled from 'styled-components';
import StarsBackground from './StarsBackground';
import lightTheme from '../themes/lightTheme';
import City from './City';
import FancySwitchButton from './FancySwitchButton';

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

const Header = ({ isDarkMode }) => {
  const [hoveredE1, setHoveredE1] = useState(false);
  const [hoveredE2, setHoveredE2] = useState(false);
  const [hoveredM, setHoveredM] = useState(false);
  const [hoveredO, setHoveredO] = useState(false);

  // Define a function to check if the device is a phone based on screen width
  const isPhone = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <Border>
      <HeaderContent>
        {isDarkMode ? (
          <>
            <Moon />
          </>
        ) : (
          // Light mode components
          <>
            
          </>
        )}
        <StarsBackground isDarkMode={isDarkMode} />
        <Logo>
          <ExpandableLetter
            isPhone={isPhone} // Pass the isPhone prop
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
  );
};

export default Header;
