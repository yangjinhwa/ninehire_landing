import MobileBr from '@src/pages/common/MobileBr';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import AlarmPng from '@assets/images/applicantContact/alertCard.png';
import AlarmWebp from '@assets/images/applicantContact/alertCard.webp';
import Image from 'react-image-webp';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px 16px;
  }

  @media (max-width: 460px) {
    padding: 80px 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;

  > * + * {
    margin-left: 48px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    > * + * {
      margin-left: 0;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 455px;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 40px;
    text-align: center;
    min-width: 100%;
  }
`;

const Description = styled(Body).attrs({ size: 17 })`
  word-break: keep-all;
  margin-top: 40px;

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 160%;
    text-align: center;
  }

  @media (max-width: 460px) {
    font-size: 14px;
    line-height: 143%;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  max-width: 560px;
  width: 100%;
  height: 430px;
  background: linear-gradient(71.32deg, #fbf5f5 25.56%, #f7f5fe 68.9%);
  border: 1px solid ${Color.PURPLE_GRAY_3};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 460px) {
    height: 295px;

    img {
      height: auto;
    }
  }
`;

const ReminderSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              앗! 오늘 면접이었는데! <br /> 놓치지 않도록 확실한{` `}
              <span style={{ color: Color.PURPLE_6 }}>리마인드</span>
            </h4>
            <Description>
              매일매일 바쁜 우리. 어느새 다가온 면접 일정. <MobileBr /> 깜박하면 큰일
              나겠죠. <br /> 비서처럼 꼼꼼히 챙겨주는 <MobileBr /> 리마인드 기능으로
              실수를 줄입니다.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1.5}>
          <ImageWrapper>
            <Image src={AlarmPng} webp={AlarmWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default ReminderSec;
