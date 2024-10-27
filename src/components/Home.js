import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import FancySwitchButton from './FancySwitchButton';
import Header from './Header';
import StarsBackground from './StarsBackground';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Playfair Display';
    src: url('../fonts/PlayfairDisplay-regular.ttf') format('ttf');
  }
  @font-face {
    font-family: 'DM Mono';
    src: url('../fonts/DMMono-Light.ttf') format('ttf');
  }
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
    margin: 0;
    transform: translate3d(0, 0, 0);
  }
`;

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

const FancySwitchButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
`;

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || !localStorage.getItem('darkMode')
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StarsBackground isDarkMode={isDarkMode} />
      <MainContainer>
        <FancySwitchButtonWrapper>
          <FancySwitchButton isOn={isDarkMode} onToggle={toggleDarkMode} />
        </FancySwitchButtonWrapper>
        <Header isDarkMode={isDarkMode} />
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
