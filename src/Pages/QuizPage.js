import React, {useState, useContext, useEffect} from 'react';
import {Quiz, BirdCard, ButtonNext, ScoreContext} from '../components';
import {QustionBlock} from 'components/QuestionBlock/QuestionBlock';
import {cartoonsData} from 'data/cartoons';
import {randomInteger} from 'utils/randomInteger';

export const QuizPage = (props) => {
  const {pageId, clear} = props;
  const {clearCounter} = useContext(ScoreContext);
  const [qustionNum, setQestionNum] = useState(randomInteger(0, 5));
  const [success, setSuccess] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(1);
  const [playNow, setPlayNow] = useState(false);
  console.log(cartoonsData[pageId][qustionNum].name);
  useEffect(clearCounter, [clear]);

  const {
    image,
    name,
    species,
    description,
    audio,
  } = cartoonsData[pageId][qustionNum];

  return (
    <div>
      <div className="question-block">
        <QustionBlock
          image = {image}
          name = {name}
          audio = {audio}
          success = {success}
          playNow = {playNow}
          setPlayNow = {setPlayNow} />
      </div>
      <div className="quiz-block">
        <Quiz
          pageId = {pageId}
          qustionNum = {qustionNum}
          success = {success}
          checked = {checked}
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
          playNow = {playNow}
          setPlayNow = {setPlayNow}
        />
      </div>
      <ButtonNext
        pageId = {pageId}
        setQestionNum={setQestionNum}
        qustionNum={qustionNum}
        success={success}
        setSuccess={setSuccess}
        setChecked = {setChecked}
      />
    </div>
  );
};
