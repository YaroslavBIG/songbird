import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from './components';
import {Home, QuizPage} from './Pages';
import {NotFound} from 'components/NotFound/NotFound';
import {FinalPage} from 'components/PageEnd/FinalPage';

const App = () => (
  <Layout>
    <Switch>
      <Route path='/simpsons' render={(props) =>
        <QuizPage {...props} title={'Simpsons'} pageId={0} />} />
      <Route path='/southpark' render={(props) =>
        <QuizPage {...props} title={'South Park'} pageId={1} />} />
      <Route path='/futurama' render={(props) =>
        <QuizPage {...props} title={'Futurama'} pageId={2}/>} />
      <Route path='/rikandmorty' render={(props) =>
        <QuizPage {...props} title={'Rick and Morty'} pageId={3}/>} />
      <Route path='/americandad' render={(props) =>
        <QuizPage {...props} title={'American Dad'} pageId={4}/>} />
      <Route path='/familyguy' render={(props) =>
        <QuizPage {...props} title={'Family Guy'} pageId={5}/>} />
      <Route path='/final' render={(props) =>
        <FinalPage {...props} title={'FinalPage'} pageId={6}/>} />
      <Route exact path='/' render={(props) =>
        <Home {...props} title={'Home Page'} />} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
