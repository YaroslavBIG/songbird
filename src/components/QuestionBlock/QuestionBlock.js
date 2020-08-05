import React from 'react';
import { Player } from 'components/Player/Player';

export const QustionBlock = (props) => {
  const {image, name, audio} = props;
  return (
    <>
    <div className="question-block--photo"></div>
      <div className="question-block--sound">
        <div className="sound--photo"><img src={image} alt={name}/> </div>
        <div className="sound--player">
        <h1 className="title-bird">{name}</h1>
          <hr/>
          <Player url={audio} controls={true}/>
        </div>
      </div>
    </>
  )
}
