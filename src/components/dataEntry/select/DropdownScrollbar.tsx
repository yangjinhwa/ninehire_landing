import Scrollbars from 'react-custom-scrollbars';
import styled from 'styled-components';

const Scrollbar = styled(Scrollbars)<{ maxheight?: number }>`
  display: flex;
  flex-direction: column;
  height: fit-content !important;
  max-height: ${({ maxheight }) => maxheight && `${maxheight}px`};
  border-radius: var(--cardBorderRadius);

  > div:first-child {
    position: relative !important;
    height: fit-content;
    max-height: ${({ maxheight }) => maxheight && `${maxheight}px`};
  }
`;

export default Scrollbar;
