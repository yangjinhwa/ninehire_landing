import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';

import Image from 'react-image-webp';
import CopyBG1Webp from '@assets/images/Home/copy/CopyBG1.webp';
import CopyBG1Png from '@assets/images/Home/copy/CopyBG1.png';
import CopyBG2Webp from '@assets/images/Home/copy/CopyBG2.webp';
import CopyBG2Png from '@assets/images/Home/copy/CopyBG2.png';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Color.WHITE};
  background: linear-gradient(
    168.48deg,
    #4f0d0a 0%,
    #10040f 24.84%,
    #180521 50.69%,
    #340964 89.69%,
    #7510f0 113.33%
  );

  position: relative;

  h4 {
    text-align: center;
    line-height: 1.3;
  }
  @media (max-width: 460px) {
    height: 275px;
  }
`;

const ImgSec = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: hidden;
  img {
    width: 400px;
    object-fit: contain;
    position: absolute;
  }

  .img1 {
    top: 230px;
    left: calc(50% - 600px);
  }

  .img2 {
    top: 30px;
    right: calc(50% - 600px);
  }

  @media (max-width: 460px) {
    img {
      width: 300px;
    }
    .img1 {
      top: 200px;
      left: 0;
    }

    .img2 {
      top: -100px;
      right: calc(50% - 300px);
    }
  }
`;

const Text = styled.h4`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 460px) {
    font-size: 20px;
  }
`;

function CopySec() {
  return (
    <Container>
      <Text>
        맞이하는 사람이 지치면, 지원자는 떠나갑니다. <br />
        이제 나인하이어가 채용에 쉼표를 더합니다.
      </Text>
      <ImgSec>
        <Image src={CopyBG1Png} webp={CopyBG1Webp} className="img1" />
        <Image src={CopyBG2Png} webp={CopyBG2Webp} className="img2" />
      </ImgSec>
    </Container>
  );
}

export default CopySec;
