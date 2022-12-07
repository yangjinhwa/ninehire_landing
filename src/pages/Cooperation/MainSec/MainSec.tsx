import MobileBr from '@src/pages/common/MobileBr';
import Color from '@src/styles/Color';
import TabletBr from '@src/styles/TabletBr';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import Image from 'react-image-webp';
import styled from 'styled-components';
import MainPng from '@assets/images/cooperation/main.png';
import MainWebp from '@assets/images/cooperation/main.webp';
import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';

const Container = styled.section`
  width: 100%;
  height: 840px;
  background: linear-gradient(104.54deg, #fff3f6 26.78%, #f5edfc 72.07%);
  padding: 120px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 800px;
  }

  @media (max-width: 460px) {
    height: 700px;
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
  max-width: 600px;
  width: 100%;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    margin-top: 62px;
    height: 426px;
  }

  @media (max-width: 460px) {
    margin-top: 12px;
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
          평가자 협업
        </Body>
        <Title>
          채용은 중요한 일이지만, <br /> 다른 일도 많으니까요
        </Title>
        <Description>
          채용뿐 아니라 다양한 일을 하는 우리들. <TabletBr /> 적절히 에너지와 시간을
          분배해야겠죠. <br />
          채용업무에 지치지 않도록, <MobileBr /> 꼭 필요한 것들만 정리해드려요.
        </Description>
        <ImageWrapper>
          <Image src={MainPng} webp={MainWebp} />
        </ImageWrapper>
      </OnviewAniStagger>
    </Container>
  );
};

export default MainSec;
