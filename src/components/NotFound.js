import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div>
    Page Not found - <NavLink to="/" exact>Go Home</NavLink>
  </div>
);

export default NotFound;