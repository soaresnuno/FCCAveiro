import { createGlobalStyle } from 'styled-components';

import { custom } from "./utilities"

const GlobalStyle = createGlobalStyle`

  /* Custom Font */
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
  
  /* FCC Gydeline Fonts */
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
  
  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *, *: before, *: after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    ${custom};
  }
`;

export default GlobalStyle;