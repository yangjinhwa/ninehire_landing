import Color from '@src/styles/Color';
import React, {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div<{
  focused: boolean;
  disabled?: boolean;
  background?: string;
  error?: boolean | string;
}>`
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  border: 1px solid ${Color.BLUE_GRAY_3};
  background: ${Color.GRAY_2};
  border-radius: 6px;
  width: 100%;
  padding: ${(props) =>
    props.error ? '12px 15px' : props.focused ? '11px 14px' : '12px 15px'};
  display: flex;
  align-items: center;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    sans-serif;
  border: ${(props) =>
    props.error
      ? `1px solid ${Color.RED_6}`
      : props.focused && `2px solid ${Color.GRAY_7}`};
  :hover {
    border: ${(props) =>
      props.disabled
        ? `1px solid ${Color.BLUE_GRAY_3}`
        : props.error
        ? `1px solid ${Color.RED_6}`
        : !props.focused && `1px solid ${Color.GRAY_7}`};
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    & + span {
      transform: scale(0.75) !important;
    }
    box-shadow: ${(props) =>
      props.background
        ? `0 0 0 30px ${props.background} inset`
        : `0 0 0 30px ${Color.GRAY_2} inset`} !important;
  }
  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid ${Color.BLUE_GRAY_3};
      color: ${Color.GRAY_6};
    `}
`;

const Wrapper = styled.div`
  position: relative;
  & + & {
    margin-left: 8px;
  }
`;

const Placeholder = styled.span<{
  focused: boolean;
  value: string;
  error: string | boolean;
}>`
  font-size: 14px;
  font-weight: 700;
  color: ${Color.GRAY_6};
  display: block;
  position: absolute;
  top: 2;
  transform: translateY(9px);
  pointer-events: none;
  transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
  transform-origin: top left;
  color: ${(props) => props.error && `${Color.RED_6}`};
  ${(props) =>
    (props.focused || props.value) &&
    css`
      transform: scale(0.75);
    `};
`;

const Input = styled.input`
  width: 100%;
  border: none;
  -webkit-apperance: none !important;
  -moz-apperance: none;
  box-shadow: none !important;
  background: ${Color.GRAY_2};
  font-size: 14px;
  outline: none;
  padding: 10px 0 0 0;
  min-height: 36px;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    sans-serif;
  :disabled {
    color: ${Color.GRAY_6} !important;
  }
`;

const Error = styled.span`
  padding: 6px 0 0 16px;
  color: ${Color.RED_6};
  font-size: 12px;
  margin-right: auto;
  margin-top: 2px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: ${Color.GRAY_3};
  }
`;

interface Props {
  icon?: {
    position: 'left' | 'right';
    image: ReactElement;
  };
  placeholder: string;
  value: string;
  onChange?: (e: any) => void;
  maxLength?: number;
  name?: string;
  onBlur?: () => void;
  error?: boolean | string;
  password?: boolean;
  affix?: {
    type: 'button' | 'text';
    content: string | ReactElement;
    disabled?: boolean;
    loading?: boolean;
    onClick?: any;
  };
  disabled?: boolean;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  autoComplete?: boolean;
  focusingTrigger?: boolean;
  className?: string;
  onEnter?: () => void;
}

const DynamicInput = ({
  name,
  icon,
  placeholder,
  value,
  onChange,
  maxLength,
  onBlur,
  error,
  password,
  affix,
  disabled,
  style,
  inputStyle,
  autoComplete,
  focusingTrigger,
  className,
  onEnter,
}: Props) => {
  const ref = useRef<HTMLInputElement>();
  const [focused, setFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const errCheck = useCallback(() => {
    setFocused(false);
    onBlur && onBlur();
  }, []);

  useEffect(() => {
    if (focusingTrigger) ref.current?.focus();
  }, [focusingTrigger]);

  return password ? (
    <InputWrapper>
      <Container focused={focused} error={error} disabled={disabled} style={style}>
        {icon?.position === 'left' && <Wrapper>{icon.image}</Wrapper>}
        <Wrapper style={{ width: '100%' }}>
          <Input
            className={className}
            ref={ref}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={errCheck}
            maxLength={maxLength}
            type={passwordVisible ? 'text' : 'password'}
            autoComplete={!autoComplete && 'off'}
            disabled={disabled}
            style={inputStyle}
            placeholder=" "
            onKeyDown={(e) => {
              e.key == 'Enter' && onEnter && onEnter();
            }}
          />
          {!autoComplete && (
            <input
              type="password"
              autoComplete="new-password"
              style={{ display: 'none' }}
            />
          )}

          <Placeholder value={value} focused={focused} error={error}>
            {placeholder}
          </Placeholder>
        </Wrapper>
      </Container>
      {error && typeof error == 'string' && <Error>{error}</Error>}
    </InputWrapper>
  ) : (
    <InputWrapper>
      <Container focused={focused} error={error} disabled={disabled} style={style}>
        {icon?.position === 'left' && <Wrapper>{icon.image}</Wrapper>}
        <Wrapper style={{ width: '100%' }}>
          <Input
            className={className}
            ref={ref}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={errCheck}
            maxLength={maxLength}
            disabled={disabled}
            type="text"
            style={inputStyle}
            autoComplete={!autoComplete && 'off'}
            placeholder=" "
            onKeyDown={(e) => {
              e.key == 'Enter' && onEnter && onEnter();
            }}
          />
          {!autoComplete && (
            <input
              type="password"
              autoComplete="new-password"
              style={{ display: 'none' }}
            />
          )}
          <Placeholder value={value} focused={focused} error={error}>
            {placeholder}
          </Placeholder>
        </Wrapper>
      </Container>
      {error && typeof error == 'string' && <Error>{error}</Error>}
    </InputWrapper>
  );
};

export default React.memo(DynamicInput);
