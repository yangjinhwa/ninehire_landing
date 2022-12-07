import useWindowWidth from '@src/hooks/useWindowWidth';
import React, { createRef, useEffect, useRef, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Color from '@src/styles/Color';
import { TabType } from './CustomTabs';

const maskingMap = {
  left: css`
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%);
  `,
  right: css`
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%);
  `,
  center: css`
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 5%,
      rgba(0, 0, 0, 1) 95%,
      rgba(0, 0, 0, 0) 100%
    );
  `,
};

const TabWrapper = styled.div<{
  maskingdir?: 'right' | 'left' | 'center' | '';
}>`
  grid-area: buttons;
  position: relative;
  display: flex;
  scroll-behavior: smooth;
  gap: 12px;

  // 탭에 스크롤 요소가 있을 때
  ${({ maskingdir }) => maskingdir && maskingMap[maskingdir]}

  // hide scrollbar but is working
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  // IE and Edge
  -ms-overflow-style: none;
  // Firefox
  scrollbar-width: none;
`;

const CountSpan = styled.span`
  font-weight: 800;
  color: ${Color.GRAY_3};
`;

const TabUnderLine = styled.div`
  background-color: var(--primaryColor);
  position: absolute;
  width: 30px;
  height: 4px;
  bottom: 0;
  transition: 0.5s ease all;
  z-index: 1;
`;

const TabButton = styled.button`
  color: ${Color.GRAY_5};
  padding: 12px;
  margin: 12px 0;
  transition: 0.2s;
  position: relative;
  font-size: 15px;
  white-space: pre;
  border-radius: 8px;

  &:hover {
    font-weight: 700;
    background-color: ${Color.PURPLE_7};
    color: ${Color.WHITE};
  }

  &.tabActive {
    font-weight: 700;
    color: ${Color.GRAY_2};
  }

  @media (max-width: 460px) {
    font-size: 14px;
    padding: 8px;
  }
`;

type Props = {
  tabList: TabType[];
  currentOrder: number;
  setCurrent: any;
  position?: 'flex-start' | 'center';
};

function TabBtns({ tabList, currentOrder, setCurrent, position = 'center' }: Props) {
  const windowWidth = useWindowWidth();
  const tabUnderLine = useRef<HTMLDivElement>(null);
  const tabWrapRef = useRef<HTMLDivElement>(null);
  const tabRefs: any = useRef(Array.from({ length: tabList.length }, () => createRef()));
  const [moveToLeftValue, setMoveToLeftValue] = useState<number>(0);
  const [underlineWidth, setUnderlineWidth] = useState(50);

  const buttonMargin: number = 12;

  const [isTabScroll, setIsTabScroll] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, x: 0, y: 0 });
  const [maskingDir, setMaskingDir] = useState<'' | 'right' | 'left' | 'center'>('');
  const [scrollLeft, setScrollLeft] = useState(0);

  //최초 실행
  useEffect(() => {
    const initialSet = setTimeout(() => {
      setUnderline();
    }, 300);

    return () => {
      clearTimeout(initialSet);
    };
  }, []);

  const handleScroll = useCallback(() => {
    if (isTabScroll) {
      setScrollLeft(tabWrapRef.current.scrollLeft);
    }
  }, [isTabScroll]);

  // masking 설정
  useEffect(() => {
    if (isTabScroll && tabWrapRef.current) {
      const tabWrapScrollWidth =
        tabWrapRef.current!.scrollWidth - tabWrapRef.current!.clientWidth;

      // 가장 첫 탭 선택 시, scrollLeft 0일 시
      if (currentOrder === 0 || scrollLeft === 0) {
        setMaskingDir('right');
      }

      // 중간 탭 선택 시
      if ((currentOrder !== 0 && currentOrder < tabList.length - 1) || scrollLeft) {
        if (scrollLeft === 0) {
          setMaskingDir('right');
        } else if (scrollLeft === tabWrapScrollWidth) {
          setMaskingDir('left');
        } else {
          setMaskingDir('center');
        }
      }

      // 마지막 탭 선택 시
      if (currentOrder === tabList.length - 1 && scrollLeft === tabWrapScrollWidth) {
        setMaskingDir('left');
      }
    }
  }, [currentOrder, tabList, isTabScroll, scrollLeft]);

  useEffect(() => {
    setUnderline();
  }, [currentOrder, windowWidth]);

  function handleClickTab(index: number) {
    setCurrent(index);
    setUnderline();
    setBtnPosition(index);
  }

  function calcBtnDistance(btnWidthArr: [number], index: number): number {
    const copyArr = btnWidthArr.slice();
    const spliceArr = copyArr.splice(0, index);
    if (spliceArr.length !== 0) {
      const calcChildTabWidth = spliceArr.reduce((acc, curr) => acc + curr);
      return calcChildTabWidth;
    }
    return 0;
  }

  // 첫 tab button과 tab wrapper 사이의 간격
  function calcStartTabLeft() {
    const firstTabLeftDistance: number =
      tabRefs.current[0]?.current.getBoundingClientRect().left - buttonMargin;
    const distanceMenuBoxToLeft: number = tabWrapRef.current.getBoundingClientRect().left;
    const startTargetLeft: number = firstTabLeftDistance - distanceMenuBoxToLeft;
    return startTargetLeft;
  }

  /*
   *
   *
   *
   *
   * 스크롤되어 넘어가는 구간에 걸쳐진 tab button을 중앙으로 가져오기 */
  function setBtnPosition(currentOrder) {
    if (tabRefs.current) {
      const tabWrapWidth = tabWrapRef.current!.clientWidth;
      const distanceTabWrapperToLeft: number =
        tabWrapRef.current.getBoundingClientRect().left;
      const distanceTargetToLeft: number =
        tabRefs.current[currentOrder].current.getBoundingClientRect().left;
      // 1. tab wrapper 크기의  반보다 tab button 위치가 멀리 있는지
      const tabMoreThanHalf =
        tabWrapWidth / 2 < distanceTargetToLeft - distanceTabWrapperToLeft;
      // 2. 탭이 중앙에 오는 위치 구하기
      const tabBtnWidthArr: [number] = tabRefs.current.map(
        (ref) => ref.current.clientWidth
      );
      const calcBtnGapWidth = buttonMargin * currentOrder;
      const btnLeft = calcBtnDistance(tabBtnWidthArr, currentOrder) + calcBtnGapWidth;
      const calcMoveDistance =
        btnLeft -
        (tabWrapWidth / 2 - tabRefs.current[currentOrder].current.clientWidth / 2);

      // 3. 누른 tab button이 중앙에 오게 하기
      if (tabMoreThanHalf) {
        tabWrapRef.current.scrollLeft = calcMoveDistance;
      }

      // tab button이 중앙보다 앞쪽일 때
      if (!tabMoreThanHalf) {
        if (tabWrapRef.current.scrollLeft > btnLeft) {
          tabWrapRef.current.scrollLeft = calcMoveDistance;
        }
      }
    }
  }
  // --- 스크롤되어 넘어가는 구간에 걸쳐진 tab button을 중앙으로 가져오기 end

  /*
   *
   *
   *
   *
   * tab button을 따라다니는 underline */
  function setUnderline() {
    if (tabRefs.current) {
      const tabBtnWidthArr: [number] = tabRefs.current.map(
        (ref) => ref.current.clientWidth
      );
      const btnLeft = calcBtnDistance(tabBtnWidthArr, currentOrder);

      // 버튼들의 width을 모두 더한 값 보다 tabWrap이 작으면 (스크롤 발생 시) startTargetLeft = 0
      const totalBtnWidth = calcBtnDistance(tabBtnWidthArr, tabList.length + 1);
      const tabWrapWidth = tabWrapRef.current.clientWidth;
      const calcBtnGapWidth = buttonMargin * currentOrder;
      const startTabLeftDirection =
        tabWrapWidth < totalBtnWidth ? -buttonMargin : calcStartTabLeft();

      //디버깅
      // console.log({
      //   tabWrapWidth,
      //   totalBtnWidth,
      //   btnLeft,
      //   calcBtnGapWidth,
      //   startLeft: startTabLeftDirection,
      // });
      const moveToLeft = startTabLeftDirection + btnLeft + calcBtnGapWidth + buttonMargin;
      setIsTabScroll(tabWrapWidth < totalBtnWidth);
      setMoveToLeftValue(moveToLeft);
      setUnderlineWidth(tabBtnWidthArr[currentOrder]);
    }
  }
  // --- tab button을 따라다니는 underline end

  /*
   *
   *
   *
   *
   * 스크롤되어 넘어가는 구간에 mask로 점차 tab button이 흐려지는 css효과 넣기 */

  const handleMouseDown = useCallback((e) => {
    setMouseDown(true);
    setPos({
      left: tabWrapRef.current.scrollLeft,
      top: tabWrapRef.current.scrollLeft,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (mouseDown) {
        tabWrapRef.current.style.cursor = 'grabbing';
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        tabWrapRef.current.scrollLeft = pos.top - dy;
        tabWrapRef.current.scrollLeft = pos.left - dx;
      }
    },
    [mouseDown]
  );

  const handleMouseUp = useCallback((e) => {
    setMouseDown(false);
    tabWrapRef.current.style.cursor = 'auto';
    tabWrapRef.current.style.removeProperty('user-select');
  }, []);
  // ---- 스크롤되어 넘어가는 구간에 mask로 점차 tab button이 흐려지는 css효과 넣기 end

  return (
    <TabWrapper
      ref={tabWrapRef}
      style={{ justifyContent: isTabScroll ? 'flex-start' : position }}
      maskingdir={maskingDir}
      onScroll={handleScroll}
      // scroll drag
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      // scroll drag end
    >
      {tabList &&
        tabList.map((list, index) => {
          const { value, count } = list;
          return (
            <div key={index}>
              <TabButton
                ref={tabRefs.current[index]}
                onClick={(e) => handleClickTab(index)}
                className={`${currentOrder === index && 'tabActive'}`}
              >
                {value}
                {count && <CountSpan>&nbsp;{count}</CountSpan>}
              </TabButton>
            </div>
          );
        })}

      <TabUnderLine
        ref={tabUnderLine}
        style={{
          width: underlineWidth,
          left: moveToLeftValue,
        }}
      />
    </TabWrapper>
  );
}

export default React.memo(TabBtns);
