import React from 'react';
import {links} from 'components/NavBar/NavBar';
import { NavLink, withRouter } from 'react-router-dom';


const ButtonNext = (props) => {
  const {qustionNum, setQestionNum, success, setSuccess, pageId} = props;
  const link = links[pageId + 1];
  const clickButtonNext = () => {
    if (success) {
      setSuccess(false);
      setQestionNum(qustionNum + 1);
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
      <button className='button--next' onClick={ () => clickButtonNext() }>Next Level</button>
    );
};

export default withRouter(ButtonNext);
