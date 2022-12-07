import React, { useCallback, useEffect, useState } from 'react';

import ModalWrapper from '@src/components/wrapper/ModalWrapper';

import { validateEmailInput } from '@src/utill/validate';
import { inquiryAPI } from '@src/api/api';

import InquirySec from './InquirySec';

interface Props {
  onClose: () => void;
}

function InquiryModal({ onClose }: Props) {
  return (
    <>
      <ModalWrapper outsideClick={onClose}>
        <InquirySec />
      </ModalWrapper>
    </>
  );
}

export default InquiryModal;
