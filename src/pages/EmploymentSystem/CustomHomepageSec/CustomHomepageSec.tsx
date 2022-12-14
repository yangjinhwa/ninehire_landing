import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';
import HomePagePng from '@assets/images/employmentSystem/customHomepage.png';
import HomePageWebp from '@assets/images/employmentSystem/customHomepage.webp';
import Image from 'react-image-webp';
import Body from '@src/styles/typhography/Body';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import TextLink from '@src/components/dataEntry/button/TextLink';
import { useHistory } from 'react-router-dom';
import { RootPath } from '@src/routes/routePath';

const Container = styled.div`
  width: 100%;
  height: 680px;
  padding: 120px 16px 0 16px;
  display: flex;
  justify-content: center;
  background: ${Color.GRAY_9};
  overflow: hidden;

  @media (max-width: 768px) {
    height: inherit;
  }

  @media (max-width: 460px) {
    height: inherit;
    padding: 80px 16px 0 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;

  > * + * {
    /* margin-left: 48px; */
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  max-width: 520px;
  width: 100%;
  height: 555px;
  position: relative;

  img {
    position: absolute;
    bottom: -16px;
    right: 0;
    max-width: 650px;
    height: inherit;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    height: inherit;
    img {
      width: 100%;
      position: relative;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 60px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding-top: 0;
    margin-bottom: 40px;
    height: inherit;
  }
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 19.2px;
  color: ${Color.PURPLE_5};
`;

const Title = styled.h4`
  color: ${Color.WHITE};
  margin: 40px 0;
`;

const Description = styled(Body).attrs({ size: 17 })`
  word-break: keep-all;
  width: 417px;
  color: ${Color.WHITE};

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

const CustomHomepageSec = () => {
  const history = useHistory();

  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="toRight" flex={1.5}>
          <ImageWrapper>
            <Image src={HomePagePng} webp={HomePageWebp} />
          </ImageWrapper>
        </OnviewAniWrapper>

        <OnviewAniWrapper block direction="toLeft" flex={1}>
          <TextWrapper>
            <Text>enterprise ????????? ?????? ???</Text>
            <Title style={{ color: Color.WHITE }}>
              ????????? ?????? ??????????????? <br />
              ???????????????, ?????????????????????
            </Title>
            <Description>
              ?????? ????????? ?????? ????????????, ????????? ???????????? <br />
              ??? ??????????????? ???????????? ???????????????? <br />
              ?????? ?????????????????? ????????? ????????? ??????????????? <br />
              ???????????? ????????? ??????????????? ????????? ????????????!
            </Description>

            <TextLink
              onClick={() => {
                history.push(RootPath.Price);
                window.scrollTo(0, 0);
              }}
              color={Color.PURPLE_5}
            >
              ????????? ????????????
            </TextLink>
          </TextWrapper>
        </OnviewAniWrapper>
      </Wrapper>
    </Container>
  );
};

export default CustomHomepageSec;
