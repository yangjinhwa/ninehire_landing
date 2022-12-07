import Color from '@src/styles/Color';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

const ContainerWrap = styled.section<{
  bgColor?: string;
}>`
  padding: 100px 0;
  gap: 32px;
  background: ${({ bgColor }) => (bgColor ? bgColor : Color.WHITE)};
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 460px) {
    padding: 60px 0;
  }
`;

interface Props {
  children: ReactElement | undefined;
  bgColor?: string;
}

function SectionContainer({ children, bgColor }: Props) {
  return <ContainerWrap bgColor={bgColor}>{children}</ContainerWrap>;
}

export default SectionContainer;
