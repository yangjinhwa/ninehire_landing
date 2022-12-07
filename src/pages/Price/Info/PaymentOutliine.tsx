import { Font } from '@src/styles/typhography/Font';
import React, { memo } from 'react';
import styled from 'styled-components';

const Infos = [
  {
    target: '채용을 시작하는 기업',
    name: 'Starter',
    price: '₩0 / 기간 무제한',
    mobilePrice: '₩0',
    color: '#C96120',
  },
  {
    target: '상시 채용을 진행하는 기업',
    name: 'Growth',
    price: '₩249,900 / 월',
    mobilePrice: '₩249,900',
    color: '#4C2ED0',
  },
  {
    target: '브랜딩 채용이 필요한 기업',
    name: 'Enterprise',
    price: '₩899,900 / 월',
    mobilePrice: '₩899,900',
    color: '#166344',
  },
] as const;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 235px;
  padding-right: 24px;
  margin: 54px 0;

  @media (max-width: 768px) {
    padding-left: 134px;
    padding-right: 24px;
    margin: 0;
    margin-top: 60px;
  }
`;

const InfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TargetStyle = styled(Font).attrs(({ color }) => ({
  size: 14,
  height: 22,
  weight: 'bold',
  color,
}))`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NameStyle = styled.p<{ color: string }>`
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 22px;
    margin-bottom: 4px;
    margin-top: 0;
    color: ${({ color }) => color};
  }
`;

const PriceStyle = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #666872;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobilePriceStyle = styled.p`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
  }
`;

function PaymentOutliine() {
  return (
    <Container>
      {Infos.map((info, i) => (
        <InfoStyle key={i}>
          <TargetStyle color={info.color}>{info.target}</TargetStyle>
          <NameStyle color={info.color}>{info.name}</NameStyle>
          <PriceStyle>{info.price}</PriceStyle>
          <MobilePriceStyle>{info.mobilePrice}</MobilePriceStyle>
        </InfoStyle>
      ))}
    </Container>
  );
}

export default memo(PaymentOutliine);
