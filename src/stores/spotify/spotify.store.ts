import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SpotifyState } from "./spotify.store.types";

export const useSpotifyStore = create<SpotifyState>()(
  devtools(
    set => ({
      tracks: undefined,
      setTracks: tracks => set({ tracks }),
      player: undefined,
      setPlayer: player => set({ player }),
      deviceId: undefined,
      setDeviceId: deviceId => set({ deviceId })
    }),
    {
      name: "spotify-storage"
    }
  )
);
