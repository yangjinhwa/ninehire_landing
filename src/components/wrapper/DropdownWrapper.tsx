import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Color from '@src/styles/Color';

const DropdownWrap = styled.div<{
  direction: keyof typeof dropdownDirMap;
  open: boolean;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: left;

  width: 150px;
  background-color: ${Color.WHITE};
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 8px;
  z-index: 1;
  overflow: auto;
  transition: 0.2s;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  ${({ direction }) => direction && dropdownDirMap[direction]};
`;

export const dropdownListAni = {
  enter: {
    opacity: 1,
    originX: 0,
    originY: 0,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
    display: 'block',
    transform: 'scaleY(1)',
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.755, 0.05, 0.855, 0.06],
    },
    transitionEnd: {
      display: 'none',
      overflow: 'auto',
    },
    transform: 'scaleY(0.8)',
  },
};

export const dropdownDirMap = {
  topRight: css`
    top: 100%;
    right: 0;
  `,
  topLeft: css`
    top: 100%;
    left: 0;
  `,
  bottomRight: css`
    bottom: 100%;
    right: 0;
  `,
  bottomLeft: css`
    bottom: 100%;
    left: 0;
  `,
};

type Props = {
  direction?: keyof typeof dropdownDirMap | undefined;
  open?: boolean;
  handleClickOutside?: (e: any, node) => void;
  children: JSX.Element | JSX.Element[];
  [propsName: string]: any;
  style?: React.CSSProperties;
};

function DropdownWrapper({
  direction = 'topLeft',
  open,
  handleClickOutside,
  children,
  ...props
}: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // --------------| handleClickOutside 예시 |----------------
  //
  // dropdown 바깥을 누르면 dropdown이 닫힘
  //
  // function handleClickOutside(e: any, dropdownNode) {
  //   const isContainTarget =
  //     navListRef.current.contains(e.target) || dropdownNode.contains(e.target);

  //   if (!isContainTarget && dropdownOpen) {
  //     setDropdownOpen(false);
  //   }
  // }
  // --------------------------------------------------------

  useEffect(() => {
    if (open && handleClickOutside) {
      document.addEventListener('mousedown', (e) =>
        handleClickOutside(e, dropdownRef.current)
      );
    }

    if (handleClickOutside) {
      return () => {
        document.removeEventListener('mousedown', (e) =>
          handleClickOutside(e, dropdownRef.current)
        );
      };
    }
  }, [open]);

  return (
    <DropdownWrap ref={dropdownRef} direction={direction} open={open} {...props}>
      {children}
    </DropdownWrap>
  );
}

export default DropdownWrapper;
