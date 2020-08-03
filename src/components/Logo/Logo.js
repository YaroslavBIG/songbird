import React from 'react';
import { NavLink } from 'react-router-dom';

export const Logo = () => (
  <div className="nav-bar--brend">
    <NavLink exact to="/" className="nav-bar--link">Song Bird</NavLink>
  </div>
);
