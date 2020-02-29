import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers.js';

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-family: ${({ theme }) => theme.fonts.serif};
  ${AutoLink};
  margin-top: ${({ theme }) => theme.spacing[5]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`;

export const H1 = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
