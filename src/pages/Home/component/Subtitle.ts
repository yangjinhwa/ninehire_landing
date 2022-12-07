import styled from 'styled-components';
import Color from '@src/styles/Color';

const Subtitle = styled.h2<{
  color?: string;
  gap?: number;
}>`
  font-weight: 800;
  color: ${({ color }) => (color ? color : Color.GRAY_9)};
  margin-bottom: ${({ gap }) => (gap ? `${gap}px` : '36px')};
`;

export default Subtitle;
