import React from 'react';
import styled from 'styled-components';

const MobileBr = styled.br`
  display: none;

  @media (max-width: 460px) {
    display: block;
  }
`;

export default MobileBr;
