import { Link } from 'gatsby';
import React from 'react';

export const Header = ({ siteTitle, siteDescription }) => {
  return (
    <Link to='/'>
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
  );
};
