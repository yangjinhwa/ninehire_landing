import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import SaveScrollTopContainer from '@src/components/wrapper/SaveScrollTopContainer';
import Grid from '@src/layouts/Grid/Grid';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import MaskTitle from '@src/components/dataDisplay/title/MaskTitle';
import SectionContainer from '@src/pages/common/SectionContainer';

import Image from 'react-image-webp';
import KanbanWebp from '@assets/images/Home/kanban/Kanban.webp';
import KanbanPng from '@assets/images/Home/kanban/Kanban.png';

const ImgSec = styled.div`
  border-radius: 32px;
  overflow: hidden;
  width: 100%;
  height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
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
  margin-left: 48px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
    margin-left: 0;
    text-align: center;
    align-items: center;
  }
`;

// <OnviewAniWrapper block direction="toRight" flex={1}></OnviewAniWrapper>
// <OnviewAniWrapper block direction="toLeft" flex={1.5}></OnviewAniWrapper>

function KanbanSec() {
  return (
    <SectionContainer bgColor="#F7F5FE">
      <Grid direction="row-reverse">
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <Contents>
            <MaskTitle color={Color.BlackPurpleGreenGradient}>
              <span>한 눈에 보여요.</span>
            </MaskTitle>
            <Body size={17}>
              각 단계별 지원자가 한 눈에 보여요. <br />
              절차가 끝났을 때 지원자를 눌러 옮기기만 하면 끝!
            </Body>
          </Contents>
        </OnviewAniWrapper>
        <OnviewAniWrapper direction="toRight" flex={1.5}>
          <ImgSec>
            <Image src={KanbanPng} webp={KanbanWebp} />
          </ImgSec>
        </OnviewAniWrapper>
      </Grid>
    </SectionContainer>
  );
}

export default KanbanSec;
