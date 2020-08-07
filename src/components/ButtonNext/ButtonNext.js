import React from 'react';

export const ButtonNext = (props) => {
  const {qustionNum, setQestionNum, success, setSuccess} = props;
  const clickButtonNext = () => {
    if (success) {
      setSuccess(false);
      return setQestionNum(qustionNum + 1);
    }
  }
    return (
      <button className='button--next' onClick={ () => clickButtonNext() }>Next Level</button>
    );
};
