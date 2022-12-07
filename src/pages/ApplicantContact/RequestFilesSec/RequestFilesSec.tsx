import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import RequestPng from '@assets/images/applicantContact/moreInfoDownload.png';
import RequestWebp from '@assets/images/applicantContact/moreInfoDownload.webp';
import Image from 'react-image-webp';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: ${Color.PURPLE_GRAY_1};

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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;

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

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 460px) {
    height: auto;
    img {
      height: auto;
    }
  }
`;

const RequestFilesSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1.5}>
          <ImageWrapper>
            <Image src={RequestPng} webp={RequestWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <TextWrapper>
            <h4>
              필요한 <span style={{ color: Color.PURPLE_6 }}>자료</span>가 있다면 <br />
              깔끔하게 요청할 수 있어요.
            </h4>
            <Description>
              나인하이어에선 메세지만으로 자료요청이 가능해요. <br />
              지원자가 전달한 자료들은 ‘요청자료 보관함’에 차곡차곡 <br />
              쌓여 깔끔하게 정리된답니다.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default RequestFilesSec;
