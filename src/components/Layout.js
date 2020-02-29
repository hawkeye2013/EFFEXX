import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import styled from 'styled-components';

const AppStyles = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 25px;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <AppStyles>{children}</AppStyles>
    </>
  );
};
