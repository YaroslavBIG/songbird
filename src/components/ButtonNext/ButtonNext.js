import React from 'react';
import {links} from 'components/NavBar/NavBar';
import { NavLink, withRouter } from 'react-router-dom';
import { randomInteger } from 'utils/randomInteger';

const ButtonNext = (props) => {
  const {setQestionNum, success, setSuccess, pageId, text} = props;
  const link = links[pageId + 1];
  const clickButtonNext = () => {
    if(pageId === 5 && success) {
      props.history.push('/final');
      return (
        <NavLink
        to={'\final'}
       />
      )
    }
    if (success || text) {
      setSuccess(false);
      setQestionNum(randomInteger(0, 5));
      props.history.push(link.to)
      return (
        <NavLink
          to={link.to}
          pageId={link.pageId}
          label={link.label}
          checked={false}
        ></NavLink>
      )

    }
  }
    return (
      <button className='button--next' onClick={ () => clickButtonNext() }>{text ? text : 'Next Level'}</button>
    );
};

export default withRouter(ButtonNext);
