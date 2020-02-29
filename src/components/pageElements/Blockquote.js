import React from 'react';
import styled from 'styled-components';

const StyledText = styled.blockquote`
  margin: 20px;
  p {
    margin-top: 0;
    border-left: 5px solid ${({ theme }) => theme.colors.gray[700]};
    padding-left: 15px;
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    color: ${({ theme }) => theme.colors.gray[700]};
    word-break: break-word;
  }
`;

export const Blockquote = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
