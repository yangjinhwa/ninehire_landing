import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import ChatPng from '@assets/images/cooperation/teamChat.png';
import ChatWebp from '@assets/images/cooperation/teamChat.webp';
import Image from 'react-image-webp';
import MobileBr from '@src/pages/common/MobileBr';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;

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
  max-width: 560px;
  width: 100%;
  height: 415px;
  background: linear-gradient(71.32deg, #e8e7f5 25.56%, #f7f5fe 68.9%);
  border: 1px solid #e9e9f0;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-left: -42px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 460px) {
    height: 300px;
  }
`;

const TeamCommentSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              ????????? ????????? ?????? <br />
              ???, <span style={{ color: Color.PURPLE_6 }}>??????</span>?????? ?????? ?????????
            </h4>
            <Description>
              ????????? ????????? ?????? ????????? ???????????????. <br />
              ??????????????? ????????? ?????????, ?????? ?????? ????????? ???????????? <br />
              ?????? ??????????????? ?????? ??? ?????????. <MobileBr /> ????????? ?????? ?????????????????????.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1.5}>
          <ImageWrapper>
            <Image src={ChatPng} webp={ChatWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default TeamCommentSec;
