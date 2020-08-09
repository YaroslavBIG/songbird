import React from 'react';
import { NavLink } from 'react-router-dom';

export const links = [
  {to: '/train', label: 'Тренировка', exact: false, pageId: 0},
  {to: '/passeridae', label: 'Воробьиные', exact: false, pageId: 1},
  {to: '/forestbirds', label: 'Лесные птицы', exact: false, pageId: 2},
  {to: '/songbirds', label: 'Певчие птицы', exact: false, pageId: 3},
  {to: '/preybirds', label: 'Хищные птицы', exact: false, pageId: 4},
  {to: '/seabirds', label: 'Морские птицы', exact: false, pageId: 5}
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
    ))
  };

    return (
      <React.Fragment >
        <nav className='nav-bar'>
            {renderLinks()}
        </nav>
      </React.Fragment >
    )
};
