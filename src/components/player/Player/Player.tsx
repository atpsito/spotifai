"use client";
import React, { useEffect } from "react";
import { getSession } from "next-auth/react";

import { PlayerProps as Props } from "./Player.types";
import Controls from "../Controls/Controls";
import PlaylistHeader from "../PlaylistHeader/PlaylistHeader";
import SongList from "../SongList/SongList";
import { useSpotifyStore } from "@/stores/spotify/spotify.store";
import SearchOverlay from "../SearchOverlay/SearchOverlay";

const Player: React.FC<Props> = props => {
  const setPlayer = useSpotifyStore(state => state.setPlayer);
  const setDeviceId = useSpotifyStore(state => state.setDeviceId);
  const tracks = useSpotifyStore(state => state.tracks);

  useEffect(() => {
    if (!window) return;
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);
    console.log("script added");
    window.onSpotifyWebPlaybackSDKReady = async () => {
      const session = await getSession();
      // @ts-ignore
      const token = session?.accessToken;

      const player = new Spotify.Player({
        name: "tifai player",
        getOAuthToken: cb => {
          cb(token);
        }
      });

      // Error handling
      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("playback_error", ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      player.addListener("player_state_changed", state => {
        console.log(state);
      });

      // Ready
      player.addListener("ready", async ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
        await fetch("https://api.spotify.com/v1/me/player", {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            device_ids: [device_id]
          })
        });
        const queueRaw = await fetch(
          "https://api.spotify.com/v1/me/player/queue",
          {
            method: "GET",
            headers: {
              authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );

        const queue = await queueRaw.json();
        const nextPromises = queue.queue.map(() =>
          fetch("https://api.spotify.com/v1/me/player/next", {
            method: "POST",
            headers: {
              authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          })
        );

        await Promise.all(nextPromises);

        console.log("done")
      });

      // Not Ready
      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      // Connect to the player!
      const isConnect = await player.connect();
      if (!isConnect) {
        console.error("Player not connected");
      }
      setPlayer(player);
    };
  }, []);

  return !tracks ? (
    <SearchOverlay />
  ) : (
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
