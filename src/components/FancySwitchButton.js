import React from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.label`
  position: relative;
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

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: ${({ isOn }) => (isOn ? 'calc(100% - 6px)' : '6px')};
  transform: ${({ isOn }) => (isOn ? 'translate(-100%, -50%)' : 'translate(0, -50%)')};
  font-size: 16px;
  color: ${({ isOn }) => (isOn ? '#FFD700' : '#F7F7F7')};
  transition: 0.4s;
`;

const FancySwitchButton = ({ isOn, onToggle }) => {
  return (
    <SwitchContainer>
      <SwitchInput type="checkbox" checked={isOn} onChange={onToggle} />
      <Slider className="Slider" />
      <Icon isOn={isOn}>{isOn ? '🌙' : '☀️'}</Icon>
    </SwitchContainer>
  );
};

export default FancySwitchButton;
