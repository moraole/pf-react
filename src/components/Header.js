import React from 'react';
import styled from 'styled-components';
import StarsBackground from './StarsBackground';
import lightTheme from '../themes/lightTheme';

const SunMoon = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background: ${({ theme }) => (theme === lightTheme ? 'orange' : 'white')};
  box-shadow: ${({ theme }) => (theme === lightTheme ? '0 0 10px orange, 0 0 60px orange, 0 0 200px orange, inset 0 0 80px orange' : '0 0 10px gray, 0 0 60px gray, 0 0 200px gray, inset 0 0 80px gray')};
  z-index: 10;
  top: 2.5vh; /* Position from the top */
  right: 10vw; /* Position from the right */
`;
const Ray1 = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  color: '#f2f2f2';
  z-index: 500;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 87px solid #688aab;
`
const Ray2 = styled.div`
`
const LogoLetter = styled.span`
  font-family: 'Playfair Display', serif;
  user-select: none;
`;

const Triangle = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  color: '#f2f2f2';
  z-index: 500;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 87px solid #688aab;
`;

const Logo = styled.div`
  font-family: 'Playfair Display';
  position: absolute;
  font-size: 7.5rem; 
  background-color: ${({ theme }) => (theme === lightTheme ? '#ebebeb' : '#555')};
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 300px; /* Adjust the width of the square */
  height: 300px; /* Adjust the height of the square */
  border-radius: 8px;
  z-index: 500;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
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