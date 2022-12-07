import styled, { css } from 'styled-components';
import Color from '@src/styles/Color';
import Theme from '@src/styles/Theme';

export const defaultInputStyle = css<{
  isFocus?: boolean;
}>`
  border: 1px solid ${Color.PURPLE_GRAY_3};
  background-color: ${Color.GRAY_2};

  &:hover,
  &:focus {
    border: 1px solid ${Color.PURPLE_6};
  }

  &:focus {
    box-shadow: 1px 1px 4px ${Color.PURPLE_3}, -1px -1px 4px ${Color.PURPLE_3};
  }

  ${({ isFocus }) =>
    isFocus &&
    `box-shadow: 1px 1px 4px ${Color.PURPLE_3}, -1px -1px 4px ${Color.PURPLE_3}`};
`;

export const validInputStyle = css<{
  isFocus?: boolean;
}>`
  border: 1px solid ${Color.RED_6};

  &:hover,
  &:focus {
    border: 1px solid ${Color.RED_7};
  }

  &:focus {
    box-shadow: 1px 1px 4px ${Color.RED_6}, -1px -1px 4px ${Color.RED_6};
  }
  ${({ isFocus }) =>
    isFocus && `box-shadow: 1px 1px 4px ${Color.RED_6}, -1px -1px 4px ${Color.RED_6};`}
`;

export const baseInputStyle = css`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  transition: 0.2s;
  border-radius: ${Theme.style.border_radius};
  outline: none;

  &::placeholder {
    font-size: 14px;
    color: ${Color.GRAY_6};
  }

  &:disabled {
    border: 1px solid ${Color.GRAY_3};
    background-color: ${Color.BLUE_GRAY_4};
    color: ${Color.GRAY_6};
  }
`;

const InputBase = styled.input<{
  isValid?: boolean;
  block?: boolean;
}>`
  width: ${({ block }) => block && '100%'};

  ${baseInputStyle}
  ${({ isValid }) => (!isValid ? defaultInputStyle : validInputStyle)}
`;

export default InputBase;
