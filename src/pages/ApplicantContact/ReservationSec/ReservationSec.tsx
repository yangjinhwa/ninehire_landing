import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import ReservationPng from '@assets/images/applicantContact/reservationChat.png';
import ReservationWebp from '@assets/images/applicantContact/reservationChat.webp';
import Image from 'react-image-webp';
import MobileBr from '@src/pages/common/MobileBr';
import Icon from '@src/components/icon/Icon';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 173px 16px 109px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: ${Color.BlackBGGradient};
  @media (max-width: 768px) {
    padding: 100px 16px;
  }

  @media (max-width: 460px) {
    padding: 100px 16px 62px 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  position: relative;

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
  min-width: 408px;
  color: ${Color.WHITE};

  @media (max-width: 768px) {
    min-width: 100%;
    align-items: center;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const Description = styled(Body).attrs({ size: 17 })`
  word-break: keep-all;
  margin-top: 40px;
  color: ${Color.WHITE};

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
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 460px) {
    height: 272px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -87px;
  left: 280px;

  @media (max-width: 768px) {
    right: -125px;
    top: -60px;
  }

  @media (max-width: 460px) {
    display: none;
  }
`;

const MobileIconWrapper = styled.div`
  position: absolute;
  display: none;
  @media (max-width: 460px) {
    display: block;
    top: -73px;
    right: 43px;
  }
`;

const ReservationSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              연락 하기엔 <br />
              적절한 시간이 아닐 때, <br />
              예약기능을 이용해보세요.
            </h4>
            <Description>
              지원자 메세지를 너무 늦은 밤, <MobileBr /> 주말에 확인할 수도 있어요. <br />
              이럴 땐 바로 메세지를 보내기가 어렵죠. <br />
              적절한 시간에 메시지가 발송되도록 <MobileBr /> 예약기능을 사용해보세요.{' '}
              <br />
              원하는 날짜, 시간에 딱 보내드립니다.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1.5}>
          <ImageWrapper>
            <Image src={ReservationPng} webp={ReservationWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
        <IconWrapper>
          <Icon name="Moon140" />
        </IconWrapper>
        <MobileIconWrapper>
          <Icon name="Moon88" />
        </MobileIconWrapper>
      </Wrapper>
    </Container>
  );
};

export default ReservationSec;
