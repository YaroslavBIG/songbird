import React, { useContext } from 'react';
import { ScoreContext } from '../components';

export const QuizPage = (props) => {
const {addCounter} = useContext(ScoreContext)
  return (
    <div>
        <h1>{props.title}</h1>
          <button onClick={ addCounter }>count</button>
    </div>
)};
