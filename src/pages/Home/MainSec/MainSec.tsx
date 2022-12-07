import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Body from '@src/styles/typhography/Body';
import Grid from '@src/layouts/Grid/Grid';
import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import Color from '@src/styles/Color';
import MaskHeader from '@src/components/dataDisplay/title/MaskHeader';
import DotPattern from '@src/pages/common/DotPattern';
import Image from 'react-image-webp';
import MainWebp from '@assets/images/Home/main/Main.webp';
import MainPng from '@assets/images/Home/main/Main.png';
import TabletBr from '@src/styles/TabletBr';
import { isIE } from 'react-device-detect';
import Button from '@src/components/dataEntry/button/Button';
import RegisterModal from '@src/pages/Home/MainSec/RegisterModal';
import { RegisterIdMap } from '@src/typings/idMap';

const Container = styled.section`
  background: ${Color.GrayGradient};
  width: 100%;
  overflow: hidden;
  padding: 160px 0 0;
  position: relative;

  a {
    display: flex;
    justify-content: center;
  }

  &::before {
    content: '';
    position: absolute;
    right: calc(50% + 300px);
    top: 240px;
    background: linear-gradient(
      141.53deg,
      #0500ff 15.65%,
      rgba(243, 171, 255, 0.11) 84.54%
    );
    opacity: 0.1;
    width: 500px;
    height: 500px;
    border-radius: 50%;
  }

  @media (max-width: 460px) {
    padding: 130px 0 0;
  }
`;

const Title = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const ImgSec = styled.div`
  width: 100%;
  margin-top: 60px;
  height: 560px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 370px;
  }

  @media (max-width: 460px) {
    height: fit-content;
    margin-bottom: 80px;
  }
`;

function MainSec() {
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>();
  const isStage = window.location.origin.includes('stage');

  useLayoutEffect(() => {
    if (imgRef.current) {
      console.log(imgRef.current.dataset.src);
    }
  }, [imgRef]);

  function openRegisterModal() {
    setRegisterModalVisible(true);
  }

  function closeRegisterModal() {
    setRegisterModalVisible(false);
  }

  const dotPatternStyle = {
    position: 'absolute',
    top: -40,
    right: -60,
  } as const;

  return (
    <Container>
      <Grid direction="column" textAlign="center">
        <OnviewAniStagger forced>
          <Body size={17} style={{ color: Color.PURPLE_6, marginBottom: 16 }}>
            <strong>좋은 인재를 놓치지 않는 채용</strong>
          </Body>
          <Title>
            {isIE ? (
              <span>
                사람 뽑는 일에 <TabletBr /> 당연한 모든 것, <br /> 나인하이어
              </span>
            ) : (
              <MaskHeader>
                사람 뽑는 일에 <TabletBr /> 당연한 모든 것,
                <br />
                나인하이어
              </MaskHeader>
            )}
          </Title>
          <Button
            id={RegisterIdMap.MAINSIGNUP}
            color="primary"
            size="xl"
            style={{ marginRight: 12 }}
            onClick={openRegisterModal}
          >
            지금 무료로 체험하기
          </Button>
        </OnviewAniStagger>
        <OnviewAniWrapper direction="slideUp" forced delay={0.4}>
          <ImgSec>
            <DotPattern style={dotPatternStyle} />
            <Image src={MainPng} webp={MainWebp} />
          </ImgSec>
        </OnviewAniWrapper>
      </Grid>
      {registerModalVisible && <RegisterModal onClose={closeRegisterModal} />}
    </Container>
  );
}

export default MainSec;
