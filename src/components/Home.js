import React, { useState, useEffect } from 'react';
import styled, {createGlobalStyle, ThemeProvider } from 'styled-components';
//import backgroundImage1 from '../images/mntn1.png';
//import backgroundImage2 from '../images/mntn2.png';
import FancySwitchButton from './FancySwitchButton';
import Header from './Header.js';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';

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
  }
`;
const MainContainer = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-filter: brightness(20%);
  background-position: center;
  transition: background-color 0.3s, color 0.3s; /* Add transition here */
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const NavBar = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => (theme === lightTheme ? '#f9f9f9' : '#222')};
  padding: 20px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;



const NavItem = styled.a`
  flex: 1;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  text-align: center;
  padding: 10px 0; /* Add padding to make it more clickable */

  &:hover {
    background-color: ${({ theme }) => (theme === lightTheme ? '#ddd' : '#555')}; /* Add hover effect */
    border-radius: 8px; /* Add rounded corners on hover */
  }
  
  /* Adjust text color on hover */
  &:hover {
    color: ${({ theme }) => (theme === lightTheme ? '#000' : '#fff')};
  }
`;

const ContentContainer = styled.div`
  width: 80%;
  margin-top: 30px;
  background-color: ${({ theme }) => (theme === lightTheme ? '#f9f9f9' : '#222')};
  color: ${({ theme }) => theme.text};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;


const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const BodyText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
`;

const Home = () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === 'true');
  //const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    //setBackgroundImage(isDarkMode ? backgroundImage1 : backgroundImage2);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header isDarkMode={isDarkMode} />
      <NavBar>
        <FancySwitchButton isOn={isDarkMode} onToggle={toggleDarkMode} />
        <NavItem href="#about">About</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </NavBar>
      <MainContainer>
      <ContentContainer>
          <Title>Welcome to My Portfolio</Title>
          <Subtitle>Discover my creative work and skills</Subtitle>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus lobortis lectus eu dolor pretium, at consequat mauris vestibulum.
            Fusce non semper risus, id semper nunc. Proin dignissim, mi sed laoreet
            iaculis, lectus arcu lobortis ante, id dignissim neque mauris id justo.
            Nullam at volutpat lectus. Pellentesque tincidunt erat vitae odio varius
            consectetur. Nulla tincidunt risus eu mi pharetra, at finibus tortor
            bibendum. Morbi fringilla neque ut orci sagittis, vitae ultrices ipsum
            tristique. Suspendisse in enim euismod, vestibulum ex vitae, malesuada
            dui. Nulla facilisi. Cras volutpat dui at efficitur finibus.
          </BodyText>
          
        </ContentContainer >
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
