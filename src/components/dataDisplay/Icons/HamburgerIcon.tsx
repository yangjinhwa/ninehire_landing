import React from 'react';
import styled, { keyframes } from 'styled-components';

const HamburgerButton = styled.button`
  display: flex;
  width: 22px;
  height: 20px;
  position: relative;
  z-index: 50;
`;

const menuAnimationDuration: string = '0.4s';
const menuAnimationTiming: string = 'ease-out';
const burgerOpenMiddleAni: string = `transform ${menuAnimationDuration} ${menuAnimationTiming},
opacity 0ms linear 0.2s`;

const burgerOpenTop = keyframes`
  50% {
    transform: translate3d(0, 8px, 0);
  }
  100% {
    transform: translate3d(0, 8px, 0) rotate(45deg);
  }
`;

const burgerOpenBottom = keyframes`
  50% {
    transform: translate3d(0, -8px, 0);
  }
  100% {
    transform: translate3d(0, -8px, 0) rotate(-45deg);
  }
`;

const burgerCloseTop = keyframes`
  0% {
    transform: translate3d(0, 8px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, 8px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const burgerCloseBottom = keyframes`
  0% {
    transform: translate3d(0, -8px, 0) rotate(-45deg);
  }
  50% {
    transform: translate3d(0, -8px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const Piece = styled.span`
  display: block;
  position: absolute;
  width: 22px;
  height: 2px;
  background-color: #000000;
  border-radius: 50px;
  transform-origin: 50% 50%;
  transition: transform ${menuAnimationDuration} ${menuAnimationTiming};
`;

const HamburgerIconWrap = styled.div<{
  isActive: boolean;
}>`
  position: relative;

  ${Piece}:nth-child(1) {
    top: 0;
    animation: ${menuAnimationDuration} ${menuAnimationTiming} forwards
      ${({ isActive }) => (isActive ? burgerOpenTop : burgerCloseTop)};
  }

  ${Piece}:nth-child(2) {
    top: 8px;
    opacity: ${({ isActive }) => (isActive ? 0 : 1)};
    transition: ${burgerOpenMiddleAni};
  }

  ${Piece}:nth-child(3) {
    top: 16px;
    animation: ${menuAnimationDuration} ${menuAnimationTiming} forwards
      ${({ isActive }) => (isActive ? burgerOpenBottom : burgerCloseBottom)};
  }
`;

type hamburgerIconProp = {
  onClick: any;
  isActive: boolean;
};

function HamburgerIcon({ onClick, isActive }: hamburgerIconProp) {
  return (
    <HamburgerButton onClick={onClick}>
      <HamburgerIconWrap isActive={isActive}>
        <Piece />
        <Piece />
        <Piece />
      </HamburgerIconWrap>
    </HamburgerButton>
  );
}

export default HamburgerIcon;
