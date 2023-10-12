import React from "react";

import { CurrentSongProps as Props } from "./CurrentSong.types";
import Image from "next/image";

import HeartSVG from "images/controls/heart-outline.svg";

const CurrentSong: React.FC<Props> = props => {
  return (
    <div className="CurrentSong flex items-center gap-2">
      <Image
        src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
        width={48}
        height={48}
        alt="current song cover"
        className="rounded-lg"
      />
      <div className="flex flex-col">
        <p className="text-xs">Song name</p>
        <p className="text-2xs text-neutral-400">Artist name</p>
      </div>
      <HeartSVG />
    </div>
  );
};

export default CurrentSong;
