import Color from '@src/styles/Color';
import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

import InputValidMessage from '@src/components/dataDisplay/InputValidMessage/InputValidMessage';
import EyeCloseIcon from '@src/components/dataDisplay/Icons/EyeCloseIcon';
import EyeIcon from '@src/components/dataDisplay/Icons/EyeIcon';
import { baseInputStyle, defaultInputStyle, validInputStyle } from '../InputStyle';

const PasswordInputBase = styled.div<{
  isValid?: boolean;
  disabled?: boolean;
  block?: boolean;
  isFocus?: boolean;
}>`
  ${({ isValid }) => (!isValid ? defaultInputStyle : validInputStyle)};
  width: ${({ block }) => block && '100%'};
  ${baseInputStyle}
`;

const TogglePasswordTypeBtn = styled.button`
  padding: 4px;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    background-color: ${Color.GRAY_3};
  }
`;

interface PasswordInputProps {
  isValid?: boolean;
  validMessage?: string;
  maxLength?: number;
  disabled?: boolean;
  [propName: string]: any;
}

function PasswordInput(props: PasswordInputProps) {
  const { isValid, validMessage, maxLength = 100, disabled } = props;
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = useCallback(() => setIsFocus(true), []);
  const handleBlur = useCallback(() => setIsFocus(false), []);
  const togglePasswordShow = () => setIsPasswordShow(!isPasswordShow);

  return (
    <>
      <PasswordInputBase isValid={isValid} disabled={disabled} isFocus={isFocus}>
        <input
          type={!isPasswordShow ? 'password' : 'text'}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        <TogglePasswordTypeBtn onClick={togglePasswordShow}>
          {isPasswordShow ? <EyeIcon /> : <EyeCloseIcon />}
        </TogglePasswordTypeBtn>
      </PasswordInputBase>

      {isValid && validMessage && <InputValidMessage>{validMessage}</InputValidMessage>}
    </>
  );
}

export default PasswordInput;
