import React from 'react';
import {
  NavBar,
  Counter,
  CounterState,
  Logo,
} from '../';

export const Layout = (props) => {
  return (
    <div className="container">
      <CounterState>
        <header>
          <div className="logo">
            <Logo />
            <Counter />
          </div>
          <NavBar />
        </header>
        <main>
          { props.children }
        </main>
      </CounterState>
      <footer></footer>
    </div>
  );
};
