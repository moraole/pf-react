import React from 'react';
import styled from 'styled-components';

const StarSymbol = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fc0303;
  position: relative;
  clip-path: polygon(
    50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%
  );
`;

const StarSymbolComponent = () => {
  return <StarSymbol />;
};

export default StarSymbolComponent;
