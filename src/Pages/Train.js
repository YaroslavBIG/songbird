import React, {useContext, useEffect} from 'react';
import {ScoreContext} from 'components';

export const Train = (props) => {
  const {clearCounter} = useContext(ScoreContext);
  useEffect(clearCounter, []);

  return (
    <React.Fragment>
      <h1>Train</h1>
    </React.Fragment>
  );
};
