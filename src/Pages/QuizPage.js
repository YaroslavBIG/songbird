import React, { useState } from 'react';
import { Quiz, BirdCard, ButtonNext } from '../components';
import { QustionBlock } from 'components/QuestionBlock/QuestionBlock';
import birdsData from 'data/data';

export const QuizPage = (props) => {
  const {pageId} = props;
  const [qustionNum, setQestionNum] = useState(0);
  const [success, setSuccess] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(1);
  const {image, name, species, description, audio} = birdsData[pageId][qustionNum];

  return (
    <div>
        <div className="question-block">
        <QustionBlock image = {image} name = {name} audio = {audio} success = {success} />
        </div>
        <div className="quiz-block">
          <Quiz
           pageId = {pageId}
           qustionNum = {qustionNum}
           success = {success}
           setSuccess = {setSuccess}
           setChecked = {setChecked}
           setSelectedAnswer = {setSelectedAnswer}
           />
          <BirdCard
            pageId = {pageId}
            image = {image}
            name = {name}
            audio = {audio}
            species = {species}
            description = {description}
            checked = {checked}
            setChecked = {setChecked}
            selectedAnswer = {selectedAnswer}
            />
        </div>
          <ButtonNext
            setQestionNum={setQestionNum}
            qustionNum={qustionNum}
            success={success}
            setSuccess={setSuccess}
          />
    </div>
)};
