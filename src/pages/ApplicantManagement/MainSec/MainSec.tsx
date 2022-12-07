import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import Image from 'react-image-webp';
import styled from 'styled-components';
import ChatPng from '@assets/images/applicantManagement/chat-desktop.png';
import ChatWebp from '@assets/images/applicantManagement/chat-desktop.webp';
import MobileBr from '@src/pages/common/MobileBr';
import TabletBr from '@src/styles/TabletBr';
import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';

const Container = styled.section`
  width: 100%;
  height: 740px;
  background: linear-gradient(76.25deg, #eeedfd 19.5%, #eff3fb 79.79%);
  padding: 120px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    height: 800px;
  }

  @media (max-width: 460px) {
    height: 600px;
  }
`;

const Title = styled.h3`
  margin: 32px 0px;
  text-align: center;
`;

const Description = styled(Body).attrs({ size: 18 })`
  text-align: center;
  width: 600px;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 460px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  max-width: 1080px;
  margin-top: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    max-width: 100%;
    img {
      height: auto;
    }
  }
`;

const MainSec = () => {
  return (
    <Container>
      <OnviewAniStagger forced>
        <Body size={17} color={Color.PURPLE_6} bold>
          지원자 관리
        </Body>
        <Title>지원자 관리, 쉽지만 빈틈없게</Title>
        <Description>
          복잡한 관리 절차는 실수를 만들죠. <TabletBr /> 힘들게 데려온 지원자를 놓칠 수도
          있습니다. <br /> 접수된 지원자를 손쉽게 확인하고 <MobileBr /> 빈틈없이
          관리하세요!
        </Description>
        <ImageWrapper>
          <Image src={ChatPng} webp={ChatWebp} />
        </ImageWrapper>
      </OnviewAniStagger>
    </Container>
  );
};

export default MainSec;
