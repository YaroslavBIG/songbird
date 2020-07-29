import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';
import {NavBar} from './components';
import {Home, QuizPage} from './Pages';
import {Train} from './Pages';

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
            <Route path='/train' component={Train} />
            <Route path='/passeridae' component={() => QuizPage('Passeridae')} />
            <Route path='/forestbirds' component={() => QuizPage('Forestbirds')} />
            <Route path='/songbirds' component={() => QuizPage('Songbirds')} />
            <Route path='/preybirds' component={() => QuizPage('Preybirds')} />
            <Route path='/seabirds' component={() => QuizPage('Seabirds')} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
