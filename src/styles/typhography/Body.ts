import styled, { css } from 'styled-components';
import Color from '../Color';

const Body = styled.p<{
  size: 20 | 18 | 17 | 15 | 14 | 13 | 12 | 11;
  bold?: boolean;
  color?: Color;
}>`
  ${({ size }) =>
    size == 20 &&
    css`
      font-size: 20px;
      line-height: 160%;

      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 150%;
      }
    `};
  ${({ size }) =>
    size == 18 &&
    css`
      font-size: 18px;
      line-height: 150%;

      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 140%;
      }
    `};
  ${({ size }) =>
    size == 17 &&
    css`
      font-size: 17px;
      line-height: 160%;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 150%;
      }
    `};
  ${({ size }) =>
    size == 15 &&
    css`
      font-size: 15px;
      line-height: 160%;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    `};
  ${({ size }) =>
    size == 14 &&
    css`
      font-size: 14px;
      line-height: 160%;
    `};
  ${({ size }) =>
    size == 13 &&
    css`
      font-size: 13px;
      line-height: 140%;
    `}
  ${({ size }) =>
    size == 12 &&
    css`
      font-size: 12px;
      line-height: 150%;
    `};
  ${({ size }) =>
    size == 11 &&
    css`
      font-size: 11px;
      line-height: 150%;
    `};
  color: ${({ color }) => (color ? color : Color.GRAY_8)};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  user-select: none;
`;

export default Body;
