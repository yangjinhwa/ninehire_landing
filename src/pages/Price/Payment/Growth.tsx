import FlexBox from '@src/components/flexbox/FlexBox';
import { PlanGuide } from '@src/components/svg/PlanGuide';
import Color from '@src/styles/Color';
import { Font } from '@src/styles/typhography/Font';
import React, { memo, useState } from 'react';
import styled from 'styled-components';
import {
  Ball,
  FuncWrapper,
  InfoTag,
  PaymentBtn,
  PaymentDiscription,
  PaymentHeader,
  PaymentTag,
  PaymentWrapper,
  Price,
  PriceSec,
} from './Starter';

const SVGWrapper = styled.div`
  position: absolute;
  top: -110px;
  right: -100px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PaymentTitle = styled.p`
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 4px;
  background: ${Color.PurpleGradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const PrimaryInfoTag = styled.div`
  padding: 6px 12px;
  border-radius: 21px;
  background-color: ${Color.PURPLE_1};
  color: ${Color.PURPLE_6};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

const funcInfo = [
  '채용 통계 대시보드',
  '지원자와 실시간 메시징',
  '지원서 접수 페이지',
  '평가자 협업',
  '슬랙/구글캘린더 연동',
  '카카오 알림톡 / 이메일 알림',
  '알림톡 맞춤 브랜딩',
  '인재풀',
];

function Growth() {
  return (
    <PaymentWrapper
      style={{
        background: `linear-gradient(#ffffff, #ffffff) padding-box, ${Color.PurpleGradient} border-box`,
        border: '2px solid transparent',
      }}
    >
      <SVGWrapper>
        <PlanGuide />
      </SVGWrapper>
      <PaymentHeader>
        <FlexBox direction="column" align="flex-start">
          <PaymentTitle>Growth</PaymentTitle>
          <PaymentDiscription>상시 채용을 진행하는 기업</PaymentDiscription>
        </FlexBox>
        <PaymentTag>연 결제</PaymentTag>
      </PaymentHeader>
      <PriceSec>
        <FlexBox align="flex-end" style={{ height: 40 }}>
          <Price>₩249,900</Price>
          <Font size={17} height={22} weight={600}>
            / 월
          </Font>
        </FlexBox>
        <FlexBox style={{ marginTop: 24 }}>
          <PrimaryInfoTag style={{ marginRight: 6 }}>멤버 무제한</PrimaryInfoTag>
          <PrimaryInfoTag>지원자 무제한</PrimaryInfoTag>
        </FlexBox>
      </PriceSec>
      <PaymentBtn
        id="price-growth-btn"
        target="_blank"
        rel="noreferrer"
        href="https://app.ninehire.com/login"
        style={{
          background: Color.PurpleGradient,
          color: '#ffffff',
        }}
      >
        요금제 시작하기
      </PaymentBtn>
      <FuncWrapper>
        {funcInfo.map((content, i) => (
          <FlexBox key={i} style={{ marginBottom: 6 }}>
            <Ball />
            <Font color="#666872" size={15} height={22} style={{ marginLeft: 12 }}>
              {content}
            </Font>
          </FlexBox>
        ))}
      </FuncWrapper>
    </PaymentWrapper>
  );
}

export default memo(Growth);
