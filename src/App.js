import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';
import {NavBar} from './components';
import {Home} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
