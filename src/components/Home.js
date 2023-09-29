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
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
    margin: 0;
    overflow-x: hidden;
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
  const storedDarkMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === 'true');

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
        
        <ContentWrapper>
          
          <Header isDarkMode={isDarkMode}>
          
          </Header>
        </ContentWrapper>
        <FancySwitchButtonWrapper>
          <FancySwitchButton isOn={isDarkMode} onToggle={toggleDarkMode} />
        </FancySwitchButtonWrapper>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
