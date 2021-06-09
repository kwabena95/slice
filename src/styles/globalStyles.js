import { createGlobalStyle } from 'styled-components';

// global styles
export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
  }
`