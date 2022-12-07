import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import KakaoPng from '@assets/images/applicantContact/kakaotalkExample.png';
import KakaoWebp from '@assets/images/applicantContact/kakaotalkExample.webp';
import Image from 'react-image-webp';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import TextLink from '@src/components/dataEntry/button/TextLink';
import { RootPath } from '@src/routes/routePath';
import { useHistory } from 'react-router-dom';

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
    flex-direction: column;

    > * + * {
      margin-left: 0;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 380px;

  @media (max-width: 768px) {
    min-width: 100%;
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
  height: 400px;
  background: #cee0ed;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 460px) {
    height: 230px;
  }
`;

const Info = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  color: ${Color.PURPLE_6};
  margin-bottom: 40px;

  @media (max-width: 460px) {
    font-size: 15px;
    line-height: 22px;
  }
`;

const AlimTalk = () => {
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1}>
          <TextWrapper>
            <h4>
              우리 회사만의 <span style={{ color: Color.PURPLE_6 }}>알림톡</span>으로{' '}
              <br />
              매력을 만들어요.
            </h4>
            <Description>
              지원자에게 보내는 카카오 알림톡을 커스텀해보세요. <br /> 브랜드만의 매력을
              한껏 뽐낼 수 있어요.
            </Description>
            <TextLink
              onClick={() => {
                history.push(RootPath.Price);
                window.scrollTo(0, 0);
              }}
              color={Color.PURPLE_5}
            >
              요금제 확인하기
            </TextLink>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="toLeft" flex={1.5}>
          <ImageWrapper>
            <Image src={KakaoPng} webp={KakaoWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default AlimTalk;
