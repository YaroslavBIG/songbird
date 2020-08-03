import React, { useContext } from 'react';
import { ScoreContext, Player, Quiz, BirdCard, ButtonNext } from '../components';

export const QuizPage = (props) => {
const {addCounter} = useContext(ScoreContext)
  return (
    <div>
        <h1>{props.title}</h1>
        <div className="question-block">
          <div className="question-block--photo"></div>
          <div className="question-block--sound">
            <div className="sound--photo"></div>
            <div className="sound--player">
              <div className="title-bird"></div>
              <hr/>
              <div className="player"><Player url={props.url} /></div>
            </div>
          </div>
        </div>
        <div className="quiz-block">
          <Quiz />
          <BirdCard />
        </div>
          <ButtonNext />
          <button onClick={ addCounter }>count</button>
    </div>
)};
