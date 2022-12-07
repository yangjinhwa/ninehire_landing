import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { animate, motion, useMotionValue } from 'framer-motion';
import Color from '@src/styles/Color';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const DragBox = styled(motion.div)`
  display: flex;
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ControlBtn = styled(motion.div)`
  margin-left: 10px;
  border-radius: 12px;
`;

type Props = {
  children: React.ReactNode;
  autoPlay?: boolean;
  maxBtnCount?: number;
};

function Carousel({ children, autoPlay, maxBtnCount = 3 }: Props) {
  const [current, setCurrent] = useState(0);
  const count = React.Children.count(children);
  const value = useMotionValue(0);

  // @ts-ignore
  const arr = [...Array(count).keys()].map((el) => el * -200);

  const makeWidth = (index: number) => {
    if (current === 0 || current === arr.length - 1) {
      if (Math.abs(current - index) < maxBtnCount) return 25;
      if (Math.abs(current - index) === maxBtnCount) return 7;
      else return 0;
    } else {
      if (Math.abs(current - index) < maxBtnCount - 1) return 25;
      if (Math.abs(current - index) === maxBtnCount - 1) return 7;
      else return 0;
    }
  };

  function onDragEnd() {
    const goal = value.get();
    const output = arr.reduce((prev, curr) =>
      Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
    );

    animate(value, output);
    const currentIndex = arr.indexOf(output);
    setCurrent(currentIndex < 0 ? arr.length + currentIndex : currentIndex);
  }

  function handleClickBtn(index) {
    console.log(index);
    setCurrent(index);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <DragBox
            drag="x"
            style={{ x: value, scrollSnapType: 'x mandatory' }}
            dragConstraints={{ left: -600, right: 0 }}
            onDragEnd={onDragEnd}
          >
            {Children.map(children, (el) => (
              <motion.div>{el}</motion.div>
            ))}
          </DragBox>
        </Wrapper>
      </Container>
      <ControlBox>
        {arr.map((_item, index) => (
          <ControlBtn
            key={index}
            animate={{
              width: makeWidth(index),
              background: index === current ? Color.BLUE_8 : Color.GRAY_6,
              height: 7,
            }}
            onClick={() => handleClickBtn(index)}
          />
        ))}
      </ControlBox>
    </>
  );
}

export default Carousel;
