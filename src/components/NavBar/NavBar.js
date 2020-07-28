import React from 'react';

export const NavBar = () => (
    <nav className='nav-bar'>
        <div className="nav-bar--brend">
            Song Bird
        </div>
    <ul>
        <li className="nav-bar--item">
            <a href="/train" className="nav-bar--link">Тренировка</a>
        </li>
        <li className="nav-bar--item">
            <a href="/passeridae" className="nav-bar--link">Воробьиные</a>
        </li>
        <li className="nav-bar--item">
            <a href="/forestbirds" className="nav-bar--link">Лесные птицы</a>
        </li>
        <li className="nav-bar--item">
            <a href="/songbirds" className="nav-bar--link">Певчие птицы</a>
        </li>
        <li className="nav-bar--item">
            <a href="/preybirds" className="nav-bar--link">Хищные птицы</a>
        </li>
        <li className="nav-bar--item">
            <a href="/seabirds" className="nav-bar--link">Морские птицы</a>
        </li>
    </ul>
    </nav>
);
