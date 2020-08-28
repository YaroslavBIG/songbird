import React from 'react';
import {NavLink} from 'react-router-dom';

export const links = [
  {to: '/simpsons', label: 'Simpsons', exact: false, pageId: 0},
  {to: '/southpark', label: 'South Park', exact: false, pageId: 1},
  {to: '/futurama', label: 'Futurama', exact: false, pageId: 2},
  {to: '/rikandmorty', label: 'Rick and Morty', exact: false, pageId: 3},
  {to: '/americandad', label: 'American Dad', exact: false, pageId: 4},
  {to: '/familyguy', label: 'Family Guy', exact: false, pageId: 5},
];

export const NavBar = () => {
  const renderLinks = () => {
    return links.map((link, idx) => (
      <div key={idx}>
        <NavLink
          to={link.to}
          exact={link.exact}
          className="nav-bar--link disabled"
          activeClassName={'nav-bar-link--active'}
        >
          {link.label}
        </NavLink>
      </div>
    ));
  };

  return (
    <React.Fragment >
      <nav className='nav-bar'>
        {renderLinks()}
      </nav>
    </React.Fragment >
  );
};
