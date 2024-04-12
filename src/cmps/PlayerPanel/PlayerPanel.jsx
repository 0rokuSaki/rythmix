import { useRef, useState } from "react";
import ReactPlayer from "react-player";

import { PlayerControls } from "./PlaybackControls";

export function PlayerPanel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const handleTogglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const url = "https://www.youtube.com/watch?v=pWO718iy5mY";

  return (
    <section className="player-panel flex align-center justify-center">
      <PlaybackControls isPlaying={isPlaying}/>
      <ReactPlayer ref={playerRef} url={url} width="0" height="0" playing={isPlaying} controls={false} />
    </section>
  );
}
