import React, { useRef, useState, useCallback, createRef } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import TabBtns from './TabBtns';
import { usePrevious } from '@src/hooks/usePrevious';

const App = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    'buttons'
    'content';
`;

// const Contents = styled(motion.div)`
//   grid-area: content;
//   width: 100%;
//   height: 100%;
// `;

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 50,
  duration: 0.4,
  originX: 0.5,
};

export interface TabType {
  id?: string | number;
  order: number;
  value: string;
  count?: number | null;
  contents: any;
  moveToLeft?: number;
  underlineWidth?: number;
  linkto?: string;
}

type Props = {
  tabList: TabType[];
  swipe?: boolean;
};

function CustomTabs({ tabList, swipe = true }: Props) {
  const [currentOrder, setCurrentOrder] = useState<number>(0);
  const previous = usePrevious(currentOrder);
  const dir = currentOrder < (previous || 0);

  // 터치 반응에 필요한
  // const sliderRef = useRef<HTMLDivElement>(null);
  const sliderRef: any = useRef(
    Array.from({ length: tabList.length }, () => createRef<HTMLDivElement>())
  );

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [touchX, setTouchX] = useState(0);
  const [walk, setWalk] = useState(0);

  //터치에도 반응하는 슬라이드
  const handleSlideDown = useCallback(
    (e) => {
      if (swipe) {
        setIsMouseDown(true);
        e.preventDefault();

        const pageX = e.pageX || e.changedTouches[0].pageX;
        if (sliderRef.current) {
          setTouchX(pageX - sliderRef.current[currentOrder].current.offsetLeft);
        }
      }
    },
    [currentOrder]
  );

  const handleSlideMove = useCallback(
    (e) => {
      if (swipe && isMouseDown) {
        const pageX = e.pageX || e.changedTouches[0].pageX;
        const startX = pageX - sliderRef.current[currentOrder].current.offsetLeft;
        const walk = Math.sign(startX - touchX);
        // 디버깅
        // console.log({ touchX, startX, walk });
        setWalk(walk);
      }
    },
    [isMouseDown, currentOrder, touchX]
  );

  const handleSlideMouseLeave = useCallback((e) => {
    if (swipe) {
      setIsMouseDown(false);
    }
  }, []);

  const handleSlideMouseUp = useCallback(
    (e) => {
      if (swipe) {
        setIsMouseDown(false);
        if (walk < 0) {
          // console.log('nextSlide', walk);
          setCurrentOrder((prev) => (prev === tabList.length - 1 ? 0 : prev - walk));
        }
        if (walk > 0) {
          // console.log('prevSlide', walk);
          setCurrentOrder((prev) => (prev === 0 ? tabList.length - 1 : prev - walk));
        }
      }
    },
    [walk, currentOrder]
  );
  //터치에도 반응하는 슬라이드 end

  return (
    <>
      <App>
        <TabBtns
          tabList={tabList}
          currentOrder={currentOrder}
          setCurrent={setCurrentOrder}
        />

        {/* <AnimatePresence custom={currentOrder}> */}
        {/* <Contents
              ref={sliderRef.current[currentOrder]}
              onMouseDown={handleSlideDown}
              onMouseMove={handleSlideMove}
              onMouseUp={handleSlideMouseUp}
              onMouseLeave={handleSlideMouseLeave}
              // 모바일
              onTouchStart={handleSlideDown}
              onTouchMove={handleSlideMove}
              onTouchEnd={handleSlideMouseUp}
              // 모바일 end
              key={currentOrder}
              custom={currentOrder}
              initial="enter"
              animate="in"
              exit="exit"
              transition={spring}
              whileDrag={{ opacity: 0.5 }}
              drag={swipe ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              variants={{
                enter: { x: dir ? -100 : 100, opacity: 0, scale: 0.9 },
                in: { x: 0, opacity: 1, scale: 1 },
                exit: (_current) => ({
                  x: _current > currentOrder ? -100 : 100,
                  opacity: 0,
                  scale: 0.9,
                }),
              }}
            > */}
        <>{tabList[currentOrder].contents}</>
        {/* </Contents> */}
        {/* </AnimatePresence> */}
      </App>
    </>
  );
}

export default CustomTabs;
