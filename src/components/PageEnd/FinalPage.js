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
          Scored {count} points out of a possible 30
        </p>
        <img src={lose} alt="Try Again" className='again'/>
        <p>You can do better - try again</p>
        <button className='button--start'>
          <NavLink
            text={'Again'}
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
          Congratulations! You answered all the questions correctly,
          your score is {count} out of a possible 30!
       </p>
       <img src={win} alt="You Win" className='win'/>

       <button className='button--start'>
         <NavLink
           text={'Home Page'}
           to={'/'}
           clear='true'
         >Home Page</NavLink>
       </button>
     </>
      }
    </div>
  );
};
