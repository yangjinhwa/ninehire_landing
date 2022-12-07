import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import LinkPng from '@assets/images/employmentSystem/linkExample.png';
import LinkWebp from '@assets/images/employmentSystem/linkExample.webp';
import Image from 'react-image-webp';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  height: 770px;
  padding: 150px 16px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: 872px;
    padding: 120px 16px;
  }

  @media (max-width: 460px) {
    height: 778px;
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
  }
`;

const Description = styled(Body).attrs({ size: 17 })`
  width: 394px;
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
  max-width: 560px;
  width: 100%;
  height: 380px;
  background: #f8f8fa;
  border-radius: 12px;
  border: 1px solid #e0e0e9;
  overflow: hidden;

  img {
    margin-top: -50px;
    width: 100%;
    height: 400px;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

function LinkSec() {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              '지원하기' 버튼에 <br /> <span style={{ color: Color.PURPLE_6 }}>링크</span>
              만 넣으면 끝.
            </h4>
            <Description>
              기존 채용 공고나 채용 사이트의 지원하기 버튼에 <br />
              ‘지원서 페이지 링크’ 만 넣어주세요. <br />
              지원자는 링크를 통해 곧바로 <br />
              우리 회사 지원 폼을 볼 수 있어요.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1.5}>
          <ImageWrapper>
            <Image src={LinkPng} webp={LinkWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
}

export default LinkSec;
