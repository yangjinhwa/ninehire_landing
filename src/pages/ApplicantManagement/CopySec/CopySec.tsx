import FlexBox from '@src/components/flexbox/FlexBox';
import React from 'react';
import styled from 'styled-components';
import DocumentPng from '@assets/images/applicantManagement/managementIcon1.png';
import DocumentWebp from '@assets/images/applicantManagement/managementIcon1.webp';
import CDPng from '@assets/images/applicantManagement/managementIcon2.png';
import CDWebp from '@assets/images/applicantManagement/managementIcon2.webp';
import SmilePng from '@assets/images/applicantManagement/managementIcon3.png';
import SmileWebp from '@assets/images/applicantManagement/managementIcon3.webp';
import Image from 'react-image-webp';
import Body from '@src/styles/typhography/Body';

const Container = styled.div`
  width: 100%;
  height: 572px;
  padding: 360px 16px 120px 16px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: 392px;
    padding: 120px 32px;
  }

  @media (max-width: 460px) {
    height: 268px;
    padding: 80px 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 760px;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 460px) {
    width: 308px;
  }
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 460px) {
    width: 40px;
    height: 40px;
  }
`;

const content = [
  {
    text: `모든 지원자를
    한 곳에서 보고`,
    png: DocumentPng,
    webp: DocumentWebp,
  },
  {
    text: `지원자와 약속한
    시간을 지키고`,
    png: CDPng,
    webp: CDWebp,
  },
  {
    text: `지원서를 보면서
    동시에 연락해요`,
    png: SmilePng,
    webp: SmileWebp,
  },
];

const CopySec = () => {
  return (
    <Container>
      <Wrapper>
        {content.map((e, i) => (
          <FlexBox direction="column" key={i}>
            <ImageWrapper>
              <Image src={e.png} webp={e.webp} />
            </ImageWrapper>
            <Body size={18} bold style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
              {e.text}
            </Body>
          </FlexBox>
        ))}
      </Wrapper>
    </Container>
  );
};

export default CopySec;
