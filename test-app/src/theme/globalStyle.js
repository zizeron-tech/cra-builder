import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import { device } from './responsiveness';

import './fonts.css';

const GlobalStyle = createGlobalStyle`
  // _reset
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar { 
    display: none; 
  }

  button{
    outline: none;
  }

  // _base
  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
    font-family: ${variables.fonts.primaryFont};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
   @media (${device.mobileL}) {
      font-size: 56.25%; // 1 rem = 9px; 9px/16px = 56.25%
    }

    @media (${device.tablet}) {
      font-size: 50%; // 1 rem = 8px; 8px/16px = 50%
    }

    @media (${device.laptop}) {
      font-size: 75%; // 1 rem = 12px; 12px/16px = 75%
    }
  }

  body {
    box-sizing: border-box;
    font-size: 1.4rem;
    font-family: ${variables.fonts.primaryFont};
  }

  .main-container{
    position: relative;
  }

`;

export default GlobalStyle;
