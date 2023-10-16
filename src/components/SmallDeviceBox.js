import React, { useEffect } from 'react';
import styled from 'styled-components';

const CenteredBox = styled.div`
  display: flex;
  transform: translate(0%, -70%);
`;

const LetterBox = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid ${({ isDarkMode }) => (isDarkMode ? 'black' : 'red')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 56px;
  margin: 5px;
`;

const SmallDeviceBox = (isDarkMode) => {
    return (
        <CenteredBox>
            <div>
                <LetterBox isDarkMode={isDarkMode}>E</LetterBox>
                <LetterBox isDarkMode={isDarkMode}>E</LetterBox>
            </div>
            <div>
                <LetterBox isDarkMode={isDarkMode}>M</LetterBox>
                <LetterBox isDarkMode={isDarkMode}>O</LetterBox>
            </div>
        </CenteredBox>
    );
};

export default SmallDeviceBox;