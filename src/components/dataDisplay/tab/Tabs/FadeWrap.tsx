import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Theme from "@src/styles/Theme";

const ItemEnter = keyframes`
  0%{
    transform: translateY(-15%);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

const ItemExit = keyframes`
  0%{
    transform: translateY(0);
    opacity: 1;
  }
  100%{
    transform: translateY(-55%);
    opacity: 0;
  }
`;

const Wrapper = styled.div<{
  show: boolean;
}>`
  transition: all 1s ease-in-out;
  transform-origin: top center;
  animation: 0.5s ${Theme.animation.content_cubic_bezier} both alternate
    ${({ show }) => (show ? ItemEnter : ItemExit)};
`;

type FadeWrapProps = {
  show: boolean;
  children: (JSX.Element | undefined)[] | (JSX.Element | undefined);
};

function FadeWrap({ show, children }: FadeWrapProps) {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setRender(false);
    }
  };

  return shouldRender ? (
    <Wrapper show={show} onAnimationEnd={onAnimationEnd}>
      {children}
    </Wrapper>
  ) : null;
}

export default FadeWrap;
