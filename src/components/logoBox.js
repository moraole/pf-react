import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';

const CenteredBox = styled.div`
  display: flex;
  transform: translate(0%, -70%);
`;

const LetterBox = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid ${({ theme }) => (theme.text)};
  border-color: ${({ theme }) => (theme.text)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 56px;
  margin: 5px;
`;

const SmallDeviceBox = ({ isDarkMode }) => {
    // Create a local state to force re-renders when isDarkMode changes
    const [darkMode, setDarkMode] = useState(isDarkMode);

    // Use useEffect to listen for changes in isDarkMode
    useEffect(() => {
        setDarkMode(isDarkMode);
    }, [isDarkMode]);

    return (
        <CenteredBox>
            <div>
                <LetterBox theme={darkMode ? darkTheme : lightTheme}>E</LetterBox>
                <LetterBox theme={darkMode ? darkTheme : lightTheme}>E</LetterBox>
            </div>
            <div>
                <LetterBox theme={darkMode ? darkTheme : lightTheme}>M</LetterBox>
                <LetterBox theme={darkMode ? darkTheme : lightTheme}>O</LetterBox>
            </div>
        </CenteredBox>
    );
};

export default SmallDeviceBox;
