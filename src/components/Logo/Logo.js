import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.png';

export const Logo = () => (
  <div className="nav-bar--brend">
    <NavLink
      exact to="/"
      className="nav-bar--link">
      <img src={logo} alt="logo"/>
    </NavLink>
  </div>
);
