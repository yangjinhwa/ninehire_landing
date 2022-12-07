import Color from '@src/styles/Color';
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import SendRegisterEmailModal from './SendRegisterEmailModal';
import keyCode from '@src/typings/keyCode';
import InputValidMessage from '@src/components/dataDisplay/InputValidMessage/InputValidMessage';
import { validateEmailInput } from '@src/utill/validate';
import { emailRegisterRequestAPI } from '@src/api/api';
import InquiryModal from '../Inquiry/InquiryModal';

const ButtonWrap = styled.div`
  padding: 2px;
  background: linear-gradient(90.26deg, #4c2ed0 67.03%, #833fc7 85.96%, #ba2992 99.88%);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  transition: 0.2s;
  overflow: hidden;

  button {
    padding: 12px 16px;
    color: ${Color.WHITE};
    font-size: 16px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
    }
  }
`;
const EmailInputBase = styled.input`
  width: 100%;
  padding: 0 16px;
  display: flex;

  align-items: center;
  min-height: 50px;
  height: 100%;
  transition: 0.2s;
  border-radius: 6px;
  outline: none;
  background-color: #fff;
  font-size: 16px;
  color: ${Color.PURPLE_7};
  font-weight: 600;

  &:focus {
    .buttonWrap {
      &::before {
        opacity: 1;
      }
    }
  }

  &::placeholder {
    color: ${Color.GRAY_6};
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

const TextBtnSec = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TextInquiryBtn = styled.button`
  margin-top: 6px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s;
  color: ${Color.PURPLE_5};
  font-weight: 700;
  font-size: 14px;

  &:hover {
    background-color: ${Color.PURPLE_3};
    color: ${Color.PURPLE_6};
  }

  @media (max-width: 460px) {
    display: none;
  }
`;
interface Props {
  type?: string;
  block?: boolean;
  maxLength?: number;
  color?: string;
  isValid?: boolean;
  validMessage?: any;
  placeholder?: string;
  inquiryBtn?: boolean;
  inputRef: React.MutableRefObject<HTMLInputElement>;
  startButtonId?: string;
  InquiryButtonId?: string;
  [propsName: string]: any;
}

function EmailInput({
  type = 'text',
  block,
  maxLength = 100,
  color,
  isValid,
  validMessage,
  placeholder = '회사 이메일을 입력해 주세요.',
  inquiryBtn = true,
  inputRef,
  startButtonId,
  InquiryButtonId,
  ...props
}: Props) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState('');
  const [openSendModal, setOpenSendModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const closeSendModal = useCallback(() => setOpenSendModal(false), []);

  const handleClick = useCallback(async () => {
    if (email) {
      const isValid: boolean = validateEmailInput(email);

      if (isValid) {
        try {
          await emailRegisterRequestAPI(email);
          setOpenSendModal(true);
        } catch (err) {
          setIsEmailValid('이미 가입한 이메일입니다.');
        }
      } else {
        setIsEmailValid('올바른 이메일을 입력해 주세요.');
      }
    }
  }, [email]);

  function handleKeyDown(e) {
    const { key } = e;
    if (key === keyCode.ENTER || key === keyCode.TAB) {
      inputRef.current.blur();
      if (email) {
        handleClick();
      }
    }
  }

  const handleEmailChange = useCallback(
    (e: any) => {
      if (!openSendModal) {
        const value: string = e.target.value;
        setIsEmailValid('');
        setEmail(value);
      }
    },
    [openSendModal]
  );

  return (
    <>
      <ButtonWrap className="buttonWrap">
        <EmailInputBase
          ref={inputRef}
          value={email}
          onChange={handleEmailChange}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          onKeyPress={handleKeyDown}
          {...props}
        />
        <button
          onClick={handleClick}
          style={{ wordBreak: 'keep-all' }}
          id={startButtonId}
        >
          무료체험 시작하기
        </button>
        {openSendModal && (
          <SendRegisterEmailModal outsideClick={closeSendModal} data={{ email }} />
        )}
      </ButtonWrap>
      {isEmailValid && <InputValidMessage>{isEmailValid}</InputValidMessage>}

      {inquiryBtn && (
        <TextBtnSec>
          <TextInquiryBtn onClick={() => setOpenModal(true)} id={InquiryButtonId}>
            담당자에게 바로 도입 문의
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              style={{ marginLeft: 12 }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.77742 0.432908C1.38689 0.0423835 0.75373 0.0423836 0.363206 0.432908C-0.0273186 0.823432 -0.0273185 1.4566 0.363206 1.84712L3.5161 5.00001L0.363206 8.15291C-0.0273185 8.54343 -0.0273186 9.1766 0.363206 9.56712C0.75373 9.95765 1.38689 9.95765 1.77742 9.56712L5.63742 5.70712C5.82496 5.51958 5.93031 5.26523 5.93031 5.00001C5.93031 4.7348 5.82496 4.48044 5.63742 4.29291L1.77742 0.432908Z"
                fill={Color.PURPLE_5}
              />
            </svg>
          </TextInquiryBtn>
        </TextBtnSec>
      )}
      {openModal && <InquiryModal onClose={() => setOpenModal(false)} />}
    </>
  );
}

export default EmailInput;
