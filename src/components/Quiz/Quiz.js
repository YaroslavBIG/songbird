import React from 'react';
import { birdsData } from '../../data/data';

export const Quiz = (props) => {
console.log(props.pageId);
const {pageId ,qustionNum, setQestionNum} = props;

const answers = birdsData[pageId].map((el, idx) => (
<li key={el.id} onClick={()=> setQestionNum(qustionNum + 1)}>{el.name}</li>
))
  return (
    <div className="quiz-block--quiz">
      <ul>
        {answers}
      </ul>
    </div>
  );
}
