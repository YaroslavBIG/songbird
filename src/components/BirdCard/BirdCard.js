import React from 'react';
import { Player } from '../';
import birdsData from 'data/data';

export const BirdCard = (props) => {
  const { selectedAnswer, checked } = props;
  const pageId = checked ? props.pageId : 6;
  const {image, name, species, description, audio} = birdsData[pageId][selectedAnswer - 1];

  return (
    <div className="bird-card">
      {!checked &&
        <>
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
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
                <Player url={audio}/>
              </div>
            </div>
          </div>
          <div className="bird-description">{description}</div>
        </>
      }
    </div>)
};
