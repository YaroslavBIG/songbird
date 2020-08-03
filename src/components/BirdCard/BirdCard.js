import React from 'react';
import { Player } from '../';
import {birdsData} from '../../data/data';

export const BirdCard = () => {
  const {image, name, species, description, audio} = birdsData[0][0];
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
