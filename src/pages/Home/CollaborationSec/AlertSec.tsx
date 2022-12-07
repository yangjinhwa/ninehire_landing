import React from 'react';
import styled from 'styled-components';
import Grid from '@src/layouts/Grid/Grid';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import Body from '@src/styles/typhography/Body';
import Pattern4 from '@assets/images/Homecollaboration/Pattern4.svg';
import Pattern5 from '@assets/images/Homecollaboration/Pattern5.svg';
import AlertImg3 from '@assets/images/Homecollaboration/Collaborate-5.png';
import Subtitle from '../component/Subtitle';

const Wrapper = styled.div`
  padding: 60px 0;
  background: #f2f6fb;
  overflow: hidden;

  @media (max-width: 460px) {
    padding: 40px 0;
  }
`;

const ImgSec = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: center;

  .img1 {
    width: 100%;
    object-fit: contain;
  }

  .pattern4 {
    position: absolute;
    top: 0;
    right: -60px;
    z-index: -1;
  }
  .pattern5 {
    position: absolute;
    bottom: 0;
    left: -200px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    height: 540px;
  }

  @media (max-width: 460px) {
    height: 340px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

function AlertSec() {
  return (
    <Wrapper>
      <Grid>
        <OnviewAniWrapper direction="toRight" flex={1}>
          <Contents>
            <Subtitle>
              빠르고 확실한 <br /> 협업 요청
            </Subtitle>
            <Body size={17}>
              멘션(@)을 통해 평가자에게 피드백을 즉시 요청하면, <br />
              평가자는 한 눈에 지원자 히스토리를 파악하고 <br />
              피드백 할 수 있습니다.
            </Body>
          </Contents>
        </OnviewAniWrapper>
        <OnviewAniWrapper direction="toLeft" flex={1}>
          <ImgSec>
            <img src={AlertImg3} className="img1" alt="" />
            <img src={Pattern4} className="pattern4" alt="" />
            <img src={Pattern5} className="pattern5" alt="" />
          </ImgSec>
        </OnviewAniWrapper>
      </Grid>
    </Wrapper>
  );
}

export default AlertSec;
