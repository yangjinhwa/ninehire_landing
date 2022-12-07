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

function MessageIcon(props: IconProps) {
  const { size = 18, color } = props;

  return (
    <SvgBox size={size} role="img" aria-label="messageIcon">
      <svg viewBox="0 0 14 14" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.52773 3.52712C4.87721 2.17765 7.06404 2.17765 8.41352 3.52712C8.85248 3.96608 9.14787 4.49904 9.30506 5.0802C9.61533 6.23717 9.31157 7.51485 8.41352 8.41291C7.06404 9.76238 4.87721 9.76238 3.52773 8.41291C2.17826 7.06343 2.17826 4.8766 3.52773 3.52712ZM9.82773 2.11291C7.69721 -0.0176165 4.24404 -0.0176165 2.11352 2.11291C-0.0170061 4.24343 -0.0170061 7.6966 2.11352 9.82712C4.00259 11.7162 6.93151 11.9303 9.05627 10.4694L11.694 13.1071C12.0845 13.4976 12.7177 13.4976 13.1082 13.1071C13.4987 12.7166 13.4987 12.0834 13.1082 11.6929L10.4701 9.05482C11.3834 7.72445 11.6427 6.07398 11.2364 4.56074L11.236 4.5591C10.9931 3.66054 10.5286 2.81376 9.82773 2.11291Z"
          fill={color ? color : Color.GRAY_8}
        />
      </svg>
    </SvgBox>
  );
}
export default MessageIcon;
