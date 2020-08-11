import React, { Component } from 'react';
import ReactPlayer from 'react-player/lazy'
import { Duration } from './Duration';
import playImg from "../../img/play_circle_outline-black-24dp.svg";
import pauseImg from "../../img/pause_circle_outline-black-24dp.svg";

export class Player extends Component {
  state = {
    url: this.props.url,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  handlePlayPause = () => {
    if(!this.props.playNow) {
      this.props.setPlayNow(true)
      this.setState({ playing: !this.state.playing })
    }
    else {
      this.setState({ playing: false})
    }
  }

  handleStop = () => {
    console.log(this.prevUrl)
    this.setState({
      url: null,
      playing: false,
      played: 0,
      loaded: 0,
      duration: 0})
  }

  handleToggleControls = () => {
    const url = this.state.url
    this.setState({
      controls: !this.state.controls,
      url: null
    }, () => this.load(url))
  }

  handleToggleLight = () => {
    this.setState({ light: !this.state.light })
  }

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }

  handlePlay = () => {
    if(!this.props.playNow) {
      this.props.setPlayNow(true)
      this.setState({ playing: true })
    }
  }

  handlePause = () => {
    this.props.setPlayNow(false)
    this.setState({ playing: false })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    this.setState({ playing: this.state.loop })
  }

  handleDuration = (duration) => {
    this.setState({ duration })
  }

  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }

  ref = player => {
    this.player = player
  }

  render () {
    const { url, playing, controls, light, volume, muted, loop, duration, played, playbackRate, pip } = this.state

    return (
      <div className='player'>
          <div className='player-wrapper'>
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onPlay={this.handlePlay}
              onPause={this.handlePause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.handleEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.handleProgress}
              onDuration={this.handleDuration}
            />
          </div>
              <div className="seek">
              <div className="controls--play">
                <div onClick={this.handlePlayPause} className='button-play'>{playing ?
                <img src={pauseImg} alt="pause"/>
                :
                <img src={playImg} alt="play"/>
                }
                </div>
              </div>
              <div className="seek--range">
                <input
                      type='range' min={0} max={0.999999} step='any'
                      value={played}
                      onMouseDown={this.handleSeekMouseDown}
                      onChange={this.handleSeekChange}
                      onMouseUp={this.handleSeekMouseUp}
                    />

                <div className="duration">
                    <Duration seconds={duration * played} />
                    <Duration seconds={duration} />
                </div>
                </div>
              </div>
              <div className="controls--options">
                  <button onClick={this.handleSetPlaybackRate}
                    value={this.state.playbackRate === 1 ? 2 : 1 }>
                      {this.state.playbackRate}x
                  </button>

              <div className="controls--check-box">
                <label htmlFor='muted'>Muted</label>
                <input id='muted' type='checkbox' checked={muted} onChange={this.handleToggleMuted} />
                <label htmlFor='loop'>Loop</label>
                <input id='loop' type='checkbox' checked={loop} onChange={this.handleToggleLoop} />
              </div>
              <div className="volume">
                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                <span>{parseInt((volume.toFixed(2) * 100), 10)}%</span>
              </div>
              </div>
      </div>
    )
  }
}
