import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Color from '@src/styles/Color';
import { RootPath } from '@src/routes/routePath';

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background: ${Color.Gradient_3};
  color: ${Color.WHITE};
  font-size: 15px;
  transition: 0.2s ease;
  background-position: center;

  &:hover {
    background-position: bottom;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  height: 100%;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SeeMoreBtn = styled.div`
  padding: 6px 8px;
  font-size: 13px;
  border-radius: 8px;
  border: 1px solid ${Color.PURPLE_5};
  margin-left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 430px) {
    display: none;
  }
`;

function TopBanner() {
  return (
    <Link to={RootPath.Price}>
      <Wrapper>
        <Container>
          <div>
            나인하이어가 드디어 <strong>정식 출시</strong> 되었습니다!
          </div>
          <SeeMoreBtn>
            <span style={{ marginRight: 6 }}>요금제 확인하기</span>
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
              <path
                d="M1.33374 6.52574H13.1492M13.1492 6.52574L7.73768 1.11426M13.1492 6.52574L7.73768 11.9372"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SeeMoreBtn>
        </Container>
      </Wrapper>
    </Link>
  );
}

export default TopBanner;
