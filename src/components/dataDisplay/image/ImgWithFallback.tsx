import React from 'react';
import styled from 'styled-components';

const Div = styled.div``;

function ImgWithFallback({ src, fallback, type = 'image/webp', ...delegated }) {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} />
    </picture>
  );
}

export default ImgWithFallback;
