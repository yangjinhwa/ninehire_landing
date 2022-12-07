import Color from '@src/styles/Color';
import React, { ReactEventHandler } from 'react';
import styled, { css } from 'styled-components';
import RadioBase from '../RadioStyle';

const WrapLabel = styled.label<{
  isChecked?: boolean;
}>`
  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${({ isChecked }) => (isChecked ? Color.GRAY_9 : Color.GRAY_4)};
  background-color: ${Color.GRAY_2};

  display: grid;
  grid-template-columns: 32px auto;
  align-items: center;
  border: 1px solid ${({ isChecked }) => isChecked && Color.GRAY_8};

  &:hover {
    cursor: pointer;
  }
`;

const CustomLabel = styled.span<{
  grid?: number;
}>`
  width: 100%;
  display: grid;

  ${({ grid }) => {
    if (grid === 2) {
      return css`
        grid-template-columns: 1fr 4fr;
        grid-gap: 12px;
        align-items: center;
      `;
    }
    if (grid === 3) {
      return css`
        grid-template-columns: 1fr 2fr 2fr;
        grid-gap: 12px;
        align-items: center;
      `;
    }
  }}
`;

interface RadioBoxProps {
  value: string;
  onChange: ReactEventHandler | undefined;
  checked?: boolean;
  name?: string;
  id?: string;
  children?: any | undefined;
  defaultChecked?: boolean;
  disabled?: boolean;
  grid?: number;
}

function RadioBox(props: RadioBoxProps) {
  const {
    checked,
    name,
    disabled,
    value,
    id = value,
    onChange,
    defaultChecked,
    children,
    grid = 2,
  } = props;

  return (
    <>
      <WrapLabel htmlFor={id} isChecked={checked}>
        <RadioBase
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        <CustomLabel grid={grid}>{children}</CustomLabel>
      </WrapLabel>
    </>
  );
}

export default RadioBox;
