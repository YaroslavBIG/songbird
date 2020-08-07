import React from 'react';
import { birdsData } from '../../data/data';

export const Quiz = (props) => {
const {pageId ,qustionNum, setQestionNum} = props;

const answerCheck = (id, ev) => {
  ev.target.className = id === qustionNum + 1 ? 'answer--right' : 'answer--wrong';
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
