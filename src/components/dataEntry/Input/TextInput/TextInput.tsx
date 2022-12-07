import React from 'react';
import InputBase from '../InputStyle';

import styled from 'styled-components';
import InputValidMessage from '@src/components/dataDisplay/InputValidMessage/InputValidMessage';
import Label from '../Label/Label';

export interface TextInputProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string | undefined;
  shape?: string;
  color?: string;
  type?: string;
  maxLength?: number;
  isValid?: boolean;
  validMessage?: string;
  block?: boolean;
  placeholder?: string;
  label?: string;
  required?: boolean;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  min?: number;
  max?: number;
  width?: number;
  disabled?: boolean;
  style?: any;
  [propName: string]: any;
}

function TextInput({
  value,
  onChange,
  type = 'text',
  name,
  maxLength = 100,
  color,
  isValid,
  validMessage,
  placeholder,
  onKeyPress,
  label,
  required,
  width,
  min,
  max,
  disabled,
  style,
}: TextInputProps) {
  return (
    <div style={{ width: `${width || '100%'}`, ...style }}>
      {label && <Label required={required}>{label}</Label>}
      <InputBase
        style={{ width: `${width || '100%'}` }}
        type={type}
        color={color}
        maxLength={maxLength}
        isValid={isValid}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        min={min}
        max={max}
        disabled={disabled}
      />
      {isValid && validMessage && <InputValidMessage>{validMessage}</InputValidMessage>}
    </div>
  );
}

export default React.memo(TextInput);
