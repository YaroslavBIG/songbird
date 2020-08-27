import React, {useContext} from 'react';
import {ScoreContext} from 'components/hoc/CounterState';
import {NavLink} from 'react-router-dom';
import {ButtonNext} from 'components';
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
        <img src={lose} alt="Try Again"/>
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
          Поздравляем Вы набрали макимальное количество баллов - {count}!
       </p>
       <img src={win} alt="You Win"/>
       <p>Вам присвоенно почётное звание - знаток птиц</p>
       <ButtonNext
         success={true}
         text='На главную' />
     </>
      }
    </div>
  );
};
