import { inquiryAPI } from '@src/api/api';
import MaskTitle from '@src/components/dataDisplay/title/MaskTitle';
import Button from '@src/components/dataEntry/button/Button';
import TextInput from '@src/components/dataEntry/Input/TextInput/TextInput';
import { Select } from '@src/components/dataEntry/select/Select';
import AutoTextarea from '@src/components/dataEntry/textarea/AutoTextarea/AutoTextarea';
import { useInputs } from '@src/hooks/useInputs';
import Color from '@src/styles/Color';
import { validateEmailInput } from '@src/utill/validate';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import SubmitConfirmModal from './SubmitConfirmModal';
import MobileBr from '@src/pages/common/MobileBr';
import { AskBtnIdMap } from '@src/typings/idMap';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${Color.GRAY_8};
  position: relative;
`;
const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${Color.GRAY_8};

  @media (max-width: 430px) {
    /* padding-bottom: 80px; */
  }
`;
const ButtonWrap = styled.div`
  width: 100%;
  padding: 24px 0;

  @media (max-width: 430px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${Color.WHITE};
    padding: 20px 16px;
    border-top: 1px solid ${Color.PURPLE_GRAY_3};
  }
`;

const companySizeMap = [
  {
    key: '0',
    value: '1-20명',
  },
  {
    key: '1',
    value: '21-50명',
  },
  {
    key: '2',
    value: '51-100명',
  },
  {
    key: '3',
    value: '101-250명',
  },
  {
    key: '4',
    value: '251-500명',
  },
  {
    key: '5',
    value: '500-1000명',
  },
  {
    key: '56',
    value: '1000-10000명',
  },
  {
    key: '7',
    value: '10000명 이상',
  },
];

const channels = [
  '구글 검색',
  '구글 광고',
  '네이버 검색',
  '네이버 광고',
  '네이버 블로그',
  'SNS (페이스북, 인스타그램 등)',
  '언론/보도자료',
  '지인소개',
  '기타',
];

function InquirySec() {
  const [{ name, company, description, phoneNumber }, handleChange, reset] = useInputs({
    name: '',
    company: '',
    description: '',
    phoneNumber: '',
  });
  const [selectedValue, setSelectedValue] = useState('1-20명');
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubmitPending, setIsSubmitPending] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [submitConfirmModalOpen, setSubmitConfirmModal] = useState(false);

  function handleSubmit() {
    const newData = {
      email,
      customerName: name,
      companyName: company,
      phoneNumber,
      content: description,
      companyScale: selectedValue,
      channel: selectedChannel ? selectedChannel : '',
    };
    setIsSubmitPending(true);

    inquiryAPI(newData).then(() => {
      setSubmitConfirmModal(true);
      setIsSubmitPending(false);
    });
  }

  const handleEmailChange = useCallback((e: any) => {
    const value: string = e.target.value;
    const isValid: boolean = validateEmailInput(value);
    setIsEmailValid(!isValid);
    setEmail(value);
  }, []);

  useEffect(() => {
    setDisabledBtn(!(email && name && company && description && phoneNumber));
  }, [email, name, company, description, phoneNumber]);

  const closeConfirmModal = useCallback(() => {
    setSubmitConfirmModal(false);
  }, []);

  return (
    <>
      <Container>
        <Contents>
          {/* <MaskTitle
            color={Color.PurpleGradient}
            style={{ fontSize: 36, marginBottom: 8 }}
          >
            도입 문의
          </MaskTitle>
          <p style={{ marginBottom: 32, color: Color.GRAY_7 }}>
            도입문의를 남겨주시면 담당 컨설턴트가 <MobileBr /> 빠르게 연락드리겠습니다.
          </p> */}
          <TextInput
            style={{ marginBottom: 24 }}
            label="회사 이메일"
            placeholder="example@ninehire.com"
            value={email}
            onChange={handleEmailChange}
            name="email"
            isValid={isEmailValid}
            validMessage="올바르지 않은 이메일 형식입니다."
            required
          />

          <TextInput
            style={{ marginBottom: 24 }}
            label="담당자 이름"
            placeholder="성함"
            value={name}
            onChange={handleChange}
            name="name"
            required
          />
          <TextInput
            style={{ marginBottom: 24 }}
            label="연락처"
            placeholder="전화번호"
            value={phoneNumber}
            onChange={(e) => {
              const regEx = /[^0-9]/g;
              e.target.value = e.target.value.replace(regEx, '');

              handleChange(e);
            }}
            name="phoneNumber"
            required
          />
          <TextInput
            style={{ marginBottom: 24 }}
            label="회사명"
            placeholder="회사명"
            value={company}
            onChange={handleChange}
            name="company"
            required
          />
          <Select
            style={{ marginBottom: 24 }}
            width={'100%'}
            label="회사 규모"
            selectList={companySizeMap}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            maxHeight={170}
          />
          <Select
            style={{ marginBottom: 24 }}
            width={'100%'}
            label="나인하이어를 접한곳"
            selectList={channels.map((channel) => ({ key: channel, value: channel }))}
            selectedValue={selectedChannel}
            setSelectedValue={setSelectedChannel}
            placeholder="나인하이어를 접한곳을 선택해주세요"
            maxHeight={170}
          />
          <AutoTextarea
            required
            label="문의 내용"
            placeholder="나인하이어 제품 또는 팀에 궁금한 것이 있으신가요? 채용 시 불편한 점을 이야기해 주시면 빠르게 해결하겠습니다."
            value={description}
            onChange={handleChange}
            name="description"
            minRows={3}
            maxRows={3}
            maxLength={2000}
          />
        </Contents>
        <ButtonWrap>
          <Button
            id={AskBtnIdMap.ASK}
            block
            disabled={disabledBtn}
            onClick={handleSubmit}
            color="primary"
            pending={isSubmitPending}
          >
            문의 보내기
          </Button>
        </ButtonWrap>
      </Container>

      {submitConfirmModalOpen && (
        <SubmitConfirmModal outsideClick={closeConfirmModal} email={email} />
      )}
    </>
  );
}

export default InquirySec;
