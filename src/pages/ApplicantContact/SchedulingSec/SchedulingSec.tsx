import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import SchedulingPng from '@assets/images/applicantContact/scheduleForm.png';
import SchedulingWebp from '@assets/images/applicantContact/scheduleForm.webp';
import Image from 'react-image-webp';
import Color from '@src/styles/Color';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  background: #f7f5fe;

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
  max-width: 1195px;

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
  min-width: 358px;

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
  max-width: 675px;
  width: 100%;
  height: 508px;

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

const SchedulingSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1.5}>
          <ImageWrapper>
            <Image src={SchedulingPng} webp={SchedulingWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <TextWrapper>
            <h4>
              ???????????? <span style={{ color: Color.PURPLE_6 }}>????????????</span>??? <br />{' '}
              ?????? ???????????????.
            </h4>
            <Description>
              ?????????????????? ??????????????? ?????? ?????? ????????? ?????????. <br /> ??????, ?????????,
              ?????????????????? ??? ??????????????? ????????? ????????? ???????????? <br /> ????????? ??? ????????????.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default SchedulingSec;
