import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import FunnelPng from '@assets/images/dashboard/dashboard_detail3.png';
import FunnelWebp from '@assets/images/dashboard/dashboard_detail3.webp';
import Image from 'react-image-webp';
import TabletBr from '@src/styles/TabletBr';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: #f8f6ff;

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
  height: 380px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: auto;

    img {
      height: auto;
    }
  }
`;

const FunnelSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              퍼널 그래프를 보면 <br />
              어느 단계를 개선해야 할 지 <br />
              보이죠.
            </h4>
            <Description>
              채용 단계는 수 많은 지원자들 중 <br />
              우리에게 필요한 인재를 골라내는 과정입니다.
              <br />
              퍼널 그래프는 어떤 단계가 가장 <TabletBr /> 변별력을 높일 수 있는지
              보여드립니다.
              <br />
              채용 과정을 개선하는 것도, <TabletBr /> 좋은 인재를 만나는 방법 중
              하나니까요.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <ImageWrapper>
            <Image src={FunnelPng} webp={FunnelWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default FunnelSec;
