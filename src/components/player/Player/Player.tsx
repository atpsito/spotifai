import React from "react";

import { PlayerProps as Props } from "./Player.types";
import Controls from "../Controls/Controls";
import Navigation from "../Navigation/Navigation";
import PlaylistHeader from "../PlaylistHeader/PlaylistHeader";
import SongList from "../SongList/SongList";

const Player: React.FC<Props> = props => {
  return (
    <div className="Player flex flex-col h-full max-h-screen items-center">
      <div className="flex flex-1 container flex-col overflow-auto">
        <PlaylistHeader />
        <SongList />
      </div>
      <Controls />
    </div>
  );
};

export default Player;
