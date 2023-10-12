import React from "react";

import { PlayerControlsProps as Props } from "./PlayerControls.types";

import ShuffleSVG from "images/controls/shuffle.svg";
import BackSVG from "images/controls/back.svg";
import PlaySVG from "images/controls/play.svg";
import ForwardSVG from "images/controls/forward.svg";
import RepeatSVG from "images/controls/repeat.svg";

const PlayerControls: React.FC<Props> = props => {
  return (
    <div className="PlayerControls flex flex-col items-center gap-2">
      <div className="flex gap-3 items-center">
        <ShuffleSVG />
        <BackSVG />
        <PlaySVG />
        <ForwardSVG />
        <RepeatSVG />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-2xs text-neutral-400">0:00</p>
        <div className="w-[400px] h-1 bg-neutral-700 rounded-lg"></div>
        <p className="text-2xs text-neutral-400">3:00</p>
      </div>
    </div>
  );
};

export default PlayerControls;
