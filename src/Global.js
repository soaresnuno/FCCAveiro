import { createGlobalStyle } from 'styled-components';

import { custom } from "./utilities"

const GlobalStyle = createGlobalStyle`

  /* Custom Font */
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
  
  /* FCC Gydeline Fonts */
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
  
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    ${custom};
    overflow-x: hidden;
    overflow-y: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;