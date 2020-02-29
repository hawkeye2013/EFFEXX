import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.mediumHeader};
  font-family: ${({ theme }) => theme.fonts.sans};
  ${AutoLink};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`;

export const H3 = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
