import { useState } from "react";

import { VolumeIcon } from "../icons/VolumeIcon";

export function VolumeControls() {
  const [volume, setVolume] = useState(50);

  function handleChange(event) {
    setVolume(event.target.value);
  }

  return (
    <div className="volume-controls flex row align-center justify-center">
      <button className="volume-btn">
        <VolumeIcon volume={volume} />
      </button>
    </div>
  );
}
