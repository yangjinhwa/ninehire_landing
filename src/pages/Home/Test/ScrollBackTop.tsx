import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import Color from '@src/styles/Color';
import { motion } from 'framer-motion';

const BackTopButtonWrap = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  style?: any;
}

// heightRate(스크롤이 가장 위일때 0, 가장 아래일때 1)
function calcHeightRate(targetNode?: any) {
  const [heightRate, setHeightRate] = useState(0);

  function calcHeight() {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const heightRate = Math.round((window.pageYOffset / totalHeight) * 100) / 100;
    // console.log(heightRate);
    setHeightRate(heightRate);
  }

  useLayoutEffect(() => {
    document.addEventListener('scroll', calcHeight);

    return () => document.removeEventListener('scroll', calcHeight);
  }, []);

  return heightRate;
}

function ScrollBackTop({ style }: Props) {
  const [showScroll, setShowScroll] = useState(false);
  const heightRate = calcHeightRate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    console.log(heightRate);
  }, []);

  return (
    <BackTopButtonWrap style={style} onClick={scrollTop}>
      <motion.svg width="72" height="73" viewBox="0 0 72 73" fill="none">
        <motion.path
          d="M36.0161 69.2383L3.01611 36.2379L36.0161 3.23828L69.0161 36.2379L36.0161 69.2383Z"
          style={{
            stroke: Color.GRAY_4,
            strokeWidth: 2,
          }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, pathSpacing: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M36.0161 69.2383L3.01611 36.2379L36.0161 3.23828L69.0161 36.2379L36.0161 69.2383Z"
          style={{
            stroke: Color.GRAY_8,
            strokeWidth: 2,
          }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: heightRate }}
          transition={{ duration: 0.2 }}
        />
        <foreignObject
          style={{
            height: 72,
            width: 72,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              color: Color.GRAY_8,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Up
          </div>
        </foreignObject>
      </motion.svg>
    </BackTopButtonWrap>
  );
}

export default ScrollBackTop;
