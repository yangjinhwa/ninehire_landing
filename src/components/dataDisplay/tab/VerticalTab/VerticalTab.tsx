import React, { useRef, useEffect, useState, useCallback, createRef } from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { usePrevious } from '@src/hooks/usePrevious';
import VerticalTabBtns from './VerticalTabBtns';
import { isChrome, isIE } from 'react-device-detect';

const App = styled.div<{ tabBtnWidth?: number }>`
  font-family: sans-serif;
  text-align: center;
  display: grid;
  grid-template-columns: ${({ tabBtnWidth }) => `${tabBtnWidth}px` || 'auto'} auto;
  grid-template-areas: 'buttons content';
  height: 100%;
`;

// const Contents = styled(motion.div)`
//   grid-area: content;
//   width: 100%;
//   height: 100%;
//   padding: 0 24px;
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
  order?: number;
  value: string;
  subValue?: string;
  count?: number | null;
  contents: any;
  moveToLeft?: number;
  underlineWidth?: number;
  linkto?: string;
}

type Props = {
  tabList: TabType[];
  swipe?: boolean;
  tabBtnWidth?: number | undefined;
};

function VerticalTab({ tabList, swipe = true, tabBtnWidth }: Props) {
  const [currentOrder, setCurrentOrder] = useState<number>(0);
  const previous = usePrevious(currentOrder);
  const dir = currentOrder < (previous || 0);

  const sliderRef: any = useRef(
    Array.from({ length: tabList.length }, () => createRef<HTMLDivElement>())
  );

  return (
    <>
      <App tabBtnWidth={tabBtnWidth}>
        <VerticalTabBtns
          tabList={tabList}
          currentOrder={currentOrder}
          setCurrent={setCurrentOrder}
          width={tabBtnWidth}
        />

        {/* <AnimatePresence custom={currentOrder}> */}
        {/* <Contents
              ref={sliderRef.current[currentOrder]}
              key={currentOrder}
              custom={currentOrder}
              initial="enter"
              animate="in"
              exit="exit"
              transition={spring}
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
        {/* </Contents>
          </AnimatePresence> */}
      </App>
    </>
  );
}

export default React.memo(VerticalTab);
