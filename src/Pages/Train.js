import React, {useContext} from 'react';
import {ScoreContext} from 'components';

export const Train = (props) => {
  const {clearCounter} = useContext(ScoreContext);

  const ClearC = () => {
    return <></>;
  };

  return (
    <React.Fragment>
      <h1>Train</h1>
      <ClearC render={clearCounter} />
    </React.Fragment>
  );
};
