import { createGlobalStyle } from 'styled-components';

import { proportional } from "./utilities";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    ${proportional};
    overflow-x: hidden;
  }
`;

export default GlobalStyle;