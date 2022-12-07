import React, { ReactElement, forwardRef, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useOffsetTop } from '@src/hooks/getOffsetTop.function';
import { navMenuList } from '@src/routes/navMenuList';
import Color from '@src/styles/Color';

const ContainerWrap = styled.section<{
  bgColor?: string;
}>`
  padding: 100px 0;
  gap: 32px;
  background: ${({ bgColor }) => (bgColor ? bgColor : Color.WHITE)};
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 460px) {
    padding: 60px 0;
  }
`;

interface ContainerProps {
  children: ReactElement | undefined;
  order: number;
  bgColor?: string;
}

function SaveScrollTopContainer({ children, order, bgColor }: ContainerProps) {
  const [containerRef, offsetTop] = useOffsetTop();

  function handleContainerScrollTop() {
    const subMenu = navMenuList[0].subMenu; // 기능 리스트
    subMenu[order].scrollTop = offsetTop - 60;
  }

  useLayoutEffect(() => {
    handleContainerScrollTop();
  }, [offsetTop]);

  return children ? (
    <ContainerWrap ref={containerRef} bgColor={bgColor}>
      {children}
    </ContainerWrap>
  ) : null;
}

export default SaveScrollTopContainer;
