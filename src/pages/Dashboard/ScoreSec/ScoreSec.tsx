import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import ScorePng from '@assets/images/dashboard/dashboard_detail4.png';
import ScoreWebp from '@assets/images/dashboard/dashboard_detail4.webp';
import Image from 'react-image-webp';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: #fffef6;

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
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

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

const ScoreSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1.5}>
          <ImageWrapper>
            <Image src={ScorePng} webp={ScoreWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <TextWrapper>
            <h4>
              ???????????? ?????? ?????? ???????????? <br /> ????????????, ???????????????.
            </h4>
            <Description>
              ?????? ?????? ????????? ?????? ?????? ????????? ?????? ?????? ???????????????. <br />
              ?????? ?????? ???????????? ?????? ????????? ????????? ??? ???????????? ????????? <br />
              ????????? ????????? ??? ????????????.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default ScoreSec;
