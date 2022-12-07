import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import CalendarPng from '@assets/images/cooperation/googleCalender.png';
import CalendarWebp from '@assets/images/cooperation/googleCalender.webp';
import Image from 'react-image-webp';
import MobileBr from '@src/pages/common/MobileBr';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 146px 16px 0 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px 0 0 0;
  }

  @media (max-width: 460px) {
    padding: 80px 16px 0 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 40px;
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
  width: 100%;
  height: 384px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 460px) {
    height: 160px;
  }
`;

const GoogleCalendarSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="slideUp" flex={1}>
          <TextWrapper>
            <h4>
              <span style={{ color: Color.PURPLE_6 }}>구글캘린더</span>에 <br />
              채용일정도 바로바로 연동해요
            </h4>
            <Description>
              채용엔 수많은 사람들과의 일정 조율이 필요합니다. <br /> 지원자들과의 약속을
              구글캘린더와 연동해 보세요.
              <br /> 서류 확인, 면접 일정 등록은 물론 <MobileBr /> 수정과 삭제까지 실시간
              반영됩니다.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="slideUp" flex={1.5} delay={0.2}>
          <ImageWrapper>
            <Image src={CalendarPng} webp={CalendarWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default GoogleCalendarSec;
