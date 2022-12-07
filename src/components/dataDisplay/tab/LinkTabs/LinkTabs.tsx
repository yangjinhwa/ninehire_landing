import React, { createRef, useRef, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Color from '@src/styles/Color';
import { Link, Route, Switch } from 'react-router-dom';

import { TabProps } from '../../../../typings/tapsList';
// import { getTabIndex, setTabIndex } from "@store/cookie/saveTabIndex";
import useWindowWidth from '@src/hooks/useWindowWidth';
import FadeWrap from '../Tabs/FadeWrap';

const TabWrapper = styled.div<{
  position: string;
}>`
  position: sticky;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  justify-content: ${({ position }) => position && position};
  border-bottom: 1px solid ${Color.GRAY_4};
`;

const TabButton = styled.button`
  color: ${Color.GRAY_9};
  padding: 12px 16px;
  margin: 12px;
  transition: 0.2s;
  position: relative;
  font-size: 15px;
  white-space: pre;
  border-radius: 8px;

  &:hover {
    font-weight: 700;
    background-color: #eeeeee;
  }

  &.tabActive {
    font-weight: 700;
  }
`;

const CountSpan = styled.span`
  font-weight: 800;
  color: ${Color.GRAY_9};
`;

const TabUnderLine = styled.div`
  background-color: ${Color.GRAY_8};
  position: absolute;
  width: 30px;
  height: 4px;
  bottom: 0;
  transition: 0.5s ease all;
  z-index: 1;
`;

type TabsProps = {
  position?: string;
  TabList: TabProps[];
};

function LinkTabs({ TabList, position = 'flex-start' }: TabsProps) {
  const windowWidth = useWindowWidth();
  const [isShow, setIsShow] = useState(true);
  const tabUnderLine = useRef<HTMLDivElement>(null);
  const tabWrapRef = useRef<HTMLDivElement>(null);
  const [isTabActiveIndex, setIsTabActiveIndex] = useState(0);
  const [moveToLeftValue, setMoveToLeftValue] = useState<number | null>(null);
  const [underlineWidth, setUnderlineWidth] = useState(50);
  const tabRefs: any = useRef(Array.from({ length: TabList.length }, () => createRef()));

  function handleClickTab(
    e: any,
    index: number,
    moveToLeft: number,
    underlineWidth: number
  ) {
    setIsTabActiveIndex(index);
    // setTabIndex(`${index}`);
    setMoveToLeftValue(moveToLeft);
    setUnderlineWidth(underlineWidth);

    // 다른 버튼 눌렀을 때 컴포넌트 보이기
    if (isShow && index !== isTabActiveIndex) {
      setIsShow(false);

      setTimeout(() => {
        setIsShow(true);
      }, 300);
    }
  }

  useLayoutEffect(() => {
    // 초기 탭 값 세팅
    if (tabRefs.current && tabWrapRef.current !== null) {
      tabRefs.current.map((ref: any, index: number) => {
        const currentNode = ref.current;
        const distanceTargetToLeft = currentNode.getBoundingClientRect().left;
        const distanceMenuBoxToLeft = tabWrapRef.current?.getBoundingClientRect().left;
        const startTargetLeft = distanceTargetToLeft - distanceMenuBoxToLeft!;
        TabList[index].moveToLeft = startTargetLeft;
        TabList[index].underlineWidth = ref.current.offsetWidth;

        // tab index 로컬 저장값 가져오기
        // const lastTabIndex: number = getTabIndex();
        // setIsTabActiveIndex(lastTabIndex);
        // setMoveToLeftValue(TabList[lastTabIndex].moveToLeft);
        // setUnderlineWidth(TabList[lastTabIndex].underlineWidth);
      });
    }
  }, [TabList, windowWidth]);

  return (
    <div style={{ width: '100%' }}>
      <TabWrapper ref={tabWrapRef} position={position}>
        {TabList.map((list, index) => {
          const { value, count, isCount, moveToLeft, underlineWidth, linkto } = list;
          return (
            <Link to={linkto!} key={index}>
              <TabButton
                onClick={(e) => handleClickTab(e, index, moveToLeft, underlineWidth)}
                ref={tabRefs.current[index]}
                className={`${isTabActiveIndex === index && 'tabActive'}`}
              >
                {value}
                {isCount && <CountSpan>&nbsp;{count}</CountSpan>}
              </TabButton>
            </Link>
          );
        })}

        <TabUnderLine
          ref={tabUnderLine}
          style={{
            width: underlineWidth,
            left: moveToLeftValue || 0,
            display: moveToLeftValue ? 'block' : 'none',
          }}
        />
      </TabWrapper>

      <FadeWrap show={isShow}>
        <Switch>
          {TabList.map((list, index) => {
            const { linkto, component } = list;
            return (
              <Route key={index} path={linkto!}>
                {component}
              </Route>
            );
          })}
        </Switch>
      </FadeWrap>
    </div>
  );
}

export default LinkTabs;
