import { useOffsetTop } from '@src/hooks/getOffsetTop.function';

import useWindowWidth from '@src/hooks/useWindowWidth';
import Theme from '@src/styles/Theme';
import React, { useRef, useEffect, useCallback, useState, Children } from 'react';
import styled, { css } from 'styled-components';

export const onviewAniDirectionMap = {
  slideUp: css`
    @keyframes slideUp {
      0% {
        transform: translateY(40px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  slideDown: css`
    @keyframes slideDown {
      0% {
        transform: translateY(-40px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  toRight: css`
    @keyframes toRight {
      0% {
        transform: translateX(-30px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `,
  toLeft: css`
    @keyframes toLeft {
      0% {
        transform: translateX(30px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `,
};

const OnViewWrapper = styled.div<{
  isOnView: boolean;
  delay?: number;
  direction?: keyof typeof onviewAniDirectionMap;
  flex?: number;
  block?: boolean;
  align?: string;
}>`
  opacity: 0;
  transition: transform 2s, opacity 1s;
  animation: ${({ isOnView, direction, delay }) =>
    isOnView && direction
      ? `${direction} 1s ${Theme.animation.content_cubic_bezier} ${delay}s both`
      : `hide 1s ease ${delay}s both`};
  flex: ${({ flex }) => flex && flex};
  ${({ direction }) => direction && onviewAniDirectionMap[direction]}
  ${({ block }) => block && 'width: 100%;'}

  @keyframes hide {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(30px);
      opacity: 0;
    }
  }
`;

type OnViewAniWrapperProps = {
  children: JSX.Element | JSX.Element[];
  delay?: number | undefined;
  direction?: keyof typeof onviewAniDirectionMap;
  forced?: boolean;
  flex?: number;
  block?: boolean;
};

function OnviewAniWrapper({
  children,
  delay = 0,
  direction = 'slideUp',
  forced,
  flex,
  block,
}: OnViewAniWrapperProps) {
  const windowWidth = useWindowWidth();
  const [isOnView, setIsOnView] = useState(false);
  const [sectionRef, offsetTop] = useOffsetTop();

  const handleScroll = useCallback(() => {
    const viewPortHeight = window.innerHeight;
    const windowBottomPosition = viewPortHeight + document.body.scrollTop; // + scrollTop
    let elementBottomPosition;
    // elementBottomPosition = offsetTop + 100; // + 조정값: number

    if (offsetTop && windowWidth < 768) {
      elementBottomPosition = offsetTop + 40; // 모바일
    } else {
      elementBottomPosition = offsetTop + 100; // 데스크톱
    }
    if (elementBottomPosition < windowBottomPosition) {
      setIsOnView(true);
    }
  }, [windowWidth, offsetTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowWidth, offsetTop]);

  useEffect(() => {
    // 최초 뷰 랜딩시 강제 event 발생시키기
    if (forced) {
      handleScroll();
    }
  }, []);

  return (
    <OnViewWrapper
      ref={sectionRef}
      isOnView={isOnView}
      delay={delay}
      direction={direction}
      flex={flex}
      block={block}
    >
      {children && Children.map(children, (child) => child)}
    </OnViewWrapper>
  );
}

export default OnviewAniWrapper;
