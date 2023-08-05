import React, { useState, useEffect } from 'react';
import styled, { keyframes, css, createGlobalStyle, ThemeProvider } from 'styled-components';
//import backgroundImage1 from '../images/mntn1.png';
//import backgroundImage2 from '../images/mntn2.png';
import FancySwitchButton from './FancySwitchButton';

const lightTheme = {
  background: '#F2F2F2', // Slightly off-white background
  text: '#333', // Dark gray text
};

const darkTheme = {
  background: '#333', // Slightly off-black background
  text: '#F2F2F2', // Off-white text
};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
    margin: 0;
  }
`;
const MainContainer = styled.div`
  position: absolute;
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
  transition: background-image 0.3s;
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
const mountainGradient = '#7ac1e4';
const mountainTopGradient = '#ceeaf6';

const mountainAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
`;

const mountainAnimationCSS = css`
  animation: ${mountainAnimation} 4s alternate infinite ease-in-out;
`;

const mountainCapAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
`;

const mountainCapAnimationCSS = css`
  animation: ${mountainCapAnimation} 3s alternate infinite ease-in-out;
`;

const Mountain = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 180px solid ${mountainGradient};
  z-index: 1;

  ${props =>
    props.animated &&
    css`
      ${mountainAnimationCSS}
    `}
`;

const MountainTop = styled.div`
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 65px solid transparent;
  border-right: 65px solid transparent;
  border-bottom: 77px solid ${mountainTopGradient};
  z-index: 2;
`;

const MountainCap = styled.div`
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid ${mountainTopGradient};
  ${props =>
    props.animated &&
    css`
      ${mountainCapAnimationCSS}
    `}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 300px;
  position: relative;
`;


const CloudAnimation = keyframes`
  0% {
    transform: translate(-100px, 0);
  }
  100% {
    transform: translate(600px, 0);
  }
`;

const Cloud = styled.div`
  display: inline-block;
  background: white;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  filter: blur(6px);
  opacity: 0.76;

  &:before,
  &:after {
    content: '';
    display: inline-block;
    background: white;
    -webkit-filter: blur(3px);
    position: relative;
    border-radius: 50%;
  }

  &:before {
    width: 100px;
    height: 100px;
    top: -30px;
    left: 60px;
  }

  &:after {
    width: 200px;
    height: 100px;
    top: -80px;
    left: 70px;
  }

  ${props =>
    props.firstChild &&
    css`
      zoom: 1.5;
    `}
`;

const Sun = styled.div`
  display: inline-block;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background: orange;
  box-shadow: 0 0 10px orange, 0 0 60px orange, 0 0 200px yellow, inset 0 0 80px yellow;
  z-index: 12;
  align: center;
  z-index: -99;
`;

const Tree = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #444;
  position: absolute;
  bottom: 5%;

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 30px 100px 30px;
    border-color: transparent transparent #1bb845 transparent;
    position: absolute;
    bottom: 30px;
    left: -25px;
  }
`;

const Road = styled.div`
  display: block;
  height: 52px;
  width: 100%;
  background: #222;
  position: absolute;
  bottom: 0;

  &:before {
    content: '';
    position: relative;
    display: block;
    background: #fff;
    height: 8px;
    top: 40%;
    opacity: 0.5;
  }
`;

const CloudAnimationCSS = css`
  animation: ${CloudAnimation} 15000ms linear infinite;
`;

const Cloud1 = styled(Cloud)`
  ${CloudAnimationCSS}
`;

const Cloud2 = styled(Cloud)`
  ${CloudAnimationCSS}
`;
const Header = ({ isDarkMode }) => {
  return (
    <Content>
      {isDarkMode ? (
        <>
          {/* Dark mode components */}
          <Mountain />
          <Mountain className="mountain-two" animated />
          <Mountain className="mountain-three" animated />
          <MountainTop />
          <MountainCap className="mountain-cap-1" animated />
          <MountainCap className="mountain-cap-2" animated />
          <MountainCap className="mountain-cap-3" animated />
        </>
      ) : (
        // Light mode components
        <>
          <Sun />
          <Cloud1 />
          <Tree />
          <Road />
          <Cloud2 firstChild />
        </>
      )}
    </Content>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600vh; /* Adjust the height as needed */
  background-color: ${({ theme }) => (theme === lightTheme ? '#f2f2f2' : '#333')};
`;


const LogoLetter = styled.span`
  position: relative;
`;

const Logo = styled.div`
  position: relative;
  font-size: 8rem; /* Adjust the font size as needed */
  color: ${({ theme }) => (theme === lightTheme ? '#333' : '#fff')};
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 300px; /* Adjust the width of the square */
  height: 300px; /* Adjust the height of the square */
`;

const ELetter = styled(LogoLetter)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondELetter = styled(LogoLetter)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MLetter = styled(LogoLetter)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const OLetter = styled(LogoLetter)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
    //setBackgroundImage(isDarkMode ? backgroundImage2 : backgroundImage1);
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
    //const width = window.innerWidth;
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
      <MainContainer /* backgroundImage={backgroundImage}*/>
      <Header isDarkMode={isDarkMode} />
      
      <LogoContainer>
        <Logo>
          <ELetter>E</ELetter>
          <SecondELetter>E</SecondELetter>
          <MLetter>M</MLetter>
          <OLetter>O</OLetter>
        </Logo>
      </LogoContainer>
        <NavBar>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavBar>
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
          <FancySwitchButton isOn={isDarkMode} onToggle={toggleDarkMode} />
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
