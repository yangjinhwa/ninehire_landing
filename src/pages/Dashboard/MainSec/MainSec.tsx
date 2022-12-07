import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import Image from 'react-image-webp';
import styled from 'styled-components';
import MainPng from '@assets/images/dashboard/main.png';
import MainWebp from '@assets/images/dashboard/main.webp';
import TabletBr from '@src/styles/TabletBr';
import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';

const Container = styled.section`
  width: 100%;
  height: 740px;
  background: linear-gradient(75.27deg, #eef5f7 22.83%, #f9f8ef 72.59%);
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
  max-width: 972px;
  width: 100%;
  height: 530px;
  margin-top: 37px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 460px) {
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
          대시보드/리포트
        </Body>
        <Title>
          어디에서 가장 좋은 <TabletBr /> 지원자를 만날 수 있을지
        </Title>
        <Description>
          채용 과정은 계속 발전해야 합니다. <br /> 채용 담당자에게 꼭 필요한 데이터를
          직관적인 대시보드로 전달합니다.
        </Description>
        <ImageWrapper>
          <Image src={MainPng} webp={MainWebp} />
        </ImageWrapper>
      </OnviewAniStagger>
    </Container>
  );
};

export default MainSec;
