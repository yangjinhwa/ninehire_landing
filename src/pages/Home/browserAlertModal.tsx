import React from 'react';
import styled from 'styled-components';

import ModalWrapper from '@src/components/wrapper/ModalWrapper';
import Button from '@src/components/dataEntry/button/Button';
import Color from '@src/styles/Color';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoSec = styled.div`
  background-color: ${Color.BLUE_GRAY_2};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
`;

const InfoUl = styled.ul`
  text-align: left;

  & li {
    list-style: inside;
    padding: 4px 0;
  }
`;

function BrowserAlertModal({ open, close, browserName }) {
  return (
    open && (
      <ModalWrapper outsideClick={close}>
        <Contents>
          <div style={{ marginBottom: 16 }}>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="34.9998" cy="34.9879" r="34.9669" fill="#F2584E" />
              <circle cx="35" cy="48.6211" r="5.24606" fill="white" />
              <path
                d="M30.4826 19.2769C30.386 17.5566 31.7549 16.1086 33.4779 16.1086H37.063C38.7896 16.1086 40.1599 17.5625 40.0578 19.2861L39.0373 36.5125C38.9434 38.0976 37.6305 39.335 36.0425 39.335H34.4453C32.8538 39.335 31.5393 38.0923 31.45 36.5033L30.4826 19.2769Z"
                fill="white"
              />
            </svg>
          </div>
          <h5 style={{ marginBottom: 16, lineHeight: 1.3 }}>
            지원하지 않는 브라우저이거나 <br />
            업데이트가 필요합니다.
          </h5>
          <p style={{ marginBottom: 16 }}>
            현재 브라우저는
            <strong>
              '{browserName === 'IE' ? 'Internet Explorer' : browserName}'
            </strong>{' '}
            이며 <br />
            아래 최적화된 브라우저 이용을 권장합니다.
          </p>
          <InfoSec>
            <InfoUl>
              <li>Chrome</li>
              <li>Safari 14이상</li>
              <li>Firefox</li>
              <li>Microsoft Edge</li>
            </InfoUl>
          </InfoSec>
          <Button onClick={close}>확인</Button>
        </Contents>
      </ModalWrapper>
    )
  );
}

export default BrowserAlertModal;
