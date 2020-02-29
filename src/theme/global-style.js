import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
  colors: {
    transparent: 'transparent',

    black: '#000',
    white: '#fff',

    gray: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c'
    }
  },
  fonts: {
    title: 'Ubuntu, sans-serif',
    sans: 'Ubuntu, sans-serif',
    serif: 'Pridi, sans',
    monospace: '"Space Mono", monospace'
  },
  fontSize: {
    title: '3rem',
    h1: '2rem',
    h2: '1.75rem'
  },
  spacing: {
    h1: '1rem'
  },
  lineHeight: {
    none: 0
  }
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.sans};
    color: ${({ theme }) => theme.colors.gray[900]};
  }
  body {
    line-height: 1.9;
  }
`;
