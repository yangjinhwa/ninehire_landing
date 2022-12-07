import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React from 'react';
import styled from 'styled-components';
import Icon from '@src/components/icon/Icon';

const ButtonWrap = styled.button`
  min-height: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${Color.PURPLE_2};
  border: 1px solid ${Color.PURPLE_4};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 12px;
  transition: 0.2s;
  color: ${Color.PURPLE_6};
  font-size: 14px;

  > * + * {
    margin-left: 8px;
  }

  &:hover {
    border: 1px solid ${Color.PURPLE_6};
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface Props {
  onClick?: (e?) => void;
  children: JSX.Element | string | JSX.Element[];
  id?: string;
}

function GoNextBtn({ onClick, children, id }: Props) {
  return (
    <ButtonWrap onClick={onClick} id={id}>
      {children}
      <Icon name="RightArrow14" color={Color.PURPLE_6} />
    </ButtonWrap>
  );
}

export default GoNextBtn;
