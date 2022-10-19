import React from "react";

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    brand01: '#05050a',
    brand02: '#3e3e42',
    brand03: '#49ffd8',
    white: '#ffffff',
    grey15: '#ececec',
    grey20: '#d3d3d3',
    grey30: '#b7b7b7',
    grey60: '#888888',
    grey70: '#4c4949',
    grey80: '#323232',
    black: '#000000',
    error: '#E74A4A',
    warning: '#FCE96D',
    success: '#43992C',
  },
  fontSize: {
    small: '12px',
    pSmall: '14px',
    p: '16px',
    h5: '18px',
    h4: '20px',
    h3: '24px',
    h2: '28px',
    h1: '32px',
    cardNumber: '60px',
  },
  sizes: {
    maxWidth: '1440px',
    header: '84px',
    footer: '84px',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;