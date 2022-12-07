import React from 'react';
import styled from 'styled-components';
import { SelectTrigger, ArrowIcon } from './selectorStyle';

const Div = styled.div``;

interface SelectBtnProps {
  onClick: any;
  open: boolean;
  value: string;
  disabled?: boolean;
}

function SelectBtn({ onClick, open, disabled, value }) {
  return (
    <SelectTrigger disabled={disabled} onClick={onClick}>
      {value}
      <ArrowIcon isSelectOpen={open} />
    </SelectTrigger>
  );
}

export default SelectBtn;
