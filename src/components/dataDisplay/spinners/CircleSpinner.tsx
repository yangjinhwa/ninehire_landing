import {
  buttonShapeMap,
  buttonSizeMap,
} from '@src/components/dataEntry/button/ButtonStyle';
import Color from '@src/styles/Color';
import React from 'react';
import styled, { css } from 'styled-components';

const spinnerSizeMap = {
  xl: css`
    width: 16px;
    height: 16px;
  `,
  lg: css`
    width: 15px;
    height: 15px;
  `,
  md: css`
    width: 14px;
    height: 14px;
  `,
  sm: css`
    width: 12px;
    height: 12px;
  `,
};

const spinnerShapeMap = {
  filled: {
    default: css`
      stroke: ${Color.WHITE};
    `,
    primary: css``,
    warning: css``,
    white: css``,
  },
  stroke: {
    default: css`
      stroke: ${Color.GRAY_8};
    `,
    primary: css``,
    warning: css``,
    white: css``,
  },
  ghost: {
    default: css`
      stroke: ${Color.GRAY_8};
    `,
    primary: css``,
    warning: css``,
    white: css``,
  },
};

const SvgBox = styled.span<{
  size: keyof typeof spinnerSizeMap;
}>`
  ${({ size }) => (size ? spinnerSizeMap[size] : spinnerSizeMap['md'])};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerSVG = styled.svg<{
  color?: 'default' | 'primary' | 'warning' | 'white';
  shape: keyof typeof spinnerShapeMap;
}>`
  animation: rotate 2s linear infinite;

  & .path {
    ${({ shape, color }) =>
      shape && color
        ? spinnerShapeMap[shape][color]
        : spinnerShapeMap['filled']['default']};
    stroke-width: 8px;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
    opacity: 0.5;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

interface SpinnerProps {
  // button shape, size, color 정책과 항상 같게
  shape: keyof typeof buttonShapeMap;
  size: keyof typeof buttonSizeMap;
  color?: 'default' | 'primary' | 'warning' | 'white';
}

function CircleSpinner({ color, size, shape }: SpinnerProps) {
  return (
    <>
      <SvgBox size={size} role="img" aria-label="spinner">
        <SpinnerSVG shape={shape} color={color} viewBox="0 0 50 50">
          <circle className="path" fill="none" cx="25" cy="25" r="20" />
        </SpinnerSVG>
      </SvgBox>
    </>
  );
}

export default CircleSpinner;
