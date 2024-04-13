import { useState } from "react";

import Slider from "@mui/material/Slider";

import { VolumeIcon } from "../icons/VolumeIcon";

export function VolumeControls() {
  const [volume, setVolume] = useState(100);
  const [prevVolume, setPrevVolume] = useState(volume);

  function onVolumeClick() {
    if (volume == 0) {
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setVolume(0);
    }
  }

  function handleChange(event) {
    setVolume(event.target.value);
  }

  return (
    <div className="volume-controls flex row align-center justify-end">
      <button className="volume-btn flex align-center justify-center" onClick={onVolumeClick}>
        <VolumeIcon volume={volume} />
      </button>
      <Slider
        className="slider"
        value={volume}
        size="medium"
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
