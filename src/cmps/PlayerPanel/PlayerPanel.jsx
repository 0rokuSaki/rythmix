import { useRef, useState } from "react";
import ReactPlayer from "react-player";

import { PlaybackControls } from "./PlaybackControls";
import { VolumeControls } from "./VolumeControls";

export function PlayerPanel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const handleTogglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const url = "https://www.youtube.com/watch?v=pWO718iy5mY";

  return (
    <section className="player-panel">
      <PlaybackControls isPlaying={isPlaying}/>
      <VolumeControls />
      <ReactPlayer ref={playerRef} url={url} width="0" height="0" playing={isPlaying} controls={false} />
    </section>
  );
}
