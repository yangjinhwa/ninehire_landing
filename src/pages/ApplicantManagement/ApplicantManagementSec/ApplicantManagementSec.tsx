import React from 'react';
import Image from 'react-image-webp';
import styled from 'styled-components';
import ResumePng from '@assets/images/applicantManagement/applicantPage1.png';
import ResumeWebp from '@assets/images/applicantManagement/applicantPage1.webp';
import QuestionPng from '@assets/images/applicantManagement/applicantPage2.png';
import QuestionWebp from '@assets/images/applicantManagement/applicantPage2.webp';
import Body from '@src/styles/typhography/Body';
import Color from '@src/styles/Color';
import Pattern from './Pattern/Pattern';

const Container = styled.div`
  width: 100%;
  height: 1230px;
  padding: 112px 16px 0 16px;
  background: linear-gradient(180deg, #1f1c2f 0%, #33314a 100%);
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 105px 0 0 0;
  }

  @media (max-width: 460px) {
    height: 908px;
    padding: 80px 0 0 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 1080px;
  width: 100%;
  height: fit-content;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ImageWrapper1 = styled.div`
  max-width: 814px;
  width: 100%;
  height: 480px;
  z-index: 1;
  position: relative;

  img {
    background: rgba(224, 206, 255, 0.2);
    backdrop-filter: blur(7.74194px);
    border-radius: 12px;
    padding: 16px;
    box-sizing: content-box;

    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: inherit;
    margin-left: 20%;

    img {
      position: relative;

      width: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 460px) {
    padding: 12px;
    width: 508px;
    height: 300px;
    margin-left: 50%;
  }
`;

const ImageWrapper2 = styled.div`
  max-width: 841px;
  width: 100%;
  height: 497px;
  position: absolute;
  bottom: -570px;
  left: 200px;
  z-index: 1;

  img {
    background: rgba(224, 206, 255, 0.2);
    backdrop-filter: blur(7.74194px);
    border-radius: 12px;
    padding: 16px;
    box-sizing: content-box;

    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    bottom: -300px;
    left: -80px;
    width: 100%;
    height: inherit;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 460px) {
    padding: 12px;
    width: 508px;
    height: 300px;
    bottom: -240px;
    left: -100px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 40px;
    text-align: center;
    margin-left: 0;
  }
`;

const Description = styled(Body).attrs({ size: 17 })`
  word-break: keep-all;
  margin-top: 40px;
  width: 417px;
  color: ${Color.WHITE};

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 160%;
    text-align: center;
  }

  @media (max-width: 460px) {
    font-size: 14px;
    line-height: 143%;
  }
`;

const ApplicantManagementSec = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper1>
          <Image src={ResumePng} webp={ResumeWebp} />
        </ImageWrapper1>
        <TextWrapper>
          <h4 style={{ color: Color.WHITE }}>
            화면 하나에서 끝내는 <br />
            지원자 정보관리
          </h4>
          <Description>
            지원서 정보, 지원자 연락처, 평가내용, 요청자료까지 <br />
            지원자의 모든 정보가 깔끔하게 정리되어 있습니다.
          </Description>
        </TextWrapper>
        <ImageWrapper2>
          <Image src={QuestionPng} webp={QuestionWebp} />
        </ImageWrapper2>
        <Pattern />
      </Wrapper>
    </Container>
  );
};

export default ApplicantManagementSec;
