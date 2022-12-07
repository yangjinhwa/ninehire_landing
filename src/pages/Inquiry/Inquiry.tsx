import React from 'react';
import styled from 'styled-components';
import InquirySec from '@src/pages/Inquiry/InquirySec';
import { Helmet } from 'react-helmet';
import Color from '@src/styles/Color';
import MobileBr from '../common/MobileBr';
import Footer from '@src/components/navigation/Footer/Footer';
import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';

const Container = styled.section`
  width: 100%;
  height: 740px;
  background: linear-gradient(100.51deg, #fbf7f0 23.71%, #f9f0fb 81.08%);
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 400px;
  /* margin: 0 auto 400px; */

  @media (max-width: 460px) {
    height: 600px;

    p {
      text-align: center;
    }
  }
`;

const Wrapper = styled.div`
  background-color: ${Color.WHITE};
  padding: 42px;
  border: 1px solid ${Color.PURPLE_GRAY_3};
  border-radius: 8px;
  width: 100%;
  max-width: 560px;
  display: flex;

  @media (max-width: 768px) {
    max-width: 94%;
    padding: 32px 16px;
    margin: 0;
  }
`;

const Title = styled.h3`
  color: ${Color.GRAY_8};
  margin-bottom: 16px;
`;

function Inquiry() {
  return (
    <>
      <Helmet>
        <title>나인하이어 :: 도입 문의</title>
      </Helmet>
      <Container>
        <OnviewAniStagger forced>
          <Title>도입 문의</Title>
          <p style={{ marginBottom: 32, color: Color.GRAY_7 }}>
            도입문의를 남겨주시면 담당 컨설턴트가 <MobileBr /> 빠르게 연락드리겠습니다.
          </p>
        </OnviewAniStagger>
        <Wrapper>
          <InquirySec />
        </Wrapper>
      </Container>
      <Footer noCTA />
    </>
  );
}

export default Inquiry;
