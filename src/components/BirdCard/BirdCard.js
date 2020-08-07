import React from 'react';
import { Player } from '../';

export const BirdCard = (props) => {
  const {image, name, species, description, audio, checked, setChecked} = props;
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
