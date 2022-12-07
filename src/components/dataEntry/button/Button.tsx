import React, { useState, useEffect, ReactElement, MouseEventHandler } from 'react';
import styled from 'styled-components';

import ButtonBase, { buttonShapeMap, buttonSizeMap } from './ButtonStyle';
import CircleSpinner from '@src/components/dataDisplay/spinners/CircleSpinner';

interface ButtonProps {
  children: any;
  size?: keyof typeof buttonSizeMap;
  shape?: keyof typeof buttonShapeMap;
  color?: 'default' | 'primary' | 'warning' | 'white';
  pending?: boolean;
  block?: boolean;
  disabled?: boolean;
  style?: any;
  id?: string;
  [propName: string]: any;
}

const SpinnerSec = styled.div`
  margin-right: 8px;
`;

function Button({
  children,
  size = 'md',
  color = 'default',
  shape = 'filled',
  pending,
  block,
  disabled,
  onClick,
  style,
  id,
}: ButtonProps) {
  return (
    <>
      <ButtonBase
        onClick={onClick}
        size={size}
        color={color}
        block={block}
        shape={shape}
        disabled={pending || disabled}
        style={style}
        id={id}
      >
        {pending && (
          <SpinnerSec>
            <CircleSpinner color={color} size={size} shape={shape} />
          </SpinnerSec>
        )}
        {children}
      </ButtonBase>
    </>
  );
}

export default Button;
