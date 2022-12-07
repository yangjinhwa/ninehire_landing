import { createGlobalStyle } from 'styled-components';
import Color from './Color';

import Reset from './Reset';
import Typhography from './typhography/Typhography';

const GlobalStyle = createGlobalStyle<{
  mode?: 'white' | 'black';
}>`
  ${Reset}
  ${Typhography}

  :root {
    --primaryColor: ${Color.PURPLE_6};
    --inkColor: ${Color.PURPLE_7};
  }

  ::selection {
    background-color: ${Color.PURPLE_6};
    color: ${Color.WHITE};
  }
`;

export default GlobalStyle;
