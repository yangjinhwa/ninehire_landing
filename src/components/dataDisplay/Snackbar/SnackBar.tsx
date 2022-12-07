import React, { useEffect, useState, ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

import Color from '@src/styles/Color';
import Theme from '@src/styles/Theme';

const ItemEnter = keyframes`
  0%{
    transform: translateY(0);
    opacity: 0;
  }
  100%{
    transform: translateY(-15%);
    opacity: 1;
  }
`;

const ItemExit = keyframes`
  0%{
    transform: translateY(-15%);
    opacity: 1;
  }
  100%{
    transform: translateY(0);
    opacity: 0;
  }
`;

const SnackBarSec = styled.div`
  position: fixed;
  bottom: 30px;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const SnackBarWrap = styled.div<{
  isShow: boolean;
}>`
  background-color: ${Color.GRAY_8};
  color: white;
  border-radius: 6px;
  padding: 16px;
  text-align: center;

  transition: all 1s ease-in-out;
  transform-origin: top center;
  animation: 0.6s ${Theme.animation.modal_cubic_bezier} both alternate
    ${({ isShow }) => (isShow ? ItemEnter : ItemExit)};
`;

interface SnackBarProps {
  children: ReactElement;
  show: boolean;
  setShow: any;
}

function SnackBar({ children, show, setShow }: SnackBarProps) {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setRender(false);
    }
  };

  return shouldRender ? (
    <SnackBarSec>
      <SnackBarWrap isShow={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </SnackBarWrap>
    </SnackBarSec>
  ) : null;
}

export default SnackBar;
