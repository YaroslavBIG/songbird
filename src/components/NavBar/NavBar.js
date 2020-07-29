import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
    <nav className='nav-bar'>
        <div className="nav-bar--brend">
        <NavLink exact to="/home" className="nav-bar--link">Song Bird</NavLink>
        </div>
    <ul>
        <li className="nav-bar--item">
            <NavLink to="/train" className="nav-bar--link">Тренировка</NavLink>
        </li>
        <li className="nav-bar--item">
            <NavLink to="/passeridae" className="nav-bar--link">Воробьиные</NavLink>
        </li>
        <li className="nav-bar--item">
            <NavLink to="/forestbirds" className="nav-bar--link">Лесные птицы</NavLink>
        </li>
        <li className="nav-bar--item">
            <NavLink to="/songbirds" className="nav-bar--link">Певчие птицы</NavLink>
        </li>
        <li className="nav-bar--item">
            <NavLink to="/preybirds" className="nav-bar--link">Хищные птицы</NavLink>
        </li>
        <li className="nav-bar--item">
            <NavLink to="/seabirds" className="nav-bar--link">Морские птицы</NavLink>
        </li>
    </ul>
    </nav>
);
