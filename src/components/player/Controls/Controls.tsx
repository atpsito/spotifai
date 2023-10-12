import React from "react";

import { ControlsProps as Props } from "./Controls.types";
import CurrentSong from "./CurrentSong/CurrentSong";
import PlayerControls from "./PlayerControls/PlayerControls";
import VolumenControl from "./VolumenControl/VolumenControl";

const Controls: React.FC<Props> = props => {
  return (
    <div className="Controls flex justify-between w-full py-4 px-3 items-center">
      <CurrentSong />
      <PlayerControls />
      <VolumenControl />
    </div>
  );
};

export default Controls;
