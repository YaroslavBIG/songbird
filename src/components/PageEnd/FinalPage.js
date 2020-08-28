import React, {useContext} from 'react';
import {ScoreContext} from 'components/hoc/CounterState';
import {NavLink} from 'react-router-dom';
import win from 'img/congratulation.gif';
import lose from 'img/again.gif';

export const FinalPage = (props) => {
  const {count} = useContext(ScoreContext);
  return (
    <div className='final'>
      {count < 30 &&
      <>
        <p>
          Набрано {count} баллов из возможных 30
        </p>
        <img src={lose} alt="Try Again" className='again'/>
        <p>Вы можете лучше - попроуйте ещё раз</p>
        <button className='button--start'>
          <NavLink
            text={'Снова'}
            to={'/simpsons'}
            label={'Simpsons'}
            checked={false}
            clear='true'
          >Снова</NavLink>
        </button>
      </>
      }
      {count >= 30 &&
     <>
       <p>
          Поздравляем Вы ответили верно на все вопросы,
           ваш счёт - {count} из возможных 30!
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
