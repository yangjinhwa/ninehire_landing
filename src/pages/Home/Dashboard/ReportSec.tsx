import React from 'react';
import styled from 'styled-components';
import SaveScrollTopContainer from '@src/components/wrapper/SaveScrollTopContainer';
import Grid from '@src/layouts/Grid/Grid';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import MaskTitle from '@src/components/dataDisplay/title/MaskTitle';
import Body from '@src/styles/typhography/Body';
import Color from '@src/styles/Color';
import CustomTabs from '@src/components/dataDisplay/tab/CustomTabs/CustomTabs';

import Image from 'react-image-webp';
import DashboardWebp1 from '@assets/images/Home/dashboard/Dashboard1.webp';
import DashboardPng1 from '@assets/images/Home/dashboard/Dashboard1.png';
import DashboardWebp2 from '@assets/images/Home/dashboard/Dashboard2.webp';
import DashboardPng2 from '@assets/images/Home/dashboard/Dashboard2.png';
import DashboardWebp3 from '@assets/images/Home/dashboard/Dashboard3.webp';
import DashboardPng3 from '@assets/images/Home/dashboard/Dashboard3.png';
import SectionContainer from '@src/pages/common/SectionContainer';

const ImgSec = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
    margin-left: 0;
    text-align: center;
    align-items: center;
  }
`;

const TabContets = styled.div`
  color: ${Color.GRAY_2};
  background-color: ${Color.GRAY_8};
  border-radius: 12px;
  width: 100%;
  height: 460px;
  padding: 40px 40px 0 40px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 380px;
  }

  @media (max-width: 460px) {
    padding: 30px 30px 0 30px;
    height: 260px;
  }
`;

const TabTitle = styled.h6`
  width: 100%;
  margin-bottom: 32px;
  text-align: left;
`;

const functionsTabList = [
  {
    order: 0,
    value: '지원자 통계',
    contents: (
      <TabContets>
        <TabTitle>대시보드 하나면 지금 돌아가는 상황이 한 눈에.</TabTitle>
        <ImgSec>
          <Image src={DashboardPng1} webp={DashboardWebp1} />
        </ImgSec>
      </TabContets>
    ),
  },
  {
    order: 1,
    value: '채용 경로별 순위',
    contents: (
      <TabContets>
        <TabTitle>어디에서 몇 명이 들어왔는지</TabTitle>
        <ImgSec>
          <Image src={DashboardPng2} webp={DashboardWebp2} />
        </ImgSec>
      </TabContets>
    ),
  },
  {
    order: 2,
    value: '채용 단계 퍼널',
    contents: (
      <TabContets>
        <TabTitle>어느 단계에 몇 명이 머물렀는지</TabTitle>
        <ImgSec>
          <Image src={DashboardPng3} webp={DashboardWebp3} />
        </ImgSec>
      </TabContets>
    ),
  },
];
function ReportSec() {
  return (
    <SectionContainer bgColor={Color.GRAY_9}>
      <Grid>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <Contents>
            <h3 style={{ color: Color.GRAY_6 }}>데이터로 발전하는</h3>
            <MaskTitle color={Color.LightPurpleGradient}>
              <span>똑똑한 채용</span>
            </MaskTitle>
            <Body size={17} color={Color.GRAY_2}>
              어디에서 많은 지원자가 들어오는지 <br />
              현재 몇 명이 어느 단계를 진행중인지 <br />
              지금 꼭 필요한 데이터만 골라 보여드려요!
            </Body>
          </Contents>
        </OnviewAniWrapper>
        <OnviewAniWrapper direction="toLeft" flex={1.5}>
          <CustomTabs tabList={functionsTabList} />
        </OnviewAniWrapper>
      </Grid>
    </SectionContainer>
  );
}

export default ReportSec;
