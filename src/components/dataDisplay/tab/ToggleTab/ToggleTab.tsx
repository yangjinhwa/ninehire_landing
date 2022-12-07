import React, { Children, createRef, useRef } from 'react';
import styled, { css } from 'styled-components';
import Color from '@src/styles/Color';
import { useEffect, useCallback } from 'react';
import { useState } from 'react';

const fixedStyle = css<{
  grid?: number;
}>`
  display: grid;
  grid-template-columns: ${({ grid }) => grid && `repeat(${grid}, 1fr)`};
`;

const Wrapper = styled.div<{
  grid?: number;
}>`
  height: 40px;
  border-radius: 8px;
  background-color: ${Color.BLUE_GRAY_1};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ grid }) => grid && fixedStyle};
`;

const activeStyle = css`
  color: ${Color.WHITE};
`;

const Item = styled.div<{
  isActive: boolean;
}>`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition-delay: color 0.3s;
  transition: color 0.2s, background-color 0.2s;
  z-index: 1;
  padding: 0 12px;

  &:hover {
    cursor: pointer;
    background-color: ${({ isActive }) => !isActive && `rgba(0,0,0,0.1)`};
  }
  ${({ isActive }) => isActive && activeStyle};
`;

const ActiveBar = styled.div`
  width: 300px;
  height: 32px;
  background-color: ${Color.GRAY_8};
  border-radius: 8px;

  position: absolute;
  transition: left 0.2s ease, width 0.2s ease;
`;

type Props = {
  children: React.ReactNode[];
  gridFix?: boolean;
  style?: React.CSSProperties;
};

interface IchildProps {
  key: string;
  props: {
    children: React.ReactNode[] | React.ReactNode | string;
  };
}

function ToggleTab({ children, gridFix, style }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const activeBarRef = useRef<HTMLDivElement>(null);
  const tabRefs: any = useRef(Array.from({ length: children.length }, () => createRef()));
  const [activeBarWidth, setActiveBarWidth] = useState<number>(30);
  const [moveToLeftValue, setMoveToLeftValue] = useState<number>(0);
  const buttonMargin = 4;

  useEffect(() => {
    activeBarStyle();
    calcBtnWidth();
  }, [currentIndex]);

  function calcBtnDistance(btnWidthArr: [number], index: number): number {
    const copyArr = btnWidthArr.slice();
    const spliceArr = copyArr.splice(0, index);
    if (spliceArr.length !== 0) {
      const calcChildTabWidth = spliceArr.reduce((acc, curr) => acc + curr);
      return calcChildTabWidth;
    }
    return 0;
  }

  /*
   *
   *
   *
   *
   * tab button을 따라다니는 bar */
  function activeBarStyle() {
    if (tabRefs.current) {
      const tabBtnWidthArr: [number] = tabRefs.current.map(
        (ref) => ref.current.clientWidth
      );
      const btnLeft = calcBtnDistance(tabBtnWidthArr, currentIndex);
      const moveToLeft = btnLeft + buttonMargin;
      setMoveToLeftValue(moveToLeft);
    }
  }

  function calcBtnWidth() {
    const tabBtnWidth = tabRefs.current![currentIndex].current.clientWidth;
    setActiveBarWidth(tabBtnWidth);
  }

  const handleClick = useCallback((currentIndex) => {
    setCurrentIndex(currentIndex);
  }, []);

  return (
    <Wrapper
      style={{ padding: buttonMargin, ...style }}
      grid={gridFix && children.length}
    >
      {Children.map(children, (child: IchildProps, index) => {
        // child.key  === children의 props 중, key값 받아옴
        return (
          <Item
            key={index}
            ref={tabRefs.current[index]}
            onClick={() => {
              handleClick(index);
            }}
            isActive={currentIndex === index}
          >
            {child}
          </Item>
        );
      })}
      <ActiveBar
        ref={activeBarRef}
        style={{ width: activeBarWidth, left: moveToLeftValue, top: buttonMargin }}
      />
    </Wrapper>
  );
}

export default React.memo(ToggleTab);
