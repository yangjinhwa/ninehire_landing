import React from 'react';
import styled from 'styled-components';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import MobileBr from '@src/pages/common/MobileBr';

import Image from 'react-image-webp';
import EvaluationNotePng from '@assets/images/cooperation/EvaluationNote.png';
import EvaluationNoteWebp from '@assets/images/cooperation/EvaluationNote.webp';

const Container = styled.div`
  width: 100%;
  padding: 150px 16px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 120px 16px;
  }

  @media (max-width: 460px) {
    padding: 80px 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;

  > * + * {
    margin-left: 48px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    > * + * {
      margin-left: 0;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const Description = styled(Body).attrs({ size: 17 })`
  word-break: keep-all;
  margin-top: 40px;
  width: 417px;

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 160%;
    text-align: center;
  }

  @media (max-width: 460px) {
    font-size: 14px;
    line-height: 143%;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 12px;
  background: linear-gradient(71.32deg, #e8e7f5 25.56%, #f7f5fe 68.9%);
  border: 1px solid #dcdcfa;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    top: 30px;
    right: -8px;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 415px;
    display: flex;
    justify-content: center;
    img {
      position: relative;
      right: auto;
    }
  }

  @media (max-width: 460px) {
    height: 260px;
  }
`;

function EvaluationNoteSec() {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              면접 질문을 미리 준비하거나 <br />
              지원자
              <span style={{ color: Color.PURPLE_6 }}> 평가를 노트</span> 하세요.
            </h4>
            <Description>
              평가자들과 실시간 공유가 가능한 노트 페이지를 제공합니다. <br />
              평가 노트는 미리 준비하는 질문지가 될 수도 있고, <br />
              지원자에 대한 상세한 기록 리스트가 될 수 있습니다. <br />팀 코멘트와는 다른
              노트의 매력을 느껴보세요!
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <ImageWrapper>
            <Image src={EvaluationNotePng} webp={EvaluationNoteWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
}

export default EvaluationNoteSec;
