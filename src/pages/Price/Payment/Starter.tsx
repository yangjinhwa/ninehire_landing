import FlexBox from '@src/components/flexbox/FlexBox';
import { Font } from '@src/styles/typhography/Font';
import React, { memo } from 'react';
import styled from 'styled-components';

export const PaymentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dddfe4;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: #ffffff;
  width: 345px;
  height: 575px;

  @media (max-width: 768px) {
    width: 100%;
    height: fit-content;
  }
`;

export const PaymentHeader = styled.div`
  width: calc(100% - 64px);
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddfe4;
`;

export const PaymentTitle = styled.p`
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 4px;
`;

export const PaymentDiscription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #666872;
`;

export const PaymentTag = styled.div`
  background: #ffffff;
  border: 1px solid #eaf1f5;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 33px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #9799a3;
  min-width: fit-content;
`;

export const PriceSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 0;
`;

export const Price = styled.p`
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
  margin-right: 8px;
`;

export const InfoTag = styled.div<{ background: string; color: string }>`
  padding: 6px 12px;
  border-radius: 21px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const PaymentBtn = styled.a`
  border-radius: 8px;
  width: calc(100% - 48px);
  height: 46px;
  min-height: 46px;
  color: #ffffff;
  background: #282a31;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
`;

export const FuncWrapper = styled.div`
  width: 100%;
  padding: 0 30px 32px 30px;
`;

export const Ball = styled.div`
  width: 6px;
  height: 6px;
  background: #666872;
  border-radius: 50%;
  margin-bottom: 2px;
`;

function Starter() {
  return (
    <PaymentWrapper>
      <PaymentHeader>
        <FlexBox direction="column" align="flex-start">
          <PaymentTitle>Starter</PaymentTitle>
          <PaymentDiscription>채용을 시작하는 기업</PaymentDiscription>
        </FlexBox>
        <PaymentTag>무료</PaymentTag>
      </PaymentHeader>
      <PriceSec>
        <FlexBox align="flex-end" style={{ height: 40 }}>
          <Price>₩0</Price>
          <Font size={17} height={22} weight={600}>
            /기간 무제한
          </Font>
        </FlexBox>
        <FlexBox style={{ marginTop: 24 }}>
          <InfoTag background="#F2F6F9" color="#5B717C" style={{ marginRight: 6 }}>
            멤버 최대 5명
          </InfoTag>
          <InfoTag background="#F2F6F9" color="#5B717C">
            지원자 최대 100명
          </InfoTag>
        </FlexBox>
      </PriceSec>
      <PaymentBtn
        id="price-starter-btn"
        target="_blank"
        rel="noreferrer"
        href="https://app.ninehire.com/login"
      >
        시작하기
      </PaymentBtn>
      <FuncWrapper>
        <FlexBox>
          <Ball />
          <Font
            color="#666872"
            size={18}
            height={24}
            weight="bold"
            style={{ marginLeft: 12 }}
          >
            Growth의 모든 기능
          </Font>
        </FlexBox>
      </FuncWrapper>
    </PaymentWrapper>
  );
}

export default memo(Starter);
