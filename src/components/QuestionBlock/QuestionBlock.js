import React from 'react';
import { Player } from 'components/Player/Player';
import defaultBird from '../../img/deault_bird.jpg'

export const QustionBlock = (props) => {
  const { audio, success, playNow, setPlayNow} = props;
  const image = success ? props.image : defaultBird;
  const name = success ? props.name : '******';
  return (
    <>
    <div className="question-block--photo"></div>
      <div className="question-block--sound">
        <div className="sound--photo"><img src={image} alt={name}/> </div>
        <div className="sound--player">
        <h1 className="title-bird">{name}</h1>
          <hr/>
          <Player url={audio} controls={true} playNow = {playNow} setPlayNow = {setPlayNow}/>
        </div>
      </div>
    </>
  )
}
