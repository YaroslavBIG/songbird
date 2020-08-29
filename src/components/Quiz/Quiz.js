import React, {useState} from 'react';
import {cartoonsData} from 'data/cartoons';
import {useContext} from 'react';
import {ScoreContext} from 'components/hoc/CounterState';
import winSound from 'sounds/winner.mp3';
import errorSound from 'sounds/error.mp3';

export const Quiz = (props) => {
  const {pageId,
    qustionNum,
    success,
    setSuccess,
    setChecked,
    setSelectedAnswer,
  } = props;
  const {addCounter} = useContext(ScoreContext);
  const [scoreNow, setScoreNow] = useState(5);

  const isCicked = (ev) => {
    const currentClass = ev.target.className;
    return currentClass === 'answer--wrong' || currentClass === 'answer--right';
  };

  const answerRight = (ev) => {
    if (!isCicked(ev)) {
      addCounter(scoreNow);
      const audio = new Audio(winSound);
      audio.play();
    }
    return 'answer--right';
  };

  const answerWrong = (ev) => {
    if (!isCicked(ev)) {
      scoreNow > 0 ? setScoreNow(scoreNow - 1) : setScoreNow(0);
      const audio = new Audio(errorSound);
      audio.play();
    }
    return 'answer--wrong';
  };

  const answerCheck = (ev) => {
    const id = parseInt(ev.target.id, 10);
    if (id === qustionNum + 1) {
      setSuccess(true);
      setScoreNow(5);
    }

    if (!success) {
      ev.target.className = id === qustionNum + 1 ?
      answerRight(ev) :
      answerWrong(ev);
    }
    setChecked(true);
    setSelectedAnswer(id);
  };

  const answers = cartoonsData[pageId].map((el, idx) => (
    <div
      className={'answer--check'}
      key={idx + pageId + el.id}
      id={el.id}
      onClick={(ev)=> answerCheck(ev)}>{el.name}
    </div>
  ));
  return (
    <div className="quiz-block--quiz">
      {answers}
    </div>
  );
};
