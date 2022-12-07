import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '@src/components/icon/Icon';
import Color from '@src/styles/Color';

const ArrowButton = styled.button<{
  direction: 'left' | 'right';
  size: number;
}>`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'left' ? 'row' : 'row-reverse')};
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Color.GRAY_9};
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  border-radius: 50px;

  .Arrow1,
  .Arrow2 {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
  }

  .Arrow1 {
    transition: all 0.3s 0.2s;
    transform: translateX(0);
  }
  .Arrow2 {
    position: absolute;
    top: 50%;
    bottom: 0;
    transition: all 0.4s;
    transform: translate(
      ${({ direction }) => (direction === 'right' ? '-20px' : '20px')},
      -50%
    );
    opacity: 0;
  }

  &:hover {
    .Arrow1 {
      transform: translateX(
        ${({ direction }) => (direction === 'right' ? '20px' : '-20px')}
      );
      transition-delay: 0s;
      opacity: 0;
    }

    .Arrow2 {
      transform: translate(0, -50%);
      opacity: 1;
    }
  }
`;

interface Props {
  direction?: 'left' | 'right';
  onClick?: (e?) => void;
  children?: JSX.Element | string;
  size?: number;
}

function ArrowBtn({ direction = 'left', onClick, children, size = 20 }: Props) {
  const drawArrow = {
    left: <Icon name="LeftArrow" style={{ width: size, height: size }} />,
    right: <Icon name="RightArrow" style={{ width: size, height: size }} />,
  };

  return (
    <>
      <ArrowButton direction={direction} onClick={onClick} size={size}>
        <div className="Arrow1">{drawArrow[direction]}</div>
        <div className="Arrow2">{drawArrow[direction]}</div>
        <span>{children}</span>
      </ArrowButton>
    </>
  );
}

export default ArrowBtn;
