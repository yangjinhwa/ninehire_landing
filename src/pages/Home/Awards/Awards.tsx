import React from 'react';
import styled from 'styled-components';
import Color from '@src/styles/Color';

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${Color.GRAY_5};

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Awards() {
  return <Wrapper>수상 내역</Wrapper>;
}

export default Awards;
