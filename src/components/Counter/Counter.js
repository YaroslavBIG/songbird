import React from 'react';
import { ScoreConsumer } from '../';

export const Counter = (props) => (
  <ScoreConsumer>
    { context => (
    <div className="counter">
      Score: {context.count}
    </div>
    )}
  </ScoreConsumer>
);
