import React, { Children } from 'react';

import styled from 'styled-components';
import OnviewAniWrapper from './OnviewAniWrapper';
import { onviewAniDirectionMap } from './OnviewAniWrapper';

type OnviewAniStaggerProps = {
  children: JSX.Element[];
  direction?: keyof typeof onviewAniDirectionMap;
  forced?: boolean;
  block?: boolean;
};

function OnviewAniStagger({
  children,
  direction = 'slideUp',
  forced,
  block,
}: OnviewAniStaggerProps) {
  return (
    <>
      {Children.map(children, (child, index) => (
        <OnviewAniWrapper
          key={index}
          delay={index / 10}
          direction={direction}
          forced={forced}
          block={block}
        >
          {child}
        </OnviewAniWrapper>
      ))}
    </>
  );
}

export default OnviewAniStagger;
