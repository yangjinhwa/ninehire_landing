import React from 'react';
import Image from 'react-image-webp';
import styled from 'styled-components';

import MobileBr from '@src/pages/common/MobileBr';
import Color from '@src/styles/Color';
import TabletBr from '@src/styles/TabletBr';
import Body from '@src/styles/typhography/Body';
import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';
import ChatPng from '@assets/images/applicantContact/main.png';
import ChatWebp from '@assets/images/applicantContact/main.webp';
import ChatMPng from '@assets/images/applicantContact/main-mobile.png';
import ChatMWebp from '@assets/images/applicantContact/main-mobile.webp';

const Container = styled.section`
  width: 100%;
  height: 740px;
  background: linear-gradient(71.32deg, #efe7f5 25.56%, #eff8f9 68.9%);
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

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileImageWrapper = styled.div`
  width: 100%;
  display: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: block;
    margin-top: 24px;

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
          지원자 연락
        </Body>
        <Title>
          지원자와의 커뮤니케이션은 <br /> 빠르고 정확하게
        </Title>
        <Description>
          이제 이메일, 전화가 아닌 <MobileBr /> 채팅형 메시지로 연락해 보세요. <br />
          필요한 사항은 바로바로 소통하고, <TabletBr /> 자주 쓰는 문구는 템플릿으로 만들어
          클릭 한 번으로!
        </Description>
        <ImageWrapper>
          <Image src={ChatPng} webp={ChatWebp} />
        </ImageWrapper>
        <MobileImageWrapper>
          <Image src={ChatMPng} webp={ChatMWebp} />
        </MobileImageWrapper>
      </OnviewAniStagger>
    </Container>
  );
};

export default MainSec;
