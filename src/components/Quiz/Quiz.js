import React from 'react';
import { birdsData } from '../../data/data';

export const Quiz = (props) => {
const {pageId, qustionNum, success, setSuccess, setChecked} = props;

const answerCheck = (id, ev) => {
  if (id === qustionNum + 1) {
    setSuccess(true)
  }
 if (!success) ev.target.className = id === qustionNum + 1 ? 'answer--right' : 'answer--wrong';
 setChecked(true)
}

const answers = birdsData[pageId].map((el, idx) => (
<div className={'answer--check'} key={el.id.toString() + qustionNum} id={el.id} onClick={(ev)=> answerCheck(el.id, ev)}>{el.name}</div>
))
  return (
    <div className="quiz-block--quiz">
        {answers}
    </div>
  );
}
