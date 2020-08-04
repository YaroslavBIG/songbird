import React, { useContext } from 'react';
import { ScoreContext, Quiz, BirdCard, ButtonNext } from '../components';
import { QustionBlock } from 'components/QuestionBlock/QuestionBlock';
import birdsData from 'data/data';

export const QuizPage = (props) => {
const {addCounter} = useContext(ScoreContext)
const {image, name, species, description, audio} = birdsData[0][0];
  return (
    <div>
        <div className="question-block">
        <QustionBlock image = {image} name = {name} audio = {audio} />
        </div>
        <div className="quiz-block">
          <Quiz />
          <BirdCard image = {image} name = {name} audio = {audio} species = {species} description = {description} />
        </div>
          <ButtonNext />
          <button onClick={ addCounter }>count</button>
    </div>
)};
