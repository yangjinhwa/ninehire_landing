import React from 'react';
import Image from 'react-image-webp';
import styled from 'styled-components';
import MobileMainPng from '@assets/images/employmentSystem/desktop_mobile.png';
import MobileMainWebp from '@assets/images/employmentSystem/desktop_mobile.webp';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  height: 680px;
  background: #fefcf6;
  display: flex;
  justify-content: center;
  padding: 150px 16px;

  @media (max-width: 768px) {
    height: auto;
    padding: 120px 16px;
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
    /* margin-left: 48px; */
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  max-width: 560px;
  width: 100%;
  height: 380px;
  border-radius: 12px;
  background: #fcf7e9;
  border: 1px solid #e9e3d0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    bottom: -30px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 300px;
    margin-top: 40px;

    img {
      height: 300px;
    }
  }

  @media (max-width: 460px) {
    height: 260px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Description = styled(Body).attrs({ size: 17 })`
  width: 394px;
  word-break: keep-all;
  margin-top: 40px;
  margin-bottom: 12px;

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

const Annotation = styled(Body).attrs({ size: 14, color: Color.GRAY_6 })`
  @media (max-width: 460px) {
    font-size: 12px;
    line-height: 150%;
  }
`;

const MobileSupportSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1.5}>
          <ImageWrapper>
            <Image src={MobileMainPng} webp={MobileMainWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <TextWrapper>
            <h4>
              지원자의 경험을 고려한 <br />
              <span style={{ color: Color.PURPLE_6 }}>모바일 지원</span>
            </h4>
            <Description>
              PC는 물론 모바일과 태블릿까지. <br />
              지원자가 어떤 기기에서 지원해도 문제없습니다. <br />
              어떤 환경에서도 깔끔하고 멋진 지원서를 보여드릴게요.
            </Description>
            <Annotation>*관리자 화면은 데스크톱에서 최적화 되었습니다.</Annotation>
          </TextWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default MobileSupportSec;
