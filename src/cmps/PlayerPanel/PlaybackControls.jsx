import Slider from "@mui/material/Slider";

import { PlayIcon } from "../icons/PlayIcon";
import { PauseIcon } from "../icons/PauseIcon";
import { PrevIcon } from "../icons/PrevIcon";
import { NextIcon } from "../icons/NextIcon";
import { SkipBackwardIcon } from "../icons/SkipBackwardIcon";
import { SkipForwardIcon } from "../icons/SkipForwardIcon";

export function PlaybackControls({ isPlaying }) {
  return (
    <div className="playback-controls flex column align center justify-center">
      <div className="playback-buttons flex row align-center justify-center">
        <button className="skip-backward-btn flex row align-center justify-center">
          <SkipBackwardIcon />
        </button>
        <button className="prev-btn flex row align-center justify-center">
          <PrevIcon />
        </button>
        <button className="play-btn flex row align-center justify-center">
          {isPlaying && <PauseIcon />}
          {!isPlaying && <PlayIcon />}
        </button>
        <button className="next-btn flex row align-center justify-center">
          <NextIcon />
        </button>
        <button className="skip-forward-btn flex row align-center justify-center">
          <SkipForwardIcon />
        </button>
      </div>
      <div className="progress flex row align-center justify-center">
        <span className="elapsed fs13">6:00</span>
        <Slider
          className="slider"
          value={50}
          onChange={() => {}}
          aria-labelledby="continuous-slider"
        />
        <span className="duration fs13">12:00</span>
      </div>
    </div>
  );
}
