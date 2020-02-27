import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code } from './src/components/pageElements/Code';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './src/theme/global-style';
import { H1 } from './src/components/pageElements';

const components = {
  h1: props => <H1 {...props} />,
  h2: ({ children }) => <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>,
  'p.inlineCode': props => (
    <code {...props} style={{ backgroundColor: 'lightgrey' }}></code>
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  }
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);
