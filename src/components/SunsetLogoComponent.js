import React from 'react';
import styled from 'styled-components';

const SunsetLogo = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom, #ff7f50, #ff4f00, #ff0066);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Sun = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 50%;
`;

const Rays = styled.div`
  width: 100%;

  height: 100%;
  position: relative;
`;

const Ray = styled.div`
  width: 100%;
  height: 4px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 0;
  transform-origin: center;
`;

const FirstRay = styled(Ray)`
  transform: translate(-50%, -50%) rotate(0deg);
`;

const SecondRay = styled(Ray)`
  transform: translate(-50%, -50%) rotate(45deg);
`;

const ThirdRay = styled(Ray)`
  transform: translate(-50%, -50%) rotate(90deg);
`;

const FourthRay = styled(Ray)`
  transform: translate(-50%, -50%) rotate(135deg);
`;

const FifthRay = styled(Ray)`
  transform: translate(-50%, -50%) rotate(180deg);
`;

const SixthRay = styled(Ray)`
  transform: translate(-50%, -50%) rotate(225deg);
`;

const SeventhRay = styled(Ray)`
  transform: translate(-50%, -50%) rotate(270deg);
`;

const EighthRay = styled(Ray)`
  transform: translate(-50%, -50%) rotate(315deg);
`;

const SunsetLogoComponent = () => {
  return (
    <SunsetLogo>
      <Sun>
        <Rays>
          <FirstRay />
          <SecondRay />
          <ThirdRay />
          <FourthRay />
          <FifthRay />
          <SixthRay />
          <SeventhRay />
          <EighthRay />
        </Rays>
      </Sun>
    </SunsetLogo>
  );
};

export default SunsetLogoComponent;