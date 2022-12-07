import React from 'react';
import styled from 'styled-components';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import Image from 'react-image-webp';
import ApplicationFormPng from '@assets/images/employmentSystem/ApplicationForm.png';
import ApplicationFormWebp from '@assets/images/employmentSystem/ApplicationForm.webp';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import MobileBr from '@src/pages/common/MobileBr';

const Container = styled.div`
  width: 100%;
  padding: 400px 16px 80px 16px;
  display: flex;
  justify-content: center;

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
  border: 1px solid #dcdcfa;
  overflow: hidden;
  padding-top: 30px;

  img {
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    padding: 0 40px;

    img {
      left: 0;
    }
  }

  @media (max-width: 460px) {
    height: 300px;
    padding: 0;
  }
`;

function ApplicationSec() {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1.5}>
          <ImageWrapper>
            <Image src={ApplicationFormPng} webp={ApplicationFormWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>

        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <TextWrapper>
            <h4>
              뚝딱! 만드는 <br />
              <span style={{ color: Color.PURPLE_6 }}> 깔끔한 채용 공고</span>
            </h4>
            <Description>
              우리 회사의 핵심 가치를 지원자에게 전달해 보세요. <br />
              좋은 채용 경험의 시작은, 기본에 충실한 공고부터니까요. <br />
              모집하는 직군에 대한 소개, 회사, 또는 팀원에 대한 안내를 <br />
              지원서에 포함할 수 있습니다.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
}

export default ApplicationSec;
