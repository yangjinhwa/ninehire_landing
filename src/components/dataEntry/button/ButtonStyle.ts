import styled, { css } from 'styled-components';
import Color from '../../../styles/Color';
import Theme from '@src/styles/Theme';

export const buttonSizeMap = {
  xl: css`
    height: 60px;
    font-size: 18px;
    font-weight: 700;
    line-height: 130%;
    padding: 0 40px;

    &:hover {
      transform: translateY(-4px);
    }

    &:active {
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      height: 50px;
      font-size: 16px;
    }
  `,
  lg: css`
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;

    :hover {
      transform: translateY(-2px);
    }

    :active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      font-size: 15px;
      padding: 12px 16px;
    }
  `,
  md: css`
    height: 40px;
    padding: 0 16px;
    font-size: 15px;
    font-weight: 700;
    line-height: 150%;
  `,
  sm: css`
    height: 16px;
    padding: 1px 5px;
    font-size: 12px;
    font-weight: 400;
    line-height: 140%;
    border-radius: 2px;
  `,
};

export const buttonShapeMap = {
  filled: {
    default: css`
      color: ${Color.WHITE};
      background: ${Color.GRAY_8};
      :hover {
        background: ${Color.GRAY_9};
      }
      :disabled {
        color: ${Color.GRAY_3};
        background: ${Color.GRAY_6};
      }
    `,
    primary: css`
      color: ${Color.WHITE};
      /* background: ${Color.PURPLE_6}; */
      background: linear-gradient(90deg, #9766ff 0%, #6b46ff 64.58%, #5523e3 100%);

      :hover {
        /* background: ${Color.PURPLE_7}; */
        box-shadow: 0px 0px 16px rgba(163, 90, 255, 0.46);
      }

      :disabled {
        opacity: 0.6;
      }
    `,
    warning: css`
      color: ${Color.WHITE};
      background: ${Color.RED_8};
      :hover {
        background: ${Color.RED_9};
      }
      :disabled {
        background: ${Color.GRAY_6};
      }
    `,
    white: css``,
  },
  stroke: {
    default: css`
      color: ${Color.GRAY_8};
      background: transparent;
      border: 1px solid ${Color.PURPLE_GRAY_6};

      :hover {
        background: ${Color.PURPLE_GRAY_3};
      }
    `,
    primary: css``,
    white: css`
      color: ${Color.GRAY_4};
      border: 1px solid ${Color.GRAY_6};

      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    `,
    warning: css``,
  },
  ghost: {
    default: css`
      color: ${Color.GRAY_8};
      background: transparent;
      :hover {
        background: ${Color.BLUE_GRAY_2};
      }
      :disabled {
        color: ${Color.GRAY_6};
      }
    `,
    primary: css``,
    warning: css`
      border: 1px solid ${Color.RED_6};
      color: ${Color.RED_8};
      background: transparent;
      :hover {
        background: ${Color.BLUE_GRAY_2};
      }
      :disabled {
        color: ${Color.GRAY_6};
      }
    `,
    white: css``,
  },
};

const ButtonBase = styled.button<{
  size: keyof typeof buttonSizeMap;
  shape: keyof typeof buttonShapeMap;
  color?: 'default' | 'primary' | 'warning' | 'white';
  block?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  box-shadow: none;
  white-space: nowrap;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  width: ${({ block }) => block && '100%'};
  border-radius: ${Theme.style.border_radius};
  text-decoration: none;
  position: relative;
  overflow: hidden;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    sans-serif;
  &:active {
    transform: scale(0.97);
  }

  ${({ size }) => buttonSizeMap[size]};
  ${({ shape, color }) =>
    shape && color ? buttonShapeMap[shape][color] : buttonShapeMap['filled']['default']}
`;

export default ButtonBase;
