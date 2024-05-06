"use client";
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

import { SongListProps as Props } from "./SongList.types";

import PlaySVG from "images/play.svg";
import Button from "@/components/globals/Button/Button";
import { useSpotifyStore } from "@/stores/spotify/spotify.store";

const SongList: React.FC<Props> = props => {
  const tracks = useSpotifyStore(state => state.tracks);
  const titleStyles = "text-neutral-500 text-xs font-medium pb-1 text-left";
  const colTextStyles = "text-neutral-500 text-xs font-medium";

  return (
    <div className="SongList flex flex-col">
      <div className="py-4 flex gap-6 items-center">
        <PlaySVG />
        <Button type="SECONDARY" className="text-2xs">
          Import playlist
        </Button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-neutral-500">
            <th className={twMerge("w-[10%]", titleStyles)}>#</th>
            <th className={twMerge("w-[30%]", titleStyles)}>Title</th>
            <th className={twMerge("w-[30%]", titleStyles)}>Album</th>
            <th className={twMerge("w-[20%]", titleStyles)}>Release date</th>
            <th className={twMerge("w-[10%]", titleStyles)}>Duration</th>
          </tr>
        </thead>
        <tbody>
          {tracks?.map((track, index) => (
            <tr key={track.id} className="cursor-pointer">
              <td className="text-center text-neutral-500 text-xs font-medium">
                {index + 1}
              </td>
              <td className="pt-3">
                <div className="flex gap-2">
                  <Image
                    src={track.album.images[0]?.url}
                    alt={track.name}
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-xs">{track.name}</p>
                    <p className="text-xs text-neutral-400">
                      {track.artists.map(artist => artist.name).join(", ")}
                    </p>
                  </div>
                </div>
              </td>
              <td className={colTextStyles}>{track.album.name}</td>
              <td className={colTextStyles}>{track.album.release_date}</td>
              <td className={colTextStyles}>
                {dayjs(track.duration_ms).format("mm:ss")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
