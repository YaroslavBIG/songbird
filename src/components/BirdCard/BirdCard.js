import React from 'react';

export const BirdCard = () => {

  return (<React.Fragment>
    <div className="bird-properties">
      <div className="bird-photo"></div>
      <div className="bird">
        <div className="bird--name"></div>
        <div className="bird--lat-name"></div>
        <div className="bird--voice"></div>
      </div>
    </div>
    <div className="bird-description"></div>
  </React.Fragment>)
};
