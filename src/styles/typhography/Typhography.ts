import { css } from 'styled-components';

const Typhography = css`
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    src: url('https://cdn.ninehire.com/font/fonts/Pretendard-Thin.subset.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.ninehire.com/font/fonts/Pretendard-Regular.subset.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    src: url('https://cdn.ninehire.com/font/fonts/Pretendard-Medium.subset.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    src: url('https://cdn.ninehire.com/font/fonts/Pretendard-SemiBold.subset.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: bold;
    font-weight: 800;
    src: url('https://cdn.ninehire.com/font/fonts/Pretendard-Bold.subset.woff2')
      format('woff2');
  }

  html {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      sans-serif;
    font-size: 15px;
    font-weight: 400;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
    word-break: keep-all;
  }

  h4,
  h5,
  h6 {
    font-weight: 800;
    word-break: keep-all;
  }

  h1 {
    font-size: 54px;
    line-height: 1.35;
  }

  h2 {
    font-size: 48px;
    line-height: 1.3;
  }

  h3 {
    font-size: 42px;
    line-height: 1.35;
  }

  h4 {
    font-size: 38px;
    line-height: 1.26;
  }

  h5 {
    font-size: 23px;
    line-height: 1.3;
  }

  h6 {
    font-size: 18px;
    line-height: 1.35;
  }

  p,
  textarea {
    line-height: 1.4;
  }

  b {
    font-weight: 700;
  }

  strong {
    font-weight: 800;
  }

  small {
    font-size: 13px;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }

    p,
    textarea {
      font-size: 14px;
    }

    h1 {
      font-size: 46px;
    }

    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 34px;
    }

    h4 {
      font-size: 32px;
    }

    h5 {
      font-size: 18px;
    }

    h6 {
      font-size: 16px;
    }
  }

  @media (max-width: 460px) {
    html {
      font-size: 14px;
    }

    p,
    textarea {
      font-size: 14px;
    }

    h1 {
      font-size: 38px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 28px;
    }

    h4 {
      font-size: 26px;
    }

    h5 {
      font-size: 18px;
    }

    h6 {
      font-size: 16px;
    }
  }
`;

export default Typhography;
