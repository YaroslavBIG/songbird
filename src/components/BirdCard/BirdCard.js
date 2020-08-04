import React from 'react';
import { Player } from '../';

export const BirdCard = (props) => {
  const {image, name, species, description, audio} = props;
  return (
    <div className="bird-card">
      <div className="bird-properties">
      <div className="bird-photo"><img src={image} alt="bird"/></div>
        <div className="bird">
        <div className="bird--name">{name}</div>
        <div className="bird--lat-name">{species}</div>
          <div className="bird--voice">
            <Player url={audio}/>
          </div>
        </div>
      </div>
    <div className="bird-description">{description}</div>
    </div>)
};
