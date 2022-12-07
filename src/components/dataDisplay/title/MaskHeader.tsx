import React from 'react';
import styled from 'styled-components';
import Gradient from '@assets/images/gradient/Gradient-1.jpg';
import Color from '@src/styles/Color';

const H2 = styled.h2`
  font-weight: 800;
  /* background-clip: text;
  background: center/cover no-repeat url(${Gradient});
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: 0.2s ease;
  background-position: center; */

  background: ${Color.BlackPurpleGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  &:hover {
    /* background-position: bottom; */
  }

  @media (max-width: 430px) {
    font-size: 36px;
  }
`;

function MaskHeader({ children }) {
  return (
    <>
      <H2>{children}</H2>
    </>
  );
}

export default MaskHeader;
