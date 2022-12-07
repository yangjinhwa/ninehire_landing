import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import DotPattern from '@src/pages/common/DotPattern';
import GoNextBtn from '@src/components/dataEntry/button/GoNextBtn';
import { RootPath } from '@src/routes/routePath';
import MobileBr from '@src/pages/common/MobileBr';
import { NextFunctionBtnIdMap } from '@src/typings/idMap';

const Container = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(92.49deg, #ebecff 0%, #eff3fb 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    right: calc(50% + 200px);
    top: 70px;
    background: linear-gradient(
      141.53deg,
      #0500ff 15.65%,
      rgba(243, 171, 255, 0.11) 84.54%
    );
    opacity: 0.1;
    width: 373px;
    height: 381px;
    border-radius: 50%;
  }

  @media (max-width: 460px) {
    height: 360px;
  }
`;

const Content = styled.h4`
  text-align: center;
  margin-top: 22px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    width: 325px;
  }

  @media (max-width: 460px) {
    width: 245px;
  }
`;

const GradientText = styled.span`
  background: center/cover no-repeat ${Color.BlackPurpleGreenGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const NextFuncSec = () => {
  const history = useHistory();

  return (
    <Container>
      <DotPattern
        style={{ position: 'absolute', top: '-80px', right: 'calc(50% - 380px)' }}
      />
      <Body size={15} bold color={Color.PURPLE_6}>
        다음 기능
      </Body>
      <Content>
        <span style={{ color: '#82828d' }}>지원자가 모였습니다.</span> <br />
        <GradientText>
          이제 지원서를 확인하고 <MobileBr /> 연락할 차례예요.
        </GradientText>
      </Content>
      <GoNextBtn
        id={NextFunctionBtnIdMap.TO_MANAGEMENT}
        onClick={() => {
          history.push(RootPath.ApplicantManagement);
          window.scrollTo(0, 0);
        }}
      >
        지원자 관리 보러가기
      </GoNextBtn>
    </Container>
  );
};

export default NextFuncSec;
