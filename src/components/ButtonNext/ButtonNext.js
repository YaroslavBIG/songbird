import React, { useContext } from 'react';
import { ScoreContext } from 'components/';

export const ButtonNext = () => {
  const {addCounter} = useContext(ScoreContext)
    return (
      <button className='button--next' onClick={ addCounter }>Next Level</button>
    );
};
