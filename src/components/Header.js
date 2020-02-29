import React from 'react';
import { Title } from './pageElements/Title';

const headerStyles = {
  width: '100%',
  padding: '10px;',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e3e3e3',
  marginBottom: '10px'
};

const linkContainerStyles = {};

export const Header = ({ siteTitle, siteDescription }) => {
  return (
    <>
      <div style={headerStyles}>
        <Title>{siteTitle}</Title>
        <div style={linkContainerStyles}></div>
      </div>
    </>
  );
};
