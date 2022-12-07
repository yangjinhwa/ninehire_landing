import { css, createGlobalStyle } from 'styled-components';

export const Reset = css`
  // -----------------------------------------------
  //
  //     브라우저 기본 style 제거
  //
  // ---------------------------------------------
  //     모든 엘리멘트들의 마진, 패딩, 보더 제거
  //     박스 사이징 설정을 상속받게 설정 (html의 속성을 받게)
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  button,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hr,
  html,
  i,
  iframe,
  img,
  input,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  textarea,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    border: 0;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  // fieldset 리셋
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  // table 리셋
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // button 리셋
  button {
    cursor: pointer;
    font-size: var(--textSize);
    appearance: none;
    background: none;
    border: 0;
    outline: none;
  }

  // ul 리스트 스타일 제거
  ul {
    list-style: none;
  }

  // select 스타일 제거
  select {
    appearance: none;
    background: none;
    text-indent: 0.01px;
    text-overflow: '';
  }

  // a태그 스타일 제거
  a {
    color: inherit;
    text-decoration: none;
  }

  // -----------------------------------------
  // 스타일 추가
  // - 서비스에서 전역으로 엘리멘트에 기본적으로 적용될 스타일을 적용합니다
  // -----------------------------------------
  //
  // box-sizing을 border-box로 적용
  // webkit에서 폰트 렌더링을 antialiased로 적용
  // osx firefox에서 폰트렌더링을 grayscale로 적용
  // ie에서 스크롤바가 자동으로 숨겨지는 기능 제거
  // html line-height 1로 변경
  //
  // -----------------------------------------

  html {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1;
    -ms-overflow-style: scrollbar;
  }

  // 모바일 최소너비 지정
  // IOS 모바일에서 overflow scroll 시 가속도 지원
  body {
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    width: 100%;
  }

  // a, button, checkbox, radio, select 에 마우스 오버시 포인터로 커서 변경
  a,
  button[type='button'],
  input[type='radio'],
  input[type='submit'],
  input[type='checkbox'],
  select {
    cursor: pointer;
  }

  input {
    background: none;
  }

  input :focus-visible {
    outline: none;
  }

  textarea :focus-visible {
    outline: none;
  }

  // disable된 버튼, 인풋에 마우스 오버시 커서 변경
  input:disabled,
  select:disabled,
  button:disabled {
    cursor: not-allowed;
  }

  // 라벨 태그를 inline-block으로 적용
  label {
    display: inline-block;
  }

  // 이미지 랜더링 최적화
  img {
    image-rendering: -webkit-optimize-contrast;
    backface-visibility: hidden;
    transform: translateZ(0);
  }

  // 모바일에서 hamburger menu height 조정하기 레거시? 필요한 거?
  /* @function vh($quantity) {
  @return calc(var(--vh, 1vh) * #{$quantity});
} */
`;

// export const Reset = createGlobalStyle`${reset}`;

export default Reset;
