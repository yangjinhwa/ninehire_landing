import React, { useCallback, useEffect, useState } from 'react';

import ModalWrapper from '@src/components/wrapper/ModalWrapper';
import styled from 'styled-components';
import Icon from '@src/components/icon/Icon';
import Logo from '@assets/images/Home/logo/logo.gif';
import Image from 'react-image-webp';
import Color from '@src/styles/Color';
import DynamicInput from '@src/components/dataEntry/Input/DynamicInput/DynamicInput';
import Button from '@src/components/dataEntry/button/Button';
import IconButton from '@src/components/icon/IconButton';
import { emailRegisterRequestAPI } from '@src/api/api';
import { RegisterIdMap } from '@src/typings/idMap';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h6`
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 4px;
`;

const Description = styled.span`
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  color: ${Color.GRAY_7};
  white-space: pre-line;
  margin-bottom: 24px;
`;

const Guide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 8px;
  z-index: 10;
  font-size: 14px;
  a {
    font-weight: bold;
    font-size: 14px;
    line-height: 130%;
    padding-left: 24px;
    color: ${Color.PURPLE_6};
    cursor: pointer;
    text-decoration: none;
  }
`;

interface Props {
  onClose: () => void;
}

const emailValidationRegex =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,10}$/i;

function RegisterModal({ onClose }: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function onChange(e: any) {
    if (emailValidationRegex.test(value)) setError(null);
    setValue(e.target.value);
  }

  async function submit() {
    try {
      if (emailValidationRegex.test(value)) {
        await emailRegisterRequestAPI(value);
        onClose();
        window.open(`https://app.ninehire.com/register/confirm?email=${value}`);
      } else return setError('????????? ????????? ???????????? ????????????.');
    } catch (error) {
      setError('?????? ????????? ??????????????????. ?????? ???????????? ????????? ?????????.');
    }
  }

  return (
    <>
      <ModalWrapper outsideClick={onClose} contentStyle={{ padding: '24px 32px' }}>
        <Container>
          <CloseButtonWrapper>
            <IconButton icon="X14" onClick={onClose} size="sm" />
          </CloseButtonWrapper>
          <Image src={Logo} webp={Logo} width={56} height={56} />
          <Title>?????? ?????? ????????????</Title>
          <Description>
            {`???????????? ???????????? ????????????
?????? ?????? ?????????????????? ??????????????????.`}
          </Description>
          <DynamicInput
            placeholder="?????????"
            value={value}
            icon={{ position: 'left', image: <Icon name="Email18" /> }}
            onChange={onChange}
            error={error}
            onEnter={submit}
          />
          <Button
            id={RegisterIdMap.SIGNUP}
            color="primary"
            style={{ marginTop: 24, width: '100%' }}
            onClick={submit}
          >
            ????????????
          </Button>
          <Guide>
            <span>?????? ????????? ????????????????</span>
            <a id={RegisterIdMap.LOGIN} href="https://app.ninehire.com/login">
              ?????????
            </a>
          </Guide>
        </Container>
      </ModalWrapper>
    </>
  );
}

export default RegisterModal;
