import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #e6ebee;
  background: #f9f9f9;
  padding: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 16px;
  border-radius: 3px;
  width: fit-content;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;

const TabBar = styled.div<{ checked: boolean }>`
  position: relative;
  width: 0;
  height: 0;
  top: -16px;
  left: ${({ checked }) => (checked ? '0px' : '71px')};
  transition: 0.2s;
`;

const Tab = styled.div<{ checked: boolean }>`
  transition: 0.2s;
  width: ${({ checked }) => (checked ? '71px' : '86px')};
  height: 32px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
`;

interface Props {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

function Switch({ checked, onChange }: Props) {
  return (
    <Container>
      <TabBar checked={checked}>
        <Tab checked={checked} />
      </TabBar>
      <Wrapper onClick={() => onChange(true)} style={{ marginRight: 4 }}>
        <Body size={13} bold style={{ color: checked ? '#18191D' : '#666872' }}>
          월 가격
        </Body>
      </Wrapper>
      <Wrapper onClick={() => onChange(false)}>
        <Body size={13} bold style={{ color: !checked ? '#18191D' : '#666872' }}>
          연 결제 시
        </Body>
      </Wrapper>
    </Container>
  );
}

export default memo(Switch);
