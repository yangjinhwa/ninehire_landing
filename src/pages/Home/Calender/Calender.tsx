import React from 'react';
import styled from 'styled-components';

import SaveScrollTopContainer from '@src/components/wrapper/SaveScrollTopContainer';
import Grid from '@src/layouts/Grid/Grid';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import Img1 from '@assets/images/Home/calender/Calender-1.png';
import Img2 from '@assets/images/Home/calender/Calender-2.png';
import Tag from '../component/Tag';
import Subtitle from '../component/Subtitle';

const ImgWrap = styled.div`
  width: 100%;
  height: 550px;
  position: relative;

  @media (max-width: 460px) {
    height: 300px;
  }
`;

const ImgSec1 = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: -29px 24px 26px -13px rgba(0, 0, 0, 0.15);
`;
const ImgSec2 = styled.img`
  border-radius: 8px;
  position: absolute;
  top: -40px;
  right: -40px;
  width: 45%;
  box-shadow: -33.9349px 39.5907px 33.9349px -12.4428px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    top: 10px;
    right: -30px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

const NewTag = styled.span`
  background-color: ${Color.BLUE_8};
  font-size: 12px;
  font-weight: 800;
  padding: 4px 8px;
  border-radius: 8px;
  color: #fff;
  margin-left: 8px;
`;

function Calender() {
  return (
    <SaveScrollTopContainer order={4} bgColor={Color.GRAY_2}>
      <Grid>
        <OnviewAniWrapper direction="toRight" flex={1}>
          <Contents>
            <Tag>
              일정관리 <NewTag>NEW</NewTag>
            </Tag>
            <Subtitle>
              채용만을 위한 <br />
              일정 관리 캘린더
            </Subtitle>
            <Body size={17}>
              한 눈에 채용과 관련된 일정을 확인하고 <br />
              빈틈없이 관리하세요. <br />
            </Body>
          </Contents>
        </OnviewAniWrapper>
        <OnviewAniWrapper direction="toLeft" flex={1.5}>
          <ImgWrap>
            <ImgSec1 src={Img1} alt="" />
            <ImgSec2 src={Img2} alt="" />
          </ImgWrap>
        </OnviewAniWrapper>
      </Grid>
    </SaveScrollTopContainer>
  );
}

export default Calender;
