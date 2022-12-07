import React from 'react';
import styled from 'styled-components';
import Color from '@src/styles/Color';
import { IconProps } from '@src/typings/icon';

const SvgBox = styled.span<{
  size?: number;
}>`
  width: ${({ size }) => size || 18}px;
  height: ${({ size }) => size || 18}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function EyeIcon(props: IconProps) {
  const { size = 18, color } = props;

  return (
    <SvgBox size={size} role="img" aria-label="eye">
      <svg viewBox="0 0 18 14" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.651592 7.33249C0.823753 7.59656 4.40524 13.09 8.99999 13.09C13.61 13.09 17.2 7.56003 17.35 7.32003C17.48 7.12003 17.48 6.87003 17.35 6.67003L17.3484 6.66758C17.1762 6.40353 13.5947 0.910034 8.99999 0.910034C4.38999 0.910034 0.79999 6.44003 0.64999 6.68003C0.51999 6.88003 0.51999 7.13003 0.64999 7.33003L0.651592 7.33249ZM8.99999 11.89C5.63999 11.89 2.69999 8.14003 1.88999 7.00003C2.69999 5.86003 5.62999 2.11003 8.99999 2.11003C12.37 2.11003 15.3 5.86003 16.12 7.00003C15.3 8.14003 12.37 11.89 8.99999 11.89ZM6.60999 7.00001C6.60999 8.82001 7.65999 10.24 8.99999 10.24C10.34 10.24 11.39 8.82001 11.39 7.00001C11.39 5.18001 10.34 3.76001 8.99999 3.76001C7.65999 3.76001 6.60999 5.18001 6.60999 7.00001ZM7.80999 7.00001C7.80999 5.80001 8.43999 4.96001 8.99999 4.96001C9.55999 4.96001 10.19 5.80001 10.19 7.00001C10.19 8.20001 9.55999 9.04001 8.99999 9.04001C8.43999 9.04001 7.80999 8.20001 7.80999 7.00001Z"
          fill={color ? color : Color.GRAY_8}
        />
      </svg>
    </SvgBox>
  );
}
export default EyeIcon;
