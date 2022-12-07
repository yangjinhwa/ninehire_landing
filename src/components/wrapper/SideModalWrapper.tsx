import Color from '@src/styles/Color';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import styled from 'styled-components';

const ModalOverlay = styled.div<{ visible: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
  transition: 0.3s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const ModalContent = styled.div<{ visible: boolean }>`
  width: 80%;
  /* safari vh문제 해결 */
  height: calc(100vh - calc(100vh - 100%));
  overflow: scroll;
  text-align: left;
  background-color: ${Color.WHITE};
  transition: 0.3s;
  transform: ${({ visible }) => `translateX(${visible ? '0%' : '15%'})`};
  padding-top: 0;
`;

const fadeVariants = {
  visible: { opacity: 1, duration: 0.1 },
  hidden: { opacity: 0, duration: 1 },
};

const contentsVariants = {
  enter: {
    opacity: 0,
    x: '15%',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '15%',
  },
};

const spring = {
  type: 'spring',
  duration: 0.2,
  bounce: 0,
  delay: 0.2,
};

type SideModalWrapperProps = {
  show: boolean;
  key?: string | number;
  outsideClick: () => void;
  children: JSX.Element | JSX.Element[];
};

function SideModalWrapper({
  show,
  key = 'custom',
  outsideClick,
  children,
}: SideModalWrapperProps) {
  const [visible, setVisible] = useState(false);

  function handleModalOutsideClick() {
    if (outsideClick) {
      outsideClick();
    }
  }

  useLayoutEffect(() => {
    //밖 스크롤 막기 - 테스트 해봐야 함
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    show && (
      <ModalOverlay visible={visible} key={key} onClick={handleModalOutsideClick}>
        <ModalContent visible={visible} onClick={(e) => e.stopPropagation()}>
          <Scrollbars autoHide>{children}</Scrollbars>
        </ModalContent>
      </ModalOverlay>
    )
  );
}

export default SideModalWrapper;
