import Icon from '@src/components/icon/Icon';
import React from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.button`
  padding: 8px 0;
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 8px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  children: JSX.Element | string | JSX.Element[];
  size?: 13 | 14 | 15 | 18;
  color: string;
  onClick?: (e?) => void;
}
function TextLink({ children, size = 14, color, onClick }) {
  return (
    <LinkWrapper onClick={onClick} style={{ color: color, fontSize: size }}>
      <span>{children}</span>
      <Icon name="RightArrow14" color={color} />
    </LinkWrapper>
  );
}

export default TextLink;
