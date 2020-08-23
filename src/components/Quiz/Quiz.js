import React, {useState} from 'react';
import {birdsData} from '../../data/data';
import {useContext} from 'react';
import {ScoreContext} from 'components/hoc/CounterState';

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

  const answerRight = () => {
    addCounter(scoreNow);
    return 'answer--right';
  };

  const answerWrong = () => {
  scoreNow > 0 ? setScoreNow(scoreNow - 1) : setScoreNow(0);
  return 'answer--wrong';
  };

  const answerCheck = (ev) => {
    const id = parseInt(ev.target.id, 10);
    if (id === qustionNum + 1) {
      setSuccess(true);
    }

    if (!success) {
      ev.target.className = id === qustionNum + 1 ?
      answerRight() :
      answerWrong();
    }
    setChecked(true);
    setSelectedAnswer(id);
  };

  const answers = birdsData[pageId].map((el, idx) => (
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
