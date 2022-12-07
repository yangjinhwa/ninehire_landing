import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import MobileBr from '@src/pages/common/MobileBr';
import TabletBr from '@src/styles/TabletBr';
import { RootPath } from '@src/routes/routePath';
import GoNextBtn from '@src/components/dataEntry/button/GoNextBtn';
import { NextFunctionBtnIdMap } from '@src/typings/idMap';

const Container = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(92.49deg, #eef5f7 0%, #fffef8 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 460px) {
    height: 360px;
  }
`;

const Content = styled.h4`
  text-align: center;
  margin-top: 22px;
  margin-bottom: 32px;
`;

const GradientText = styled.span`
  background: ${Color.BlackPurpleGreenGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const NextFuncSec = () => {
  const history = useHistory();

  return (
    <Container>
      <Body size={15} bold color={Color.PURPLE_6}>
        다음 기능
      </Body>
      <Content>
        <GradientText>
          진행중인 채용 현황을 <TabletBr /> 데이터로 바로 봐요.
        </GradientText>{' '}
        <br />
        <span style={{ color: '#82828d' }}>
          다음 번 채용을 위한 핵심 데이터를 <TabletBr /> 골라 보여드려요.
        </span>
      </Content>
      <GoNextBtn
        id={NextFunctionBtnIdMap.TO_DASHBOARD}
        onClick={() => {
          history.push(RootPath.Dashboard);
          window.scrollTo(0, 0);
        }}
      >
        대시보드 / 리포트 보러가기
      </GoNextBtn>
    </Container>
  );
};

export default NextFuncSec;
