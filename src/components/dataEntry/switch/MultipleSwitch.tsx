import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Color from '@src/styles/Color';
import { isIE } from 'react-device-detect';

const ToggleWrap = styled.div<{
  isChecked?: boolean;
  disabled?: boolean;
}>`
  width: fit-content;
  height: 32px;
  display: flex;
  border-radius: 50px;
  padding: 2px;
  justify-content: ${({ isChecked }) => (isChecked ? 'flex-end' : 'flex-start')};
  transition: background 0.2s;
  background: ${({ isChecked }) => (isChecked ? Color.PURPLE_6 : Color.GRAY_4)};
  opacity: ${({ disabled }) => (disabled ? 0.6 : '')};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const Item = styled.div`
  padding: 6px;
`;

const ToggleCircle = styled(motion.div)`
  width: 18px;
  height: 18px;
  background-color: ${Color.WHITE};
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;

const switchMap = {
  On: {
    enabled: Color.BLUE_8,
    disabled: Color.BLUE_6,
  },
  Off: {
    enabled: Color.GRAY_4,
    disabled: Color.GRAY_3,
  },
};

type switchType = {
  handleSwitch: any;
  setSelectedKey: any;
  list: { key: string; value: string }[];
  disabled?: boolean;
};

function MultipleSwitch({
  setSelectedKey,
  list,
  handleSwitch,
  disabled = false,
}: switchType) {
  const constraintsRef = useRef(null);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 35,
  };

  function toggleSwitch() {
    !disabled && handleSwitch();
  }

  return (
    <ToggleWrap ref={constraintsRef} onClick={toggleSwitch} disabled={disabled}>
      <ToggleCircle
        layout
        transition={spring}
        whileTap={{ width: 24, borderRadius: '50px' }}
        drag="x"
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragMomentum={false}
        dragElastic={0}
        onDragEnd={toggleSwitch}
        dragTransition={{ bounceStiffness: 0, bounceDamping: 0 }}
      />
      {list.map((item, index) => {
        return <Item key={index}>{item.value}</Item>;
      })}
    </ToggleWrap>
  );
}

export default MultipleSwitch;
