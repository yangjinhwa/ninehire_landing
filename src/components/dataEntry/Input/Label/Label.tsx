import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';

const LabelBase = styled.span<{
  required?: boolean;
}>`
  font-weight: 700;
  margin: 0 0 8px 4px;
  position: relative;
  font-size: 14px;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    right: -12px;
    width: 6px;
    height: 6px;
    background-color: ${Color.RED_6};
    border-radius: 50px;
    display: ${({ required }) => (required ? 'inherit' : 'none')};
  }
`;

type LabelProps = {
  required?: boolean;
  children: string;
};

function Label({ required, children }: LabelProps) {
  return (
    <div style={{ marginBottom: '8px', textAlign: 'left' }}>
      <LabelBase required={required}>{children}</LabelBase>
    </div>
  );
}

export default Label;
