import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import Theme from '@src/styles/Theme';
import PortalModalWrapper from './ProtalModalWrapper';
import Color from '@src/styles/Color';

const ModalOverlay = styled.div<{ visible: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: 0.2s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const ModalContent = styled.div<{ visible: boolean; padding?: string }>`
  max-width: 80%;
  min-width: 450px;
  max-height: 96%;
  overflow: scroll;
  padding: 40px;
  margin: 0 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: ${Theme.shadow.mdoal_shadow};
  text-align: center;
  color: ${Color.GRAY_8};
  transition: 0.3s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => `translateY(${visible ? '0%' : '-15%'})`};

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: inherit;
    width: 100%;
  }

  @media (max-width: 420px) {
    padding: 30px;
  }
`;

const fadeVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  enter: {
    opacity: 0,
    y: '15%',
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 1,
    y: '-15%',
  },
};

interface ModalWrapperProps {
  children: ReactElement;
  outsideClick: any;
  show: boolean;
}

const spring = {
  type: 'spring',
  duration: 0.4,
  bounce: 0.3,
  delay: 0.1,
};

type modalWrapperProps = {
  children: JSX.Element[] | JSX.Element | null;
  outsideClick: any;
  contentStyle?: any;
  key?: string;
};

function ModalWrapper({ children, contentStyle, key, outsideClick }: modalWrapperProps) {
  const [visible, setVisible] = useState(false);
  function handleModalOutsideClick() {
    if (outsideClick) {
      outsideClick();
    }
  }

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <PortalModalWrapper>
      <ModalOverlay visible={visible} key={key} onClick={handleModalOutsideClick}>
        <ModalContent
          style={contentStyle}
          visible={visible}
          key={key}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </ModalContent>
      </ModalOverlay>
    </PortalModalWrapper>
  );
}

export default ModalWrapper;
