import React from 'react';
import ReactPlayer from 'react-player/lazy'

export const Player = ({url}) => {
  console.log(url)
  return (
    <ReactPlayer url={url} />
  )
}
