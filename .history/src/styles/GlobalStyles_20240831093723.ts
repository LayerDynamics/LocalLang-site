// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  html, body {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    color: #333;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
