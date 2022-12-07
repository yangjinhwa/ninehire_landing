import FlexBox from '@src/components/flexbox/FlexBox';
import { Font } from '@src/styles/typhography/Font';
import { openChannel } from '@src/utill/channel.function';
import React, { memo } from 'react';
import { PrimaryInfoTag } from './Growth';
import {
  Ball,
  FuncWrapper,
  InfoTag,
  PaymentBtn,
  PaymentDiscription,
  PaymentHeader,
  PaymentTag,
  PaymentTitle,
  PaymentWrapper,
  Price,
  PriceSec,
} from './Starter';

const funcInfo = [
  '브랜드 채용 홈페이지',
  '지원자 엑셀 import, export',
  '기능 로드맵 공유',
];

function Enterprise() {
  return (
    <PaymentWrapper>
      <PaymentHeader>
        <FlexBox direction="column" align="flex-start">
          <PaymentTitle>Enterprise</PaymentTitle>
          <PaymentDiscription>브랜딩 채용이 필요한 기업</PaymentDiscription>
        </FlexBox>
        <PaymentTag>연 결제</PaymentTag>
      </PaymentHeader>
      <PriceSec>
        <FlexBox align="flex-end" style={{ height: 40 }}>
          <Price>₩899,900~</Price>
          <Font size={17} height={22} weight={600}>
            /월
          </Font>
        </FlexBox>
        <FlexBox style={{ marginTop: 24 }}>
          <PrimaryInfoTag style={{ marginRight: 6 }}>멤버 무제한</PrimaryInfoTag>
          <PrimaryInfoTag>지원자 무제한</PrimaryInfoTag>
        </FlexBox>
      </PriceSec>
      <PaymentBtn id="price-enterprise-btn" onClick={openChannel}>
        문의하기
      </PaymentBtn>
      <FuncWrapper>
        <FlexBox style={{ marginBottom: 12 }}>
          <Ball />
          <Font
            color="#666872"
            size={18}
            height={24}
            weight="bold"
            style={{ marginLeft: 12 }}
          >
            Growth의 모든 기능 +
          </Font>
        </FlexBox>
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

export default memo(Enterprise);
