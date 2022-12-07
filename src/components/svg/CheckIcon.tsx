import React from 'react';
import styled from 'styled-components';

export const CheckIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.27893 10.8631L10.2751 17.626L19.7211 6.97211"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
