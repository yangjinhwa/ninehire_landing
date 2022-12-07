import Footer from '@src/components/navigation/Footer/Footer';
import React, { memo } from 'react';
import styled from 'styled-components';
import { PaymentFunctions } from './PaymentFunctions';
import PaymentOutliine from './PaymentOutliine';
import PaymentTable from './PaymentTable';

const Container = styled.div`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    max-width: 1082px;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const TitleStyle = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
  }
`;

function PaymentInfo() {
  return (
    <>
      <Container>
        <TitleStyle>요금제별 상세 기능</TitleStyle>
        <PaymentOutliine />
        {PaymentFunctions.map((props, i) => (
          <PaymentTable key={i} {...props} />
        ))}
      </Container>
    </>
  );
}

export default memo(PaymentInfo);
