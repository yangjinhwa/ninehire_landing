import React from 'react';
import styled from 'styled-components';

import ModalWrapper from '@src/components/wrapper/ModalWrapper';
import Button from '@src/components/dataEntry/button/Button';
import Color from '@src/styles/Color';

const EmailSec = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${Color.BLUE_GRAY_1};
  margin: 24px 0;
  font-weight: 700;
`;

function SubmitConfirmModal({ outsideClick, email }) {
  return (
    <ModalWrapper outsideClick={outsideClick}>
      <>
        <h5 style={{ marginBottom: 24 }}>
          <strong>문의가 정상적으로 접수되었습니다!</strong>
        </h5>
        <p>
          나인하이어 팀이 빠르게 확인 후 <br /> 아래 이메일로 답장드리겠습니다.
          <EmailSec>{email}</EmailSec>
        </p>
        <Button block color="primary" onClick={outsideClick}>
          확인
        </Button>
      </>
    </ModalWrapper>
  );
}

export default SubmitConfirmModal;
