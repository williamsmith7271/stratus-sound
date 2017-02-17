import React from 'react';
import { Link } from 'react-router';

const StreamIndexItem = ({ track, fetchCurrentTrack, togglePlay, currentTrack }) => {
  const handleClick = () => {
    if (currentTrack) {
      togglePlay();
    } else {
      fetchCurrentTrack(track.id);
    }
  }

  const togglePlayButton = (currentTrack && currentTrack.playing) ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

  return (
    <ul className="stream-tracks">
      <li>
        <Link to={`tracks/${track.id}`}>
          <img src={track.photo_url}/>
        </Link>
      </li>

      <li className="small-play" onClick={ handleClick }>
        { togglePlayButton }
      </li>

      <ul>

        <li>
           <h4>{track.user.username}</h4>
        </li>
        <li>
          {track.name}
        </li>
      </ul>

    </ul>
  );
};

export default StreamIndexItem;
