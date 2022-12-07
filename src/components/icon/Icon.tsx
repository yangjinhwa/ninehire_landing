import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';
import Icons from './Icons';

const Container = styled.div<{ color: Color }>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  path {
    transition: 0.2s;
    fill: ${({ color }) => color};
  }
`;

interface Props {
  name: keyof typeof Icons;
  color?: Color;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}

const Icon = ({ name, color, style, onClick }: Props) => {
  return (
    <Container onClick={onClick} color={color} style={style}>
      {Icons[name]}
    </Container>
  );
};

export default React.memo(Icon);
