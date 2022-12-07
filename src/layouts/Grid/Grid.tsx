import Color from '@src/styles/Color';
import Theme from '@src/styles/Theme';
import React, { Children } from 'react';
import styled from 'styled-components';

const GridWrap = styled.div<{
  direction?: string;
  textAlign?: string;
  color?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  justify-content: space-between;
  align-items: center;
  max-width: ${Theme.landingGrid};
  margin: 0 auto;
  padding: 0 16px;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  color: ${({ color }) => (color ? color : Color.GRAY_9)};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

type GridProps = {
  children: JSX.Element[] | JSX.Element;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  textAlign?: 'center' | 'left' | 'right';
  color?: string;
};

function Grid({ direction, children, textAlign, color }: GridProps) {
  return (
    <GridWrap direction={direction} textAlign={textAlign} color={color}>
      {children && Children.map(children, (child) => child)}
    </GridWrap>
  );
}

export default Grid;
