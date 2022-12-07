import React from 'react';
import styled from 'styled-components';

import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import Img1 from '@assets/images/Home/communication/Message-1.png';
import Img2 from '@assets/images/Home/communication/Message-2.png';
import Img3 from '@assets/images/Home/communication/Message-3.png';
import CommunicationIcon from '@src/components/dataDisplay/Icons/CommunicationIcon';
import CalenderIcon from '@src/components/dataDisplay/Icons/CalenderIcon';
import PaperIcon from '@src/components/dataDisplay/Icons/PaperIcon';

const SemiGrid = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;
  flex-direction: row;
  align-items: flex-start;
  z-index: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  width: 100%;
  text-align: left;
  word-break: keep-all;

  h5 {
    font-weight: 800;
    margin-left: 8px;
  }

  img {
    width: 100%;
    background: contain/center url();
    background-color: ${Color.GRAY_3};
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-right: 0;
  }
`;

const SemiImgWrap = styled.div<{
  bgColor?: string;
}>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#555f75')};
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 24px;
  z-index: 0;
  isolation: isolate;

  img {
    position: absolute;
    top: 24px;
    left: 36px;
    width: 100%;
    border-radius: 8px;
    height: inherit;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
      position: relative;
      width: 70%;
      top: 0;
      left: 0;
      margin-top: 30px;
    }
  }

  @media (max-width: 460px) {
    height: 260px;
    img {
      width: 90%;
      left: 48px;
    }
  }
`;

const SemiTitleSec = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
`;

const SemiContentWrap = styled.div`
  margin-bottom: 24px;
  justify-content: flex-start;
`;

function CommunicationDetails() {
  return (
    <SemiGrid>
      <OnviewAniWrapper flex={1} block>
        <CardWrap>
          <SemiImgWrap bgColor="#EFF2F6">
            <img src={Img1} />
          </SemiImgWrap>
          <SemiContentWrap>
            <SemiTitleSec>
              <CommunicationIcon />
              <h5>지원자와 소통</h5>
            </SemiTitleSec>
            <Body size={15} color={Color.BLUE_GRAY_2}>
              지원자와 담당자가 메시지 창을 통해 소통할 수 있고 커뮤니케이션 이력을 한
              눈에 확인 할 수 있습니다.
            </Body>
          </SemiContentWrap>
        </CardWrap>
      </OnviewAniWrapper>
      <OnviewAniWrapper delay={0.1} flex={1} block>
        <CardWrap>
          <SemiImgWrap bgColor="#555F75">
            <img src={Img2} />
          </SemiImgWrap>
          <SemiContentWrap>
            <SemiTitleSec>
              <CalenderIcon />
              <h5> 일정 조율</h5>
            </SemiTitleSec>
            <Body size={15} color={Color.BLUE_GRAY_2}>
              지원자에게 참석 가능한 일정을 요청 합니다. <br />
              일정이 확정되면 채용 캘린더에 바로 추가되며 참석자는 알림을 통해 예정된
              일정을 확인합니다.
            </Body>
          </SemiContentWrap>
        </CardWrap>
      </OnviewAniWrapper>
      <OnviewAniWrapper delay={0.2} flex={1} block>
        <CardWrap>
          <SemiImgWrap bgColor="#1A2028">
            <img src={Img3} />
          </SemiImgWrap>
          <SemiContentWrap>
            <SemiTitleSec>
              <PaperIcon />
              <h5>자료 요청</h5>
            </SemiTitleSec>
            <Body size={15} color={Color.BLUE_GRAY_2}>
              지원자에게 필요한 자료를 요청합니다. <br />
              지원자가 자료를 제출하면 다운로드가 가능하며 알림을 통해 확인할 수 있습니다.
            </Body>
          </SemiContentWrap>
        </CardWrap>
      </OnviewAniWrapper>
    </SemiGrid>
  );
}

export default CommunicationDetails;
