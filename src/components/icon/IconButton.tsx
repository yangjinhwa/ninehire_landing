import Color from '@src/styles/Color';
import React from 'react';
import styled, { css } from 'styled-components';
import Icons from './Icons';

type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

const buttonShapeMap = {
  default: css`
    background: transparent;
    path {
      fill: ${Color.GRAY_8};
    }

    :hover {
      background: ${Color.GRAY_3};
      path {
        fill: ${Color.GRAY_9};
      }
    }

    :disabled {
      background: ${Color.GRAY_2};
      path {
        fill: ${Color.GRAY_6};
      }
    }
  `,
  darkMode: css`
    background: ${Color.GRAY_8};
    path {
      fill: ${Color.WHITE};
    }

    :hover {
      background: ${Color.GRAY_7};
    }

    :disabled {
      path {
        fill: ${Color.GRAY_5};
      }
    }
  `,
  stroke: css`
    background: transparent;
    border: 1px solid ${Color.PURPLE_GRAY_3};
    path {
      fill: ${Color.GRAY_8};
    }

    :hover {
      background: ${Color.GRAY_3};
    }

    :disabled {
      background: ${Color.GRAY_2};
      path {
        fill: ${Color.GRAY_6};
      }
    }
  `,
  fill: css`
    background: ${Color.GRAY_3};
    path {
      fill: ${Color.GRAY_8};
    }

    :hover {
      background: ${Color.GRAY_4};
      path {
        fill: ${Color.GRAY_9};
      }
    }

    :disabled {
      background: ${Color.GRAY_2};
      path {
        fill: ${Color.GRAY_6};
      }
    }
  `,
};

const Container = styled.button<{
  size: '40px' | '36px' | '32px' | '24px' | '18px';
  shape: keyof typeof buttonShapeMap;
  hoverColor: Color;
  iconColor: Color;
}>`
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  outline: none;
  box-shadow: none;
  white-space: nowrap;
  border: ${(props) =>
    props.shape === 'stroke' ? `1px solid ${Color.PURPLE_GRAY_3}` : 'none'};
  cursor: pointer;
  width: ${({ size }) => size};
  min-width: ${({ size }) => size};
  height: ${({ size }) => size};
  min-height: ${({ size }) => size};
  transition: 0.2s;
  border-radius: ${({ size }) => (size === '40px' || size === '36px' ? '6px' : '4px')};
  ${(props) => buttonShapeMap[props.shape]};
  :hover {
    background: ${({ hoverColor }) => hoverColor};
  }

  path {
    fill: ${({ iconColor }) => iconColor};
  }
`;

interface Props {
  size: Size;
  type?: keyof typeof buttonShapeMap;
  style?: React.CSSProperties;
  icon: keyof typeof Icons;
  onClick?: (e: any) => void;
  disabled?: boolean;
  hoverColor?: Color;
  iconColor?: Color;
}

const IconButton = ({
  size,
  type = 'default',
  style,
  icon,
  onClick,
  disabled,
  hoverColor,
  iconColor,
}: Props) => {
  const ButtonSize =
    size === 'xl'
      ? '40px'
      : size === 'lg'
      ? '36px'
      : size === 'md'
      ? '32px'
      : size === 'sm'
      ? '24px'
      : '18px';

  return (
    <Container
      size={ButtonSize}
      style={style}
      shape={type}
      disabled={disabled}
      hoverColor={hoverColor}
      onClick={onClick}
      iconColor={iconColor}
    >
      {Icons[icon]}
    </Container>
  );
};

export default React.memo(IconButton);
