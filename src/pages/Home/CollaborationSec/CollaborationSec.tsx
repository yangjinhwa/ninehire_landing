import React from 'react';
import styled from 'styled-components';

import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import SaveScrollTopContainer from '@src/components/wrapper/SaveScrollTopContainer';
import Grid from '@src/layouts/Grid/Grid';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import MaskTitle from '@src/components/dataDisplay/title/MaskTitle';
import Image from 'react-image-webp';
import AlertWebp from '@assets/images/Home/collaboration/Alert.webp';
import AlertPng from '@assets/images/Home/collaboration/Alert.png';
import SectionContainer from '@src/pages/common/SectionContainer';

const ImgSec = styled.div`
  border-radius: 32px;
  overflow: hidden;
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 380px;
    border-radius: 8px;
  }

  @media (max-width: 460px) {
    height: 300px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${Color.BLUE_GRAY_2};
  margin-bottom: 60px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
    margin-left: 0;
    text-align: center;
    align-items: center;
  }
`;

function CollaborationSec() {
  return (
    <>
      <SectionContainer bgColor="#fff">
        <Grid>
          <OnviewAniWrapper block direction="toRight" flex={1}>
            <Contents>
              <MaskTitle color={Color.DeepPurpleGradient}>
                <span>채용은 함께하는 일이니까</span>
              </MaskTitle>
              <Body size={17}>
                제 시간에 꼭 필요한 채용 정보를 주고 받습니다. <br /> 지원자도 담당자도
                기다리지 않는 빠른 커뮤니케이션
              </Body>
            </Contents>
          </OnviewAniWrapper>
          <OnviewAniWrapper direction="toLeft" flex={1.2}>
            <ImgSec>
              <Image src={AlertPng} webp={AlertWebp} />
            </ImgSec>
          </OnviewAniWrapper>
        </Grid>
      </SectionContainer>
    </>
  );
}

export default CollaborationSec;
