import React from "react";
import Image from "next/image";

import { PlaylistHeaderProps as Props } from "./PlaylistHeader.types";
import { mocks } from "../SongList/SongList.helpers";
import Navigation from "../Navigation/Navigation";

const PlaylistHeader: React.FC<Props> = props => {
  const imageUrl = mocks.tracks.items[0].album.images[0].url;
  const width = mocks.tracks.items[0].album.images[0].width;
  const height = mocks.tracks.items[0].album.images[0].height;
  const name = mocks.tracks.items[0].name;
  const length = mocks.tracks.items.length;
  return (
    <div className="PlaylistHeader flex px-6 pb-6 min-h-[340px] max-h-[400px] h-[30vh] flex-col justify-between">
      <Navigation />
      <div className="flex gap-6 items-end">
        <Image
          src={mocks.tracks.items[0].album.images[0].url}
          alt="generated playlist image"
          width={232}
          height={232}
        />
        <div className="flex flex-col gap-2 text-sm">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold my-2">
            Cita en el quirófano mood{" "}
          </h2>
          <div className="flex items-center gap-1">
            <Image
              src="https://media.licdn.com/dms/image/C5603AQGXpzcGY5LAsg/profile-displayphoto-shrink_400_400/0/1653923133527?e=1700092800&v=beta&t=rmhCNLjOkDH-f67NoiiWnt2gJQKLeY8j5462p5WnXqg"
              alt="profile"
              width={24}
              height={24}
              className="rounded-full"
            />
            <p className="font-semibold text-2xs">Alexander Tigselema</p>
            <p className="font-medium text-2xs">•</p>
            <p className="font-medium text-2xs">{length} songs,</p>
            <p className="text-2xs">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHeader;
