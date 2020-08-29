import React from 'react';
import {links} from 'components/NavBar/NavBar';
import {NavLink, withRouter} from 'react-router-dom';
import {randomInteger} from 'utils/randomInteger';

const ButtonNext = (props) => {
  const {
    setChecked,
    setQestionNum,
    setPlayNow,
    success,
    setSuccess,
    pageId,
    text,
  } = props;
  const link = links[pageId + 1];

  const clickButtonNext = () => {
    if (pageId === 100) {
      props.history.push('/');
      return (
        <NavLink
          to={'/'}
        />
      );
    }
    if (pageId === 5 && success) {
      props.history.push('/final');
      return (
        <NavLink
          to={'/final'}
        />
      );
    }
    if (success || text) {
      setSuccess(false);
      setChecked(false);
      setPlayNow(false);
      setQestionNum(randomInteger(0, 5));
      props.history.push(link.to);
    }
  };
  return (
    <button
      className={`button--next${success ? ' button-next--active' : ''}`}
      onClick={ () => clickButtonNext() }>{text ? text : 'Next Level'}
    </button>
  );
};

export default withRouter(ButtonNext);
