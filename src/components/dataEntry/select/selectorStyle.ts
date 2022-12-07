import Color from '@src/styles/Color';
import styled, { css } from 'styled-components';

export const SelectWrap = styled.div`
  position: relative;
  user-select: none;
  width: 180px;
  cursor: pointer;
`;

export const SelectTrigger = styled.div<{
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  background-color: ${Color.GRAY_2};
  border: 1px solid ${Color.PURPLE_GRAY_3};
  cursor: pointer;
  border-radius: 4px;
`;

export const ArrowIcon = styled.div<{
  isSelectOpen: boolean;
}>`
  position: relative;
  height: 10px;
  width: 10px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0.15rem;
    height: 100%;
    transition: all 0.2s;
    background-color: ${Color.GRAY_8};
  }

  &::before {
    left: 3px;
    transform: ${({ isSelectOpen }) =>
      isSelectOpen ? 'rotate(-45deg)' : 'rotate(45deg)'};
  }

  &::after {
    left: -3px;
    transform: ${({ isSelectOpen }) =>
      isSelectOpen ? 'rotate(45deg)' : 'rotate(-45deg)'};
  }
`;

export const Options = styled.div<{
  isActiveIndex: boolean;
}>`
  padding: 8px;
  background-color: ${({ isActiveIndex }) =>
    isActiveIndex && 'var(--cardBackgroundColor)'};
  border-radius: 8px;
  &:hover {
    background-color: ${Color.GRAY_4};
  }
`;
