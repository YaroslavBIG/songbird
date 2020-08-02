import React from 'react';
import { NavBar } from 'components/NavBar/NavBar';
import { Counter } from 'components/Counter/Counter';
import { CounterState } from 'components/hoc/CounterState';

export const Layout = (props) => {
 return (
      <div className="container">
        <CounterState>
          <header>
            <NavBar />
            <Counter />
          </header>
          <main>
            { props.children }
          </main>
        </CounterState>
          <footer></footer>
      </div>
)};
