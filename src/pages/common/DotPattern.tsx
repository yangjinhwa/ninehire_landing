import React from 'react';
import styled from 'styled-components';

const DotsSvg = styled.svg`
  @media (max-width: 520px) {
    display: none;
  }
`;

interface Props {
  style?: React.CSSProperties;
}
function DotPattern({ style }: Props) {
  return (
    <DotsSvg
      width="154"
      height="218"
      viewBox="0 0 154 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g clipPath="url(#clip0_1920_77687)">
        <ellipse cx="2.37063" cy="2.02824" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="32.0291" cy="2.02824" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="61.6876" cy="2.02824" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="91.346" cy="2.02824" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="121.004" cy="2.02824" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="150.663" cy="2.02824" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="2.37063" cy="37.5527" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="2.37063" cy="73.0761" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="2.37063" cy="108.601" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="2.37063" cy="144.125" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="2.37063" cy="179.648" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="2.37063" cy="215.173" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="32.0291" cy="37.5527" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="32.0291" cy="73.0761" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="32.0291" cy="108.601" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="32.0291" cy="144.125" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="32.0291" cy="179.649" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="32.0291" cy="215.173" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="61.6876" cy="37.5527" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="61.6876" cy="73.0761" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="61.6876" cy="108.601" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="61.6876" cy="144.125" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="61.6876" cy="179.649" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="61.6876" cy="215.173" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="91.346" cy="37.5527" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="91.346" cy="73.0761" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="91.346" cy="108.601" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="91.346" cy="144.125" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="91.346" cy="179.649" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="91.346" cy="215.173" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="121.004" cy="37.5527" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="121.004" cy="73.0761" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="121.004" cy="108.601" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="121.004" cy="144.125" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="121.004" cy="179.649" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="121.004" cy="215.173" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="150.663" cy="37.5527" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="150.663" cy="73.0761" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="150.663" cy="108.601" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="150.663" cy="144.125" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="150.663" cy="179.649" rx="2.0884" ry="2.02824" fill="#BABCC5" />
        <ellipse cx="150.663" cy="215.173" rx="2.0884" ry="2.02824" fill="#BABCC5" />
      </g>
      <defs>
        <clipPath id="clip0_1920_77687">
          <rect width="153" height="218" fill="white" transform="translate(0.282227)" />
        </clipPath>
      </defs>
    </DotsSvg>
  );
}

export default DotPattern;
