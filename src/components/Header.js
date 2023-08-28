import React from 'react';
import styled from 'styled-components';
import StarsBackground from './StarsBackground';
import lightTheme from '../themes/lightTheme';

const SunMoon = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background: ${({ theme }) => (theme === lightTheme ? '#fffb0f' : 'white')};
  box-shadow: ${({ theme }) => (theme === lightTheme ? '0 0 10px #fffb0f, 0 0 30px #fffb0f, 0 0 100px #f9f61f, inset 0 0 10px #f9f61f' : '0 0 10px #ffffff, 0 0 60px gray, 0 0 200px gray, inset 0 0 80px gray')};
  z-index: 10;
  top: 2.5vh; /* Position from the top */
  right: 10vw; /* Position from the right */
  
  @media (max-width: 768px) {

    font-size: 4rem; /* Adjust font size for smaller devices */
    width: 7rem; /* Further adjust the width for smaller devices */
    height: 7rem; /* Further adjust the height for smaller devices */
  }
  
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 300px; /* Adjust the width of the square */
  height: 300px; /* Adjust the height of the square */
  border-radius: 8px;
  z-index: 500;
  
  @media (max-width: 768px) {
    
    font-size: 4rem; /* Adjust font size for smaller devices */
    width: 10rem; /* Further adjust the width for smaller devices */
    height: 10rem; /* Further adjust the height for smaller devices */
  }
`;

const ELetter = styled(LogoLetter)`
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondELetter = styled(LogoLetter)`
  width: 50%;
  height: 50%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MLetter = styled(LogoLetter)`
  width: 50%;
  height: 50%;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

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
`;



const HeaderContent = styled.div`
  transition: background-color 0.3s, color 0.3s; /* Add transition here */
  background-color: ${({ theme }) => (theme === lightTheme ? '#46dbec' : '#181e2a')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 100%;
`;

const Header = ({ isDarkMode }) => {
    return (
        <HeaderContent>
            
            <SunMoon />
            <Logo>
                <ELetter>E</ELetter>
                <SecondELetter>E</SecondELetter>
                <MLetter>M</MLetter>
                <OLetter>O</OLetter>
            </Logo>

            {isDarkMode ? (
                <>
                    {<StarsBackground />
                    
                    }

                </>
            ) : (
                // Light mode components
                <>

                </>
            )}
        </HeaderContent>
    );
};

export default Header