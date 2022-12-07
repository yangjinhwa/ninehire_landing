import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';
import React from 'react';
import styled from 'styled-components';

const TitleSec = styled.div`
  padding: 71px 0 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Body = styled.p`
  font-size: 16px;
  line-height: 19px;
`;

const Heading = styled.h3`
  margin: 33px 0;
  text-align: center;
`;

const Tag = styled.div`
  border-radius: 10px;
  background: #ffeed9;
  padding: 7px 14px;
  color: #e65800;
  font-weight: 600;
  font-size: 15px;
  text-align: center;

  > span {
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

function BetaHeader() {
  return (
    <TitleSec>
      <OnviewAniStagger forced>
        <Body>미리보는 정식 출시 요금제</Body>
        <Heading>
          우리 회사 성장 단계에 따라 <br />
          달라지는 요금제
        </Heading>
        <Tag>
          현재는 무료 beta 기간이며, <span>정식 출시 이후 적용되는 요금제입니다.</span>
        </Tag>
      </OnviewAniStagger>
    </TitleSec>
  );
}

export default BetaHeader;
