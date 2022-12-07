import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3<{
  color?: string;
}>`
  font-weight: 800;
  background-clip: text;
  color: ${Color.GRAY_2};
  background: center/cover no-repeat ${({ color }) => color && color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.2s ease;
  background-position: center;
  margin-bottom: 46px;

  &:hover {
    background-position: bottom;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 460px) {
    font-size: 28px;
  }
`;

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  color?: string;
  style?: any;
}

function MaskTitle({ children, color, style }: Props) {
  return (
    <>
      <H3 color={color} style={style}>
        {children}
      </H3>
    </>
  );
}

export default MaskTitle;
