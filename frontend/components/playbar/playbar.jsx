import React from 'react';
import ProgressBar from './progress_bar';
import { formatDuration } from '../../util/format_util';

class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: null,
      currentTime: null
    };
  }

  onLoad(arg) {
    this.setState({ duration: formatDuration(this.audioTag.duration) })
  }

  updateProgress () {
    this.setState({ currentTime: this.audioTag.currentTime })
  }

  render () {
    const track = this.props.track;
    if (!track.id) return (<div></div>);

    return (
      <section className="playbar">

        <audio controls autoPlay preload="auto" src={track.audio_url} type="audio/mpeg"
          ref={ (tag) => this.audioTag = tag }
          onPlay={ this.onLoad.bind(this)}
          onTimeUpdate={ this.updateProgress.bind(this) }
          />

        <ProgressBar time={ this.state.currentTime } audio={ this.audioTag }/>
        <div className="track-info">
          <img src={ track.photo_url } />
          <ul>
            <li>
              <h4>{ track.user.username }</h4>
            </li>
            <li>
              { track.name }
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Playbar;
