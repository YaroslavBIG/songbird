import React, { useState } from 'react';
import { Quiz, BirdCard, ButtonNext } from '../components';
import { QustionBlock } from 'components/QuestionBlock/QuestionBlock';
import birdsData from 'data/data';

export const QuizPage = (props) => {
  console.log(props)
  const {pageId} = props;
  const [qustionNum, setQestionNum] = useState(0);
  const {image, name, species, description, audio} = birdsData[pageId][qustionNum];


  return (
    <div>
        <div className="question-block">
        <QustionBlock image = {image} name = {name} audio = {audio} />
        </div>
        <div className="quiz-block">
          <Quiz pageId={pageId} setQestionNum={setQestionNum} qustionNum={qustionNum} />
          <BirdCard image = {image} name = {name} audio = {audio} species = {species} description = {description} />
        </div>
          <ButtonNext />
    </div>
)};
