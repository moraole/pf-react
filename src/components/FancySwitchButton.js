import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';

const Button = styled.button`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: ${({ isOn }) => (isOn ? 'rgb(205, 205, 205, 0)' : 'rgb(205, 205, 205, 0)')}; /* No background color change */
  cursor: pointer;
  transition: background-color 0s;
  outline-style: solid;
  outline-width: 0.1px;
  outline-color: ${({ isOn }) => (isOn ? 'rgba(255, 255, 255,0.2)' : 'black')};
  border: 200px;
  user-select: none;
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the icon vertically and horizontally */
  font-size: 16px;
  color: ${({ isOn }) => (isOn ? '#fff' : '#333')}; /* Adjusted color for better visibility */
  display: flex;
  align-items: center; /* Center the icon vertically */
  justify-content: center; /* Center the icon horizontally */
  width: 30px;
  height: 30px;
`;

const IconSymbol = styled(FontAwesomeIcon)`
  font-size: 14px;
`;

const FancySwitchButton = ({ isOn, onToggle }) => {
  return (
    <Button isOn={isOn} onClick={onToggle}>
      <Icon isOn={isOn}>
        <IconSymbol icon={isOn ? faMoon : faSun} />
      </Icon>
    </Button>
  );
};

export default FancySwitchButton;
