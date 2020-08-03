import React from 'react';
import { NavBar } from 'components/NavBar/NavBar';
import { Counter } from 'components/Counter/Counter';
import { CounterState } from 'components/hoc/CounterState';
import { Logo } from 'components/Logo/Logo';

export const Layout = (props) => {
  console.log(props)
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
)};
