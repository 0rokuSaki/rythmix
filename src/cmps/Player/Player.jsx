import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

import { setLastPlayedSong } from "../../store/actions/player.action";

import { PlaybackControls } from "./PlaybackControls";
import { VolumeControls } from "./VolumeControls";

export function Player() {
  const currSongId = useSelector((storeState) => storeState.playerModule.currSongId);

  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [volume, setVolume] = useState(1.0);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!currSongId) {
      setLastPlayedSong();
    }
  }, []);

  function handlePlayToggle() {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }

  function handleSetTime(desiredTime) {
    if (desiredTime >= 0 || desiredTime <= duration) {
      playerRef.current.seekTo(desiredTime);
    }
  }

  return (
    <section className="player-panel">
      <PlaybackControls
        ready={ready}
        isPlaying={isPlaying}
        duration={duration}
        elapsedTime={elapsedTime}
        handlePlayToggle={handlePlayToggle}
        handleSetTime={handleSetTime}
      />
      <VolumeControls volume={volume} setVolume={setVolume} />
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/watch?v=${currSongId}`}
        width="0"
        height="0"
        playing={isPlaying}
        volume={volume}
        onReady={() => setReady(true)}
        onDuration={(duration) => setDuration(duration)}
        onProgress={({ playedSeconds }) => setElapsedTime(playedSeconds)}
      />
    </section>
  );
}
