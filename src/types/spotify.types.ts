type SpotifyTypes = "artist" | "album" | "track";

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyExternalUrls {
  spotify: string;
}

export interface SpotifyExternalIds {
  isrc: string;
}

export interface Artist {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: SpotifyTypes;
  uri: string;
}

export interface Album {
  album_type: "album";
  artists: Artist[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: "day";
  total_tracks: number;
  type: SpotifyTypes;
  uri: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: false;
  external_ids: SpotifyExternalIds;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track" | "album" | "artist";
  uri: string;
}
