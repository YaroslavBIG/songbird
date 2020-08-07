import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from './components';
import {Home, QuizPage} from './Pages';
import {Train} from './Pages';

const App = () => (
  <Layout>
    <Switch>
      <Route path='/train' render={(props) =>
        <Train {...props} title='train' key='train'/>} />
      <Route path='/passeridae' render={(props) =>
        <QuizPage {...props} title={'Passeridae'} pageId={1} />} />
      <Route path='/forestbirds' component={(props) =>
        <QuizPage {...props} title={'Forestbirds'} pageId={2}/>} />
      <Route path='/songbirds' component={(props) =>
        <QuizPage {...props} title={'Songbirds'} pageId={3}/>} />
      <Route path='/preybirds' component={(props) =>
        <QuizPage {...props} title={'Preybirds'} pageId={4}/>} />
      <Route path='/seabirds' component={(props) =>
        <QuizPage {...props} title={'Seabirds'} pageId={5}/>} />
      <Route exact path='/' component={Home} key='home' />
    </Switch>
  </Layout>
);

export default App;
