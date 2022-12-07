import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import ChatPng from '@assets/images/cooperation/mention.png';
import ChatWebp from '@assets/images/cooperation/mention.webp';
import Image from 'react-image-webp';
import MobileBr from '@src/pages/common/MobileBr';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px 16px;
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
    flex-direction: column-reverse;

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
  max-width: 560px;
  width: 100%;
  height: 415px;
  background: linear-gradient(71.32deg, #e8e7f5 25.56%, #f7f5fe 68.9%);
  border: 1px solid #e9e9f0;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 90%;
    object-fit: contain;
    margin-top: -20px;
    margin-left: -20px;
    border-radius: 12px;
    overflow: hidden;

    box-shadow: 16px 24px 56px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 460px) {
    height: 260px;

    img {
      width: 100%;
    }
  }
`;

const Info = styled.div`
  color: ${Color.GRAY_6};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const TeamCommentSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1.5}>
          <ImageWrapper>
            <Image src={ChatPng} webp={ChatWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <TextWrapper>
            <h4>
              채용때마다 만들었던 <br /> 평가자들만 따로 모인 방, <br /> 이제 필요없어요.
            </h4>
            <Description>
              이전 단계에선 참여하지 않았던 평가자더라도 <br />
              <span style={{ color: Color.PURPLE_6 }}>지원자 창에서 멘션(@)</span>{' '}
              기능으로 <MobileBr />
              바로 피드백 요청이 가능해요. <br />
              필요한 대화만 찾아가는 <MobileBr /> 똑똑한 커뮤니케이션이 시작됩니다.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default TeamCommentSec;
