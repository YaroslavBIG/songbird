import React, { useContext } from 'react';
import { ScoreContext } from 'components';

export const Train = (props) => {
  const cdd = useContext(ScoreContext);
  const {clearCounter} = cdd;

  const ClearC = (props) => {
  return <>{props.clear}</>
}

  return (
    <React.Fragment>
      <h1>Train</h1>
      <ClearC render={clearCounter} />
    </React.Fragment>
)};
