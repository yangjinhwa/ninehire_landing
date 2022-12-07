import MaskTitle from '@src/components/dataDisplay/title/MaskTitle';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import Grid from '@src/layouts/Grid/Grid';
import SectionContainer from '@src/pages/common/SectionContainer';
import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import functions from './functions';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 460px) {
    margin-bottom: 24px;
  }
`;

const FunctionsGrid = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  gap: 40px 24px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

function FunctionsSec() {
  return (
    <>
      <SectionContainer bgColor="#fff">
        <Grid direction="column" textAlign="center">
          <OnviewAniWrapper block direction="slideDown">
            <Contents>
              <h3 style={{ color: Color.GRAY_6 }}>다른 건 없냐구요?</h3>
              <MaskTitle color={Color.LightPurpleGradient}>
                <span>채용이 편해지는 기능은 무엇이든.</span>
              </MaskTitle>
            </Contents>
          </OnviewAniWrapper>
          <OnviewAniWrapper block direction="slideUp">
            <FunctionsGrid>
              {functions.map((data, index) => {
                return <CardItem key={index} data={data} />;
              })}
            </FunctionsGrid>
          </OnviewAniWrapper>
        </Grid>
      </SectionContainer>
    </>
  );
}

export default FunctionsSec;
