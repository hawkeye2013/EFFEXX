import React from 'react';
import { Link } from 'gatsby';

const linkStyles = {
  fontSize: '1.5rem',
  textDecoration: 'none',
  padding: '10px',
  color: '#454545'
};

export const Title = ({ children }) => {
  return (
    <Link to='/' style={linkStyles}>
      {children}
    </Link>
  );
};
