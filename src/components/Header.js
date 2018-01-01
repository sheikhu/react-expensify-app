import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="active">Create</NavLink>
    <NavLink to="/help" activeClassName="active">Help</NavLink>
  </header>
);

export default Header;