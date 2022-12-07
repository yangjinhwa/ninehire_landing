import React from 'react';
import Image from 'react-image-webp';
import styled from 'styled-components';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import TalentPoolPng from '@assets/images/applicantManagement/multipleUserTable.png';
import TalentPoolWebp from '@assets/images/applicantManagement/multipleUserTable.webp';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  background: #f4f9ff;

  @media (max-width: 768px) {
    padding: 40px 16px 100px 16px;
  }

  @media (max-width: 460px) {
    padding: 40px 16px 80px 16px;
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
  width: 282px;

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
  background: #e8eff9;
  border: 1px solid ${Color.PURPLE_GRAY_4};
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    img {
      width: 560px;
    }
  }

  @media (max-width: 460px) {
    max-width: 100%;
    height: 260px;

    img {
      width: 400px;
      left: 20px;
    }
  }
`;

const DupApplicantSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1.5}>
          <ImageWrapper>
            <Image src={TalentPoolPng} webp={TalentPoolWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <TextWrapper>
            <h4>
              <span style={{ color: Color.PURPLE_6 }}>중복지원</span>도 <br />
              쉽게 확인하세요
            </h4>
            <Description>
              지원자가 우리 회사에 중복지원한 경우에도 <br />
              빠르게 파악할 수 있게 알려드립니다.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default DupApplicantSec;
