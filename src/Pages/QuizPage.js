import React from 'react';
import { ScoreConsumer } from 'components/hoc/CounterState';

export const QuizPage = (props) => {

  return (
    <div>
        <h1>{props.title}</h1>
        <ScoreConsumer>
          { context => (
          <button
            onClick={ context.addCounter }
            >
            count
          </button>)
          }
        </ScoreConsumer>
    </div>
)};
