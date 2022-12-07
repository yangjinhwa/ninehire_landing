import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import GoNextBtn from '@src/components/dataEntry/button/GoNextBtn';
import { RootPath } from '@src/routes/routePath';
import { NextFunctionBtnIdMap } from '@src/typings/idMap';

const Container = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(92.49deg, #f6eefd 0%, #eff8f9 100%);
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
        <span style={{ color: '#82828d' }}>지원자 관리는 여기서 끝나지 않죠.</span> <br />
        <GradientText>지원자에게 더 쉽게 연락하는 방법.</GradientText>
      </Content>
      <GoNextBtn
        id={NextFunctionBtnIdMap.TO_COMMUNICATION}
        onClick={() => {
          history.push(RootPath.ApplicantContact);
          window.scrollTo(0, 0);
        }}
      >
        지원자 연락 보러가기
      </GoNextBtn>
    </Container>
  );
};

export default NextFuncSec;
