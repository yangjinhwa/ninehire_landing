import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import SaveScrollTopContainer from '@src/components/wrapper/SaveScrollTopContainer';
import Grid from '@src/layouts/Grid/Grid';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import Img from '@assets/images/register.png';
import MaskTitle from '@src/components/dataDisplay/title/MaskTitle';

import Image from 'react-image-webp';
import RegisterWebp from '@assets/images/register/Register.webp';
import RegisterPng from '@assets/images/register/Register.png';

const ImgSec = styled.div`
  border-radius: 32px;
  overflow: hidden;
  width: 100%;
  height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 380px;
    border-radius: 8px;
  }

  @media (max-width: 460px) {
    height: 300px;
    img {
      width: 100%;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
    align-items: center;
  }
`;

function RegisterSec() {
  return (
    <SaveScrollTopContainer order={0}>
      <Grid>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <Contents>
            <MaskTitle color={Color.DeepPurpleGradient}>한 곳으로 모아요.</MaskTitle>
            <Body size={17}>
              포털사이트, 메일함 들락날락 할 필요 없어요. <br />
              수많은 지원자의 정보를 엑셀없이 화면 하나로!
            </Body>
          </Contents>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1.5}>
          <ImgSec>
            <Image src={RegisterPng} webp={RegisterWebp} />
          </ImgSec>
        </OnviewAniWrapper>
      </Grid>
    </SaveScrollTopContainer>
  );
}

export default RegisterSec;
