import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlanGuide = () => (
  <Wrap>
    <svg width="149" height="143" viewBox="0 0 149 143" fill="none">
      <path
        d="M20.1266 103.959C19.3547 86.9177 63.2179 41.6415 82.592 65.5949C101.203 88.6053 75.2323 98.9876 63.6422 83.5294C52.0522 68.0712 72.8511 52.7843 92.0669 47.6601C107.295 43.5995 124.901 50.8184 124.901 50.8184"
        stroke="#282A31"
        strokeWidth="2"
        strokeDasharray="5 4"
      />
      <path
        d="M133.56 52.5146C134.282 52.2478 134.445 51.2993 133.852 50.8074L125.192 43.6124C124.599 43.1205 123.697 43.4541 123.567 44.2128L121.666 55.3109C121.536 56.0696 122.277 56.6845 122.999 56.4177L133.56 52.5146Z"
        fill="#282A31"
      />
    </svg>
    <p style={{ color: Color.GRAY_8 }}>
      가장 많이 찾으시는 <br /> 플랜이에요.
    </p>
  </Wrap>
);
