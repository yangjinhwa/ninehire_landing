import styled from 'styled-components';
import Color from '../Color';

export const Font = styled.p<{
  size: number;
  height: number;
  weight?: number | 'bold';
  color?: string;
}>`
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ height }) => `${height}px`};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color || Color.GRAY_8};
`;
