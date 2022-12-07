import React from 'react';
import styled from 'styled-components';
import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';
import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';

const TitleSec = styled.div`
  padding: 71px 0 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h3`
  margin: 33px 0;
  text-align: center;
`;

const Tag = styled.div`
  border-radius: 8px;
  background: ${Color.PURPLE_2};
  padding: 8px 12px;
  color: ${Color.PURPLE_6};
  border: 1px solid ${Color.PURPLE_3};
  font-size: 15px;
  text-align: center;

  a {
    padding: 0 12px;
    text-decoration: underline;

    &:hover {
      font-weight: 800;
    }
  }

  > span {
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

function Header() {
  return (
    <TitleSec>
      <OnviewAniStagger forced>
        <Body size={17}>가격 정책</Body>
        <Heading>
          우리 회사 성장 단계에 따라 <br />
          달라지는 요금제
        </Heading>
        <Tag>
          2022.05.02 이후로 <strong>나인하이어 요금제가 새롭게 개편</strong>됩니다.{' '}
          <a
            href="https://ninehire.notion.site/5-2-94d00fdfe5e14c5b8b2f624ad4b25853"
            target="_blank"
          >
            자세히 보기 &gt;
          </a>
        </Tag>
      </OnviewAniStagger>
    </TitleSec>
  );
}

export default Header;
