import React from 'react';
import styled from 'styled-components';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import Grid from '@src/layouts/Grid/Grid';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import ChatDesktopWebp from '@assets/images/Home/communication/Chat-desktop.webp';
import ChatDesktopPng from '@assets/images/Home/communication/Chat-desktop.png';
import ChatMobileWebp from '@assets/images/Home/communication/Chat-mobile.png';
import ChatMobilePng from '@assets/images/Home/communication/Chat-mobile.png';
import useFlexibleHeight from '@src/hooks/useFlexibleHeight';
import MaskTitle from '@src/components/dataDisplay/title/MaskTitle';
import Image from 'react-image-webp';
import DotPattern from '@src/pages/common/DotPattern';
import SectionContainer from '@src/pages/common/SectionContainer';

const ImgSec = styled.div`
  margin: 60px 0 100px;
  width: 1200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainImgWrap = styled.div`
  border-radius: 8px;
  position: relative;
  display: flex;

  .desktop {
    height: 570px;
    object-fit: contain;
  }

  .comment1 {
    top: -80px;
    left: calc(50% - 365px);
  }
  .comment2 {
    bottom: 20px;
    left: calc(50% - 380px);
  }

  @media (max-width: 768px) {
    .desktop {
      width: 100%;
      height: 100%;
    }

    .comment1 {
      top: -60px;
      left: calc(50% - 260px);
    }
    .comment2 {
      bottom: 30px;
      left: calc(50% - 300px);
    }
  }

  @media (max-width: 460px) {
    .comment1 {
      top: -60px;
      left: calc(50% - 180px);
    }
    .comment2 {
      bottom: 0;
      left: calc(50% - 260px);
    }
  }
`;

const MobileImgWrap = styled.div`
  position: absolute;
  top: 100px;
  right: 0px;

  .mobile {
    height: 600px;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: -27px 35px 35px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .mobile {
      height: 400px;
    }
  }

  @media (max-width: 460px) {
    top: 40px;

    .mobile {
      height: 260px;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
    margin-left: 0;
    text-align: center;
    align-items: center;
  }
`;

const Comment = styled.div`
  color: ${Color.PURPLE_6};
  font-weight: 800;
  position: absolute;
  line-height: 1.2;

  .arrow1 {
    top: 0;
    left: 134px;
  }
  .arrow2 {
    top: -66px;
    left: 88px;
  }

  @media (max-width: 460px) {
    font-size: 13px;

    .arrow1 {
      top: 0;
      left: 110px;
    }
    .arrow2 {
      top: -66px;
      left: 88px;
    }
  }
`;

const CommentArrowWrap = styled.svg`
  position: absolute;
`;

const CommentArrow1 = () => {
  return (
    <CommentArrowWrap width="89" height="62" viewBox="0 0 89 62" className="arrow1">
      <path
        d="M1.53955 8.01567C13.2394 3.33609 39.7278 -3.21533 52.0825 8.01567C67.5259 22.0544 63.3144 38.9019 52.0825 40.3059C40.8506 41.7099 39.5881 28.0796 47.9055 22.9594C51.6691 20.6425 71.4932 14.2945 77.2698 50.8795"
        stroke={Color.PURPLE_6}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 6"
        fill="none"
      />
      <path
        d="M80.4244 57.5562C80.1684 58.1475 79.4282 58.3458 78.9108 57.9618L71.0683 52.1406C70.3966 51.642 70.5975 50.5882 71.4055 50.3717L83.1292 47.2304C83.9372 47.0139 84.6381 47.826 84.3057 48.5937L80.4244 57.5562Z"
        fill={Color.PURPLE_6}
      />
    </CommentArrowWrap>
  );
};

const CommentArrow2 = () => {
  return (
    <CommentArrowWrap width="92" height="65" viewBox="0 0 92 65" className="arrow2">
      <path
        d="M1.35352 58.4141C5.22822 43.617 16.0758 31.6813 30.7977 28.9694C51.3231 25.1883 61.5921 33.1622 62.1792 44.4663C62.7662 55.7703 44.7451 55.1819 44.7451 44.4663C44.7451 38.2675 43.0392 20.624 79.9464 17.5115"
        stroke={Color.PURPLE_6}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 6"
        fill="none"
      />
      <path
        d="M86.834 14.8485C87.4051 15.1467 87.5494 15.8993 87.1289 16.3875L80.7552 23.788C80.2093 24.4218 79.1728 24.1451 79.0153 23.3236L76.7311 11.4032C76.5737 10.5816 77.4345 9.94141 78.176 10.3285L86.834 14.8485Z"
        fill={Color.PURPLE_6}
      />
    </CommentArrowWrap>
  );
};

function CommunicationSec() {
  const [ImgTest, flexibleHeight] = useFlexibleHeight();

  const dotPatternStyle1 = {
    position: 'absolute',
    top: -80,
    right: -20,
  } as const;

  const dotPatternStyle2 = {
    position: 'absolute',
    bottom: -100,
    left: -40,
    transform: 'rotate(90deg)',
  } as const;

  return (
    <SectionContainer bgColor={Color.GrayGradient}>
      <Grid direction="column" textAlign="center">
        <OnviewAniWrapper block direction="slideDown">
          <Contents>
            <MaskTitle color={Color.BlackPurpleGreenGradient}>
              이젠 연락이 힘들지 않아요.
            </MaskTitle>
            <Body size={17}>
              일정바꾸기, 추가자료 요청, 지원, 합격통보까지 <br />
              부드럽고 편안하게 흘러가는 커뮤니케이션
            </Body>
          </Contents>
        </OnviewAniWrapper>
        <OnviewAniWrapper direction="slideUp">
          <ImgSec>
            <MainImgWrap>
              <DotPattern style={dotPatternStyle1} />
              <DotPattern style={dotPatternStyle2} />
              <Comment className="comment1">
                이력서를 확인하면서 <br />
                바로 연락하세요.
                <CommentArrow1 />
              </Comment>
              <Image className="desktop" src={ChatDesktopPng} webp={ChatDesktopWebp} />
              <MobileImgWrap>
                <Image className="mobile" src={ChatMobilePng} webp={ChatMobileWebp} />
                <Comment className="comment2">
                  지원자가 보게 되는 <br />
                  채팅 화면이에요.
                  <CommentArrow2 />
                </Comment>
              </MobileImgWrap>
            </MainImgWrap>
          </ImgSec>
        </OnviewAniWrapper>
      </Grid>
    </SectionContainer>
  );
}

export default CommunicationSec;
