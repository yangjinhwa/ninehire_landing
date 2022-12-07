import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import DashboardSec from '@assets/images/dashboard/dashboard_detail2.png';
import DashboardWebp from '@assets/images/dashboard/dashboard_detail2.webp';
import Image from 'react-image-webp';
import MobileBr from '@src/pages/common/MobileBr';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: #eef5f7;

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
    flex-direction: column-reverse;

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

const StepSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <ImageWrapper>
            <Image src={DashboardSec} webp={DashboardWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <TextWrapper>
            <h4>
              채용엔 많은 단계가 있습니다. <br />
              단계별로 꼭 필요한 정보들만.
            </h4>
            <Description>
              각 단계별 지원자수가 몇 명인지, <MobileBr /> 단계를 넘어가는 데 얼마나
              걸리는지, <br />
              합격까지의 평균 채용기간까지. 채용 프로세스를 <br /> 전체적으로 확인하고
              피드백할 수 있어요.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default StepSec;
