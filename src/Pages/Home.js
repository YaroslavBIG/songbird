import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ScoreContext} from 'components';

export const Home = (props) => {
  const {clearCounter} = useContext(ScoreContext);
  useEffect(clearCounter, []);
  return (
    <section className='main-page'>
      <h1>Добро пожаловать!</h1>
      <p>
        Мы рады приветствовать Вас на нашей увлекательной викторине.
      </p>
      <p>
        Вам предстоит ответить на вопросы,
        вслучае если правильный ответ дан с первого раза,
        вам начисляется 5 очков, каждый не верный ответ отнимает 1 балл.
      </p>
      <p>
        Для начала игры нажмите кнопку ниже,
        вы можете выбрать тренеровочный раунд,
        или сразу приступить к основной викторине.
      </p>
      <div className="button--start">
        <Link to='/train'>Тренеровка</Link>
      </div>
      <div className="button--start">
        <Link to='/passeridae'>Начать игру</Link>
      </div>
    </section>
  );
};
