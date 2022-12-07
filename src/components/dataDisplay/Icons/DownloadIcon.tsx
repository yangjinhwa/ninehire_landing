import React from 'react';
import styled from 'styled-components';

const SvgBox = styled.div<{
  color?: string;
}>`
  svg {
    path {
      stroke: ${({ color }) => color && color};
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

type Props = {
  color?: string;
  size?: number;
};

function DownloadIcon({ color, size }: Props) {
  return (
    <SvgBox color={color} style={{ width: size, height: size }}>
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.890625 9.80957V11.9696H13.1106V9.80957"
          stroke="#9C9E9F"
          strokeWidth="1.1"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.82031 5.91992L7.00031 9.09992L10.1803 5.91992"
          stroke="#9C9E9F"
          strokeWidth="1.1"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 9.10027V1.28027"
          stroke="#9C9E9F"
          strokeWidth="1.1"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgBox>
  );
}

export default DownloadIcon;
