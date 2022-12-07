import React, { memo } from 'react';
import styled from 'styled-components';
import Enterprise from './Enterprise';
import Growth from './Growth';
import Starter from './Starter';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import Header from './Header';

const Container = styled.div`
  padding-top: 60px;
  background: linear-gradient(359.36deg, rgba(232, 231, 245, 0) 0.53%, #f2f0fb 99.42%);
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 630px);
    top: 140px;
    background: linear-gradient(
      141.53deg,
      #0500ff 15.65%,
      rgba(243, 171, 255, 0.11) 84.54%
    );
    opacity: 0.1;
    width: 500px;
    height: 500px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    &::before {
      left: calc(50% - 220px);
      top: 60px;
      width: 240px;
      height: 240px;
    }
  }
`;

const PaymentSec = styled.div`
  padding: 88px 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom: 1px solid #dddfe4;
  > * + * {
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 36px 24px 95px 24px;
    > * + * {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

function PaymentMain() {
  return (
    <Container>
      {/* <BetaHeader /> */}
      <Header />
      <OnviewAniWrapper direction="slideUp" forced delay={0.4}>
        <PaymentSec>
          <Starter />
          <Growth />
          <Enterprise />
        </PaymentSec>
      </OnviewAniWrapper>
    </Container>
  );
}

export default memo(PaymentMain);
