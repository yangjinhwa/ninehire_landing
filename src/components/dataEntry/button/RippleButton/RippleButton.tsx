import Color from '@src/styles/Color';
import React, { forwardRef, Ref, useCallback, useRef } from 'react';
import styled from 'styled-components';
import ButtonBase, { buttonShapeMap, buttonSizeMap } from '../ButtonStyle';
import { useState, RefObject } from 'react';
import { RefCallback } from 'react';

const Ink = styled.span`
  background: ${Color.BLUE_2};
  display: block;
  position: absolute;
  opacity: 1;
  transform: scale(0);
  border-radius: 50%;
  will-change: transform;
  transform-origin: 50% 50%;
  transition: opacity 0.25s ease-in;

  &.animate {
    animation: ripple 0.4s cubic-bezier(0.75, 0, 0.55, 0.55);
  }

  @keyframes ripple {
    100% {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

interface RippleButtonProps {
  children: any;
  size?: keyof typeof buttonSizeMap;
  shape?: keyof typeof buttonShapeMap;
  color?: 'default' | 'primary' | 'warning' | 'white';
  pending?: boolean;
  block?: boolean;
  disabled?: boolean;
  [propName: string]: any;
}

function RippleButton({
  children,
  onClick,
  shape = 'filled',
  size = 'md',
  disabled,
}: RippleButtonProps) {
  const inkRef = useRef<HTMLDivElement>();
  const [buttonNode, setButtonNode] = useState<HTMLElement>(null);
  const setRef: RefCallback<HTMLElement | null> = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        setButtonNode(node);
      }
    },
    []
  );

  function createRipple(e) {
    const inkTag = inkRef.current;

    if (inkTag) {
      inkTag.classList.remove('animate');
      const diameter = Math.max(buttonNode.offsetWidth, buttonNode.offsetHeight);
      const mouse_x = e.nativeEvent.offsetX - diameter / 2;
      const mouse_y = e.nativeEvent.offsetY - diameter / 2;
      inkTag.style.top = mouse_y + 'px';
      inkTag.style.left = mouse_x + 'px';
      inkTag.style.width = diameter + 'px';
      inkTag.style.height = diameter + 'px';
      inkTag.classList.add('animate');
    }
  }

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <>
      <ButtonBase
        size={size}
        shape={shape}
        onMouseDown={createRipple}
        onClick={handleClick}
        ref={setRef}
        disabled={disabled}
      >
        {children}
        <Ink ref={inkRef} />
      </ButtonBase>
    </>
  );
}

export default RippleButton;
