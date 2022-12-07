import React, { ReactEventHandler, ReactElement } from 'react';
import styled from 'styled-components';
import RadioBase from '../RadioStyle';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

const Label = styled.label`
  margin-left: 8px;
  transition: all 0.2s;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

interface RadioProps {
  value: string;
  onChange: ReactEventHandler | undefined;
  checked?: boolean;
  name?: string;
  id?: string;
  children?: ReactElement | string | undefined;
  defaultChecked?: boolean;
  disabled?: boolean;
}

function Radio(props: RadioProps) {
  const {
    checked,
    name,
    disabled,
    value,
    id = value,
    onChange,
    defaultChecked,
    children,
  } = props;

  return (
    <Wrapper>
      <RadioBase
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {children && <Label htmlFor={id}>{children}</Label>}
    </Wrapper>
  );
}

export default Radio;
