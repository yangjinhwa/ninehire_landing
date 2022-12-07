import React from 'react';
import styled from 'styled-components';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import MainPng from '@assets/images/employmentSystem/main.png';
import MainWebp from '@assets/images/employmentSystem/main.webp';
import MobileMainPng from '@assets/images/employmentSystem/desktop_mobile.png';
import MobileMainWebp from '@assets/images/employmentSystem/desktop_mobile.webp';
import Image from 'react-image-webp';
import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import Grid from '@src/layouts/Grid/Grid';

const Container = styled.section`
  width: 100%;
  height: 740px;
  background: linear-gradient(100.51deg, #fbf7f0 23.71%, #f9f0fb 81.08%);
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 460px) {
    height: 600px;
  }
`;

const Title = styled.h3`
  margin: 32px 0px;
  text-align: center;
  word-break: keep-all;

  @media (max-width: 768px) {
    width: 316px;
  }

  @media (max-width: 460px) {
    width: 216px;
  }
`;

const Description = styled(Body).attrs({ size: 18 })`
  text-align: center;
  width: 503px;
  word-break: keep-all;

  @media (max-width: 768px) {
    width: 475px;
    font-size: 17px;
  }

  @media (max-width: 460px) {
    width: 212px;
    font-size: 14px;
    line-height: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  max-width: 1080px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0px 4px 36px rgba(2, 0, 85, 0.15));
  }

  @media (max-width: 768px) {
    margin-top: 34px;
    height: 314px;
  }

  @media (max-width: 460px) {
    display: none;
  }
`;

const MobileImageWrapper = styled.div`
  display: none;
  width: 100%;
  margin-top: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 460px) {
    display: block;

    img {
      height: auto;
    }
  }
`;

function MainSec() {
  return (
    <Container>
      <Grid direction="column" textAlign="center">
        <OnviewAniStagger forced>
          <Body size={17} color={Color.PURPLE_6} bold>
            접수 시스템
          </Body>
          <Title>어디에서 지원하든, 공통된 지원양식으로.</Title>
          <Description>
            채용 공고마다 다른 제출 양식은, 정리가 필요한 순간 골칫덩이가 됩니다. 하나의
            지원서로 깔끔하게 해결하세요.
          </Description>
          <ImageWrapper>
            <Image src={MainPng} webp={MainWebp} />
          </ImageWrapper>
          <MobileImageWrapper>
            <Image src={MobileMainPng} webp={MobileMainWebp} />
          </MobileImageWrapper>
        </OnviewAniStagger>
      </Grid>
    </Container>
  );
}

export default MainSec;
