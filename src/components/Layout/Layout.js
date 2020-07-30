import React from 'react';
import { NavBar } from 'components/NavBar/NavBar';

export const Layout = (props) => (
      <div className="container">
        <header>
          <NavBar />
        </header>
        <main>
          { props.children }
        </main>
        <footer></footer>
      </div>
);
