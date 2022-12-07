import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import TemplatePng from '@assets/images/applicantContact/messageTemplate.png';
import TemplateWebp from '@assets/images/applicantContact/messageTemplate.webp';
import Image from 'react-image-webp';
import MobileBr from '@src/pages/common/MobileBr';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: #f3f9fb;

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
    flex-direction: column;

    > * + * {
      margin-left: 0;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 464px;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 40px;
    text-align: center;
    min-width: 100%;
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
  max-width: 480px;
  width: 100%;
  height: 380px;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 720px;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 460px) {
    width: 444px;
    height: 169px;

    img {
      width: auto;
    }
  }
`;

const TemplateSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              같은 말을 여러명에게 보낼 때는 <br />
              <span style={{ color: Color.PURPLE_6 }}>템플릿</span>으로 간편하게!
            </h4>
            <Description>
              자주 사용하는 메시지는 메시지 템플릿으로 <br />
              만들어 사용할 수 있습니다. <br />
              시간을 아껴주고, 많은 지원자에게 <MobileBr /> 일관된 경험을 전달할 수
              있어요.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1.5}>
          <ImageWrapper>
            <Image src={TemplatePng} webp={TemplateWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default TemplateSec;
