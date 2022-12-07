import React from 'react';
import styled from 'styled-components';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import Image from 'react-image-webp';
import ApplicationPng from '@assets/images/employmentSystem/customForm.png';
import ApplicationWebp from '@assets/images/employmentSystem/customForm.webp';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import MobileBr from '@src/pages/common/MobileBr';

const Container = styled.div`
  width: 100%;
  height: 680px;
  padding: 150px 16px;
  display: flex;
  justify-content: center;
  background-color: #fbfbff;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const Description = styled(Body).attrs({ size: 17 })`
  word-break: keep-all;
  margin-top: 40px;
  width: 417px;

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
  height: 380px;
  border-radius: 12px;
  background: #f3f3fd;
  border: 1px solid #dcdcfa;
  overflow: hidden;

  img {
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;

    img {
      left: 0;
    }
  }

  @media (max-width: 460px) {
    height: 260px;
  }
`;

const CustomApplicationSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              지원자에게 <br /> 더 궁금한 점이 있다면 <br />{' '}
              <span style={{ color: Color.PURPLE_6 }}>커스텀 지원서</span>
            </h4>
            <Description>
              채용에 꼭 필요한 질문, 우리 회사가 원하는 사람들을 <br />
              찾기 위한 질문. 우린 지원자에게 궁금한 게 많습니다. <br />
              커스텀 지원서로 우리에게 필요한 <MobileBr /> 질문들을 구성할 수 있습니다.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>

        <OnviewAniWrapper block direction="toLeft" flex={1.5}>
          <ImageWrapper>
            <Image src={ApplicationPng} webp={ApplicationWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default CustomApplicationSec;
