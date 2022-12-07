import MobileBr from '@src/pages/common/MobileBr';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import Image from 'react-image-webp';
import styled from 'styled-components';
import ChatPng from '@assets/images/applicantContact/chat-mobile.png';
import ChatWebp from '@assets/images/applicantContact/chat-mobile.webp';
import TabletBr from '@src/styles/TabletBr';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  height: 870px;
  padding: 240px 16px 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 1000px;
    padding: 100px 16px;
  }

  @media (max-width: 460px) {
    height: 747px;
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
  min-width: 450px;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 40px;
    text-align: center;
    min-width: inherit;
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
  width: 100%;
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0px 12px 28px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 768px) {
    position: relative;
    height: 600px;
    margin-top: 40px;

    img {
      position: absolute;
      bottom: 0;
    }
  }

  @media (max-width: 460px) {
    height: 400px;
  }
`;

const ApplicantMessageSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              최고의 <br />
              커뮤니케이션 공간, <br />
              <span style={{ color: Color.PURPLE_6 }}>메시지창</span>
            </h4>
            <Description>
              웹에서 오픈하는 메시지 창으로 어떤 곳에서든 <br /> 어느 기기를 쓰든 편하게
              답변할 수 있습니다. <br /> 지원자는 메일과 카카오 알림톡을 통해 <TabletBr />
              메시지창을 확인할 수 있어요. <br /> 물론, 지원자는 나인하이어에 <MobileBr />
              가입하지 않아도 사용 가능해요.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1.5}>
          <ImageWrapper>
            <Image src={ChatPng} webp={ChatWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default ApplicantMessageSec;
