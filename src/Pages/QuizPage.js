import React, { useState } from 'react';
import { Quiz, BirdCard, ButtonNext } from '../components';
import { QustionBlock } from 'components/QuestionBlock/QuestionBlock';
import birdsData from 'data/data';

export const QuizPage = (props) => {
  const {pageId} = props;
  const [qustionNum, setQestionNum] = useState(0);
  const [success, setSuccess] = useState(false);
  const [checked, setChecked] = useState(false);
  const {image, name, species, description, audio} = birdsData[pageId][qustionNum];

  return (
    <div>
        <div className="question-block">
        <QustionBlock image = {image} name = {name} audio = {audio} />
        </div>
        <div className="quiz-block">
          <Quiz pageId = {pageId}
           qustionNum = {qustionNum}
           success = {success}
           setSuccess = {setSuccess}
           setChecked = {setChecked}
           />
          <BirdCard
            image = {image}
            name = {name}
            audio = {audio}
            species = {species}
            description = {description}
            checked = {checked}
            setChecked = {setChecked}
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
