import React from 'react';
import { NavLink } from 'react-router-dom';



export const NavBar = () => {
  const links = [
    {to: '/train', label: 'Тренировка', exact: false},
    {to: '/passeridae', label: 'Воробьиные', exact: false},
    {to: '/forestbirds', label: 'Лесные птицы', exact: false},
    {to: '/songbirds', label: 'Певчие птицы', exact: false},
    {to: '/preybirds', label: 'Хищные птицы', exact: false},
    {to: '/seabirds', label: 'Морские птицы', exact: false}
  ];

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
