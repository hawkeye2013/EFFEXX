import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code } from './src/components/pageElements/Code';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './src/theme/global-style';
import {
  A,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Blockquote
} from './src/components/pageElements';

const components = {
  a: props => <A {...props} />,
  blockquote: props => <Blockquote {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  h6: props => <H6 {...props} />,
  'p.inlineCode': props => (
    <code
      {...props}
      style={{
        backgroundColor: 'lightgrey',
        padding: '2px 5px',
        borderRadius: '3px',
        fontFamily: 'Space Mono'
      }}
    ></code>
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
