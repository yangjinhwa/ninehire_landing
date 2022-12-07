import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Color from '@src/styles/Color';

const ValidSec = styled.div`
  color: ${Color.RED_6};
  font-size: 12px;
  font-weight: 700;
  padding: 8px 16px 0 8px;
  text-align: left;
`;

interface ValidMessageProps {
  children: ReactElement | string;
}

function InputValidMessage({ children }: ValidMessageProps) {
  return <ValidSec>{children}</ValidSec>;
}

export default InputValidMessage;
