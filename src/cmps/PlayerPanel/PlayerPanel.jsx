import { useRef, useState } from "react";
import ReactPlayer from "react-player";

import { PlaybackControls } from "./PlaybackControls";
import { VolumeControls } from "./VolumeControls";

export function PlayerPanel() {
  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const playerRef = useRef(null);

  function handlePlayToggle() {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }

  function handleSetTime(desiredTime) {
    if (desiredTime >= 0 || desiredTime <= duration) {
      playerRef.current.seekTo(desiredTime);
    }
  };

  const url = "https://www.youtube.com/watch?v=pWO718iy5mY";

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
      <VolumeControls />
      <ReactPlayer
        ref={playerRef}
        url={url}
        width="0"
        height="0"
        playing={isPlaying}
        controls={false}
        onReady={() => setReady(true)}
        onDuration={(duration) => setDuration(duration)}
        onProgress={({ playedSeconds }) => setElapsedTime(playedSeconds)}
      />
    </section>
  );
}
