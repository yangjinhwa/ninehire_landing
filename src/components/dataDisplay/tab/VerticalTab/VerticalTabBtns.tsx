import useWindowWidth from '@src/hooks/useWindowWidth';
import React, { createRef, useEffect, useRef, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

import Color from '@src/styles/Color';
import { TabType } from '../CustomTabs/CustomTabs';

const maskingMap = {
  bottom: css`
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%);
  `,
  top: css`
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%);
  `,
  center: css`
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 5%,
      rgba(0, 0, 0, 1) 95%,
      rgba(0, 0, 0, 0) 100%
    );
  `,
};

const TabWrapper = styled.div<{
  maskingdir?: 'bottom' | 'top' | 'center' | '';
}>`
  grid-area: buttons;
  position: relative;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  gap: 12px;

  // 탭에 스크롤 요소가 있을 때
  ${({ maskingdir }) => maskingdir && maskingMap[maskingdir]}

  // hide scrollbar but is working
  /* overflow-y: scroll; */
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
  background-color: ${Color.WHITE};
  position: absolute;
  width: 4px;
  bottom: 0;
  transition: 0.2s ease all;
  border-radius: 0 50px 50px 0;
  z-index: 1;
`;

const TabButton = styled.button`
  color: ${Color.GRAY_2};
  padding: 12px;
  transition: 0.2s;
  position: relative;
  font-size: 15px;
  white-space: pre;
  border-radius: 8px;
  text-align: left;
  width: 100%;
  white-space: normal;
  background-color: rgba(225, 225, 225, 0.1);
  border: 1px solid rgba(225, 225, 225, 0);

  &:hover {
    font-weight: 700;
    background-color: rgba(225, 225, 225, 0.2);
    color: ${Color.WHITE};
  }

  &.tabActive {
    font-weight: 700;
    box-shadow: 0px 0px 16px rgba(255, 255, 255, 0.15);
    background-color: rgba(225, 225, 225, 0.2);

    border: 1px solid rgba(225, 225, 225, 0.2);
  }

  @media (max-width: 460px) {
    font-size: 14px;
    padding: 8px;
  }

  .title {
    font-weight: 700;
    font-size: 17px;
  }

  .subTitle {
    font-weight: 400;
    margin-top: 4px;
    font-size: 14px;
    color: ${Color.GRAY_5};
  }
`;

type Props = {
  tabList: TabType[];
  currentOrder: number;
  setCurrent: any;
  position?: 'flex-start' | 'center';
  width?: number;
};

function VerticalTabBtns({
  tabList,
  currentOrder,
  setCurrent,
  position = 'center',
  width,
}) {
  const windowWidth = useWindowWidth();
  const tabUnderLine = useRef<HTMLDivElement>(null);
  const tabWrapRef = useRef<HTMLDivElement>(null);
  const tabRefs: any = useRef(Array.from({ length: tabList.length }, () => createRef()));
  const [moveToTopValue, setMoveToTopValue] = useState<number>(0);
  const [underlineHeight, setUnderlineHeight] = useState(35);

  const buttonMargin: number = 14;

  const [isTabScroll, setIsTabScroll] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, x: 0, y: 0 });
  const [maskingDir, setMaskingDir] = useState<'' | 'top' | 'bottom' | 'center'>('');

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
      setScrollTop(tabWrapRef.current.scrollTop);
    }
  }, [isTabScroll]);

  // masking 설정
  useEffect(() => {
    if (isTabScroll && tabWrapRef.current) {
      const tabWrapScrollHeight =
        tabWrapRef.current!.scrollHeight - tabWrapRef.current!.clientHeight;

      // 가장 첫 탭 선택 시, scrollTop 0일 시
      if (currentOrder === 0 || scrollTop === 0) {
        setMaskingDir('bottom');
      }

      // 중간 탭 선택 시
      if ((currentOrder !== 0 && currentOrder < tabList.length - 1) || scrollTop) {
        if (scrollTop === 0) {
          setMaskingDir('bottom');
        } else if (scrollTop === tabWrapScrollHeight) {
          setMaskingDir('top');
        } else {
          setMaskingDir('center');
        }
      }

      // 마지막 탭 선택 시
      if (currentOrder === tabList.length - 1 && scrollTop === tabWrapScrollHeight) {
        setMaskingDir('top');
      }
    }
  }, [currentOrder, tabList, isTabScroll, scrollTop]);

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
      const tabWrapHeight = tabWrapRef.current!.clientHeight;
      const distanceTabWrapperToTop: number =
        tabWrapRef.current.getBoundingClientRect().top;
      const distanceTargetToTop: number =
        tabRefs.current[currentOrder].current.getBoundingClientRect().top;
      // 1. tab wrapper 크기의  반보다 tab button 위치가 멀리 있는지
      const tabMoreThanHalf =
        tabWrapHeight / 2 < distanceTargetToTop - distanceTabWrapperToTop;
      // 2. 탭이 중앙에 오는 위치 구하기
      const tabBtnHeightrr: [number] = tabRefs.current.map(
        (ref) => ref.current.clientHeight
      );
      const calcBtnGapWidth = buttonMargin * currentOrder;
      const btnLeft = calcBtnDistance(tabBtnHeightrr, currentOrder) + calcBtnGapWidth;
      const calcMoveDistance =
        btnLeft -
        (tabWrapHeight / 2 - tabRefs.current[currentOrder].current.clientHeight / 2);

      // 3. 누른 tab button이 중앙에 오게 하기
      if (tabMoreThanHalf) {
        tabWrapRef.current.scrollTop = calcMoveDistance;
      }

      // tab button이 중앙보다 앞쪽일 때
      if (!tabMoreThanHalf) {
        if (tabWrapRef.current.scrollTop > btnLeft) {
          tabWrapRef.current.scrollTop = calcMoveDistance;
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
      const tabBtnHeightArr: [number] = tabRefs.current.map(
        (ref) => ref.current.clientHeight
      );
      const btnTop = calcBtnDistance(tabBtnHeightArr, currentOrder);

      // 버튼들의 width을 모두 더한 값 보다 tabWrap이 작으면 (스크롤 발생 시) startTargetLeft = 0
      const totalBtnWidth = calcBtnDistance(tabBtnHeightArr, tabList.length + 1);
      const tabWrapHeight = tabWrapRef.current.clientWidth;
      const calcBtnGapWidth = buttonMargin * currentOrder;
      const startTabLeftDirection =
        tabWrapHeight < totalBtnWidth ? -buttonMargin : calcStartTabLeft();

      //디버깅
      // console.log({
      //   tabWrapHeight,
      //   totalBtnWidth,
      //   btnLeft,
      //   calcBtnGapWidth,
      //   startLeft: startTabLeftDirection,
      // });
      const moveToTop = startTabLeftDirection + btnTop + calcBtnGapWidth + buttonMargin;
      setIsTabScroll(tabWrapHeight < totalBtnWidth);
      setMoveToTopValue(moveToTop);
      setUnderlineHeight(tabBtnHeightArr[currentOrder]);
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
        tabWrapRef.current.scrollTop = pos.top - dy;
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
      style={{ maxWidth: width }}
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
          const { value, count, subValue } = list;
          return (
            <TabButton
              key={index}
              ref={tabRefs.current[index]}
              onClick={(e) => handleClickTab(index)}
              className={`${currentOrder === index && 'tabActive'}`}
            >
              <div>
                <div className="title">{value}</div>
                {subValue && <div className="subTitle">{subValue}</div>}
                {count && <CountSpan>&nbsp;{count}</CountSpan>}
              </div>
            </TabButton>
          );
        })}

      <TabUnderLine
        ref={tabUnderLine}
        style={{
          height: underlineHeight,
          top: moveToTopValue,
          right: 0,
        }}
      />
    </TabWrapper>
  );
}

export default React.memo(VerticalTabBtns);
