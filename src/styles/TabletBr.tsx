import React from 'react';
import styled from 'styled-components';

const Br = styled.br`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

function TabletBr() {
  return <Br />;
}

export default TabletBr;
