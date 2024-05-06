import { Track } from "@/types/spotify.types";

export interface SpotifyState {
  tracks: Track[] | undefined;
  setTracks: (tracks: Track[]) => void;
  player: Spotify.Player | undefined;
  setPlayer: (player: Spotify.Player) => void;
  deviceId: string | undefined;
  setDeviceId: (deviceId: string) => void;
}
