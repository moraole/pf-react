import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import FancySwitchButton from './FancySwitchButton';
import Header from './Header.js';
import StarsBackground from './StarsBackground';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Playfair Display';
    src: url('../fonts/PlayfairDisplay-regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'DM Mono';
    src: url('../fonts/DMMono-Light.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
    margin: 0;
    height: 100px;
    overflow-x: hidden;
    overflow-y: hidden;
    max-height: 100vh;
    max-width: 100vw;
  }
`;

const MainContainer = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  /* Add padding or margin to avoid overlapping with the button */
`;

const FancySwitchButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
`;

const Home = () => {
  // Check if dark mode is stored in localStorage, or set it to true by default
  const storedDarkMode = localStorage.getItem('darkMode');
  const initialDarkMode = storedDarkMode === 'true' || storedDarkMode === null;

  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);
  const [isThemeButtonHovered, setIsThemeButtonHovered] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {<StarsBackground isDarkMode={isDarkMode} />}
      <MainContainer>
        <FancySwitchButtonWrapper
          onMouseEnter={() => setIsThemeButtonHovered(true)}
          onMouseLeave={() => setIsThemeButtonHovered(false)}
        >
          <FancySwitchButton isOn={isDarkMode} onToggle={toggleDarkMode} />
        </FancySwitchButtonWrapper>
        <ContentWrapper>
          <Header isDarkMode={isDarkMode} isThemeButtonHovered={isThemeButtonHovered}></Header>
        </ContentWrapper>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
