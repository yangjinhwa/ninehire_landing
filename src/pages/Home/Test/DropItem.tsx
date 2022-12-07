import Color from '@src/styles/Color';
import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  padding: 12px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  &:hover {
    background-color: ${Color.BLUE_GRAY_1};
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
`;

function DropItem({ data, ...props }, ref) {
  const [isHover, setIsHover] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handleMouseOver() {
    setIsEdit(true);
  }

  return (
    <ItemWrapper
      ref={ref}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      {data.value}
      {isHover && (
        <ButtonWrap>
          <button>수정</button>
          <button>삭제</button>
        </ButtonWrap>
      )}
    </ItemWrapper>
  );
}

export default forwardRef(DropItem);
