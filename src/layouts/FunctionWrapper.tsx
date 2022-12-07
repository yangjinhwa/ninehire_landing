import React from 'react';
import styled from 'styled-components';
import Footer from '@src/components/navigation/Footer/Footer';

const Wrapper = styled.div``;

interface Props {
  children: JSX.Element | JSX.Element[];
}

function FunctionWrapper({ children }: Props) {
  return (
    <Wrapper>
      {children}
      <Footer flat />
    </Wrapper>
  );
}

export default FunctionWrapper;
