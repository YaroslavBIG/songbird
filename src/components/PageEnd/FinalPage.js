import React, {useContext} from 'react';
import {ScoreContext} from 'components/hoc/CounterState';
import {NavLink} from 'react-router-dom';
import win from 'img/congratulation.gif';
import lose from 'img/again.gif';

export const FinalPage = (props) => {
  const {count} = useContext(ScoreContext);
  return (
    <div className='final'>
      {count < 25 &&
      <>
        <p>
          Набрано {count} баллов
        </p>
        <img src={lose} alt="Try Again" className='again'/>
        <p>Вы можете лучше - попроуйте ещё раз</p>
        <button className='button--start'>
          <NavLink
            text={'Снова'}
            to={'/passeridae'}
            label={'Воробьиные'}
            checked={false}
            clear='true'
          >Снова</NavLink>
        </button>
      </>
      }
      {count >= 25 &&
     <>
       <p>
          Поздравляем Вы ответили верно на все вопросы, ваш счёт - {count}!
       </p>
       <img src={win} alt="You Win" className='win'/>

       <button className='button--start'>
         <NavLink
           text={'На главную'}
           to={'/'}
           clear='true'
         >На главную</NavLink>
       </button>
     </>
      }
    </div>
  );
};
