import React, {useContext} from 'react';
import {ScoreContext} from 'components/hoc/CounterState';
import {NavLink} from 'react-router-dom';

export const FinalPage = (props) => {
  const {count} = useContext(ScoreContext);
  console.log(count);
  return (
    <div>
      {count < 20 &&
      <>
        <p>
          Набрано {count} баллов
        </p>
        <p>Вы можете лучше - попроуйте ещё раз</p>

        <NavLink
          text={'Снова'}
          to={'/passeridae'}
          pageId={1}
          label={'Воробьиные'}
          checked={false}
        >Снова</NavLink>

      </>

      }
      {count >= 20 &&
     <>
       <p>
          Поздравляем Вы набрали макимальное количество баллов - {count}!
       </p>
       <p>Вам присвоенно почётное звание - знаток птиц</p>
       <p>Вернуться на <NavLink to="/">главную</NavLink>?</p>
     </>
      }
    </div>
  );
};
