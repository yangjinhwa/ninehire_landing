import Color from '@src/styles/Color';
import Theme from '@src/styles/Theme';
import styled, { css } from 'styled-components';
import { defaultInputStyle, validInputStyle } from '../Input/InputStyle';

const TextareaBase = styled.textarea<{
  isValid?: boolean;
  block?: boolean;
}>`
  width: ${({ block }) => block && '100%'};
  font-family: inherit;
  border: 1px solid ${Color.GRAY_4};
  background-color: ${Color.GRAY_2};
  padding: 12px 16px;
  background: none;
  font-size: 14px;
  line-height: 1.3;
  outline: none;
  resize: none;
  transition: border 0.2s;
  border-radius: ${Theme.style.border_radius};
  overflow-y: scroll;
  line-height: 21px;
  x2 &:focus {
    outline: none;
    border: 1px solid ${Color.GRAY_8};
  }

  &::placeholder {
    font-size: 14px;
    color: ${Color.GRAY_6};
  }
  ${({ isValid }) => (!isValid ? defaultInputStyle : validInputStyle)};
`;

export default TextareaBase;
