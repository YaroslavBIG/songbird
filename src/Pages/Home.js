import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ScoreContext} from 'components';

export const Home = (props) => {
  const {clearCounter} = useContext(ScoreContext);
  useEffect(clearCounter, []);
  return (
    <section className='main-page'>
      <h1>Welcome!</h1>
      <p>
        We are happy to welcome You to our exciting quiz.
      </p>
      <p>
        You will have to guess the cartoon characters by voice,
        if the correct answer is given the first time,
        you are awarded 5 points, each incorrect answer takes away 1 point.
      </p>
      <p>
      To start the game, click Start button.
      </p>
      <div className="button--start">
        <Link to='/simpsons'>Start</Link>
      </div>
    </section>
  );
};
