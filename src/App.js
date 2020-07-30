import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import './App.scss';
import {Home, QuizPage} from './Pages';
import {Train} from './Pages';


const App = () => (
      <Layout>
        <Switch>
          <Route path='/train' component={Train} />
          <Route exact path='/passeridae' render={(props) =>
            <QuizPage {...props} title={'Passeridae'} />} />
          <Route path='/forestbirds' component={(props) =>
            <QuizPage {...props} title={'Forestbirds'} />} />
          <Route path='/songbirds' component={(props) =>
            <QuizPage {...props} title={'Songbirds'} />} />
          <Route path='/preybirds' component={(props) =>
            <QuizPage {...props} title={'Preybirds'} />} />
          <Route path='/seabirds' component={(props) =>
            <QuizPage {...props} title={'Seabirds'} />} />
          <Route path='/' component={Home} />
        </Switch>
      </Layout>
    );

export default App;
