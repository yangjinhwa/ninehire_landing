import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import TabletBr from '@src/styles/TabletBr';
import GoNextBtn from '@src/components/dataEntry/button/GoNextBtn';
import { RootPath } from '@src/routes/routePath';
import { NextFunctionBtnIdMap } from '@src/typings/idMap';

const Container = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(92.49deg, #fff3f6 0%, #f5edfc 100%);
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
        <GradientText>채용은 함께하는 일이니까.</GradientText> <br />
        <span style={{ color: '#82828d' }}>
          이제 평가자들간의 협업을 <TabletBr /> 시작해 볼까요?
        </span>
      </Content>
      <GoNextBtn
        id={NextFunctionBtnIdMap.TO_COOPERATION}
        onClick={() => {
          history.push(RootPath.Cooperation);
          window.scrollTo(0, 0);
        }}
      >
        평가자끼리 협업 보러가기
      </GoNextBtn>
    </Container>
  );
};

export default NextFuncSec;
