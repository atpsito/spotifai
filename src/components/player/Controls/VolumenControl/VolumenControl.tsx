import React from "react";

import { VolumenControlProps as Props } from "./VolumenControl.types";

import SoundSVG from "images/controls/sound.svg";

const VolumenControl: React.FC<Props> = props => {
  return (
    <div className="VolumenControl flex items-center gap-2 pr-8">
      <SoundSVG />
      <div className="w-[96px] h-1 bg-neutral-700 rounded-lg"></div>
    </div>
  );
};

export default VolumenControl;
