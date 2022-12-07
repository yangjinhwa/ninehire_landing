import React, { ReactElement, useState, ReactEventHandler } from 'react';
import styled from 'styled-components';
import CheckboxBase from '../CheckboxStyle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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

interface CheckboxProps {
  value: string;
  onChange: ReactEventHandler | undefined;
  checked?: boolean;
  name?: string;
  id?: string;
  children?: ReactElement | string | undefined;
  defaultChecked?: boolean;
  disabled?: boolean;
}

function Checkbox({
  checked,
  name,
  disabled,
  value,
  id = value,
  onChange,
  defaultChecked,
  children,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleOnChange(e: any) {
    setIsChecked(!isChecked);
    onChange?.(e);
  }
  return (
    <Wrapper>
      <CheckboxBase
        id={id}
        name={name}
        value={value}
        onChange={handleOnChange}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
      />
      {children && <Label htmlFor={id}>{children}</Label>}
    </Wrapper>
  );
}

export default Checkbox;
