import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import SectionContainer from '@src/pages/common/SectionContainer';
import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';
import SparkLabsLogo from '@assets/images/Home/partners/sparkLabs.png';
import BPPLogo from '@assets/images/Home/partners/bluepointPartners.png';
import FastventuresLogo from '@assets/images/Home/partners/fastventures.png';
import Body from '@src/styles/typhography/Body';
import MobileBr from '@src/pages/common/MobileBr';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
    margin-left: 0;
    text-align: center;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media (max-width: 768px) {
    height: auto;
    img {
      width: 100%;
    }
  }
`;

function PartnersSec() {
  return (
    <SectionContainer bgColor={Color.GRAY_2}>
      <Wrapper>
        <OnviewAniWrapper block>
          <Contents>
            <div style={{ paddingBottom: 24 }}>
              <h4 style={{ paddingBottom: 24, color: Color.GRAY_8 }}>
                나인하이어와 함께하는 투자자
              </h4>
              <Body size={18}>
                나인하이어의 비전에 대해 깊이 공감하는
                <MobileBr />
                파트너들과 함께 하고 있습니다
              </Body>
            </div>
            <CardGrid>
              <Card>
                <img src={SparkLabsLogo} alt="SparkLabsLogo" />
              </Card>
              <Card>
                <img src={BPPLogo} alt="BPPLogo" />
              </Card>
              <Card>
                <img src={FastventuresLogo} alt="FastventuresLogo" />
              </Card>
            </CardGrid>
          </Contents>
        </OnviewAniWrapper>
      </Wrapper>
    </SectionContainer>
  );
}

export default PartnersSec;
