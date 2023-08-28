import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const SwitchContainer = styled.label`
  position: relative;
  right: 1%;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .Slider {
    background-color: #2196F3;
  }

  &:checked + .Slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;


  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: ${({ isOn }) => (isOn ? '#7a88ff' : '#140000')};
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px; /* Set the width to match the size of the slider circle */
  height: 30px; /* Set the height to match the size of the slider circle */
  border-radius: 50%;
  background-color: white;
  z-index: 1;
  left: ${({ isOn }) => (isOn ? 'calc(100% - 56%)' : '4px')}; /* Adjust left positioning */
`;

const IconSymbol = styled(FontAwesomeIcon)`
  font-size: 14px; /* Adjust the size to match the slider circle */
`;

const FancySwitchButton = ({ isOn, onToggle }) => {
  return (
    <SwitchContainer>
      <SwitchInput type="checkbox" checked={isOn} onChange={onToggle} />
      <Slider className="Slider" />
      <Icon isOn={isOn}>
        <IconSymbol icon={isOn ? faMoon : faSun} />
      </Icon>
    </SwitchContainer>
  );
};

export default FancySwitchButton;
