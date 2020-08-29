import React from 'react';
import {Player} from '../';
import {cartoonsData} from 'data/cartoons';

export const BirdCard = (props) => {
  const {selectedAnswer, checked, playNow, setPlayNow} = props;
  const pageId = checked ? props.pageId : 6;
  const {
    image,
    name,
    species,
    description,
    audio,
  } = cartoonsData[pageId][selectedAnswer - 1];

  return (
    <div className="bird-card">
      {!checked &&
        <>
          <p>Listen to the player.</p>
          <p>Select a character from the list</p>
        </>
      }
      {checked &&
        <>
          <div className="bird-properties">
            <div className="bird-properties--photo">
              <img src={image} alt="bird"/>
              <div className="bird-properties--name">
                <div className="bird-properties--bird-name">{name}</div>
                <hr/>
                <div className="bird-properties--bird-lat-name">{species}</div>
                <hr/>
              </div>
            </div>
            <div className="bird-properties--bird">
              <div className="bird-properties--voice">
                <Player
                  url={audio}
                  playNow = {playNow}
                  setPlayNow = {setPlayNow}
                />
              </div>
            </div>
          </div>
          <div className="bird-description">{description}</div>
        </>
      }
    </div>);
};
