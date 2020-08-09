import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from './components';
import {Home, QuizPage} from './Pages';
import { NotFound } from 'components/NotFound/NotFound';
import { FinalPage } from 'components/PageEnd/FinalPage';

const App = () => (
  <Layout>
    <Switch>
      <Route path='/train' render={(props) =>
        <QuizPage {...props} title={'train'} pageId={0} />} />
      <Route path='/passeridae' render={(props) =>
        <QuizPage {...props} title={'Passeridae'} pageId={1} />} />
      <Route path='/forestbirds' render={(props) =>
        <QuizPage {...props} title={'Forestbirds'} pageId={2}/>} />
      <Route path='/songbirds' render={(props) =>
        <QuizPage {...props} title={'Songbirds'} pageId={3}/>} />
      <Route path='/preybirds' render={(props) =>
        <QuizPage {...props} title={'Preybirds'} pageId={4}/>} />
      <Route path='/seabirds' render={(props) =>
        <QuizPage {...props} title={'Seabirds'} pageId={5}/>} />
      <Route path='/final' render={(props) =>
        <FinalPage {...props} title={'FinalPage'} pageId={6}/>} />
      <Route exact path='/' render={(props) =>
         <Home {...props} title={'Home Page'} />} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
