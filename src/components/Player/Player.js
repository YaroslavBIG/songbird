import React from 'react';
import ReactPlayer from 'react-player/lazy'

export const Player = (props) => {
  return (
    <ReactPlayer url={props.url} />
  )
}
