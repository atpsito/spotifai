import { SpotifyExternalUrls, SpotifyImage } from "./spotify.types";

export interface UserFollowers {
  href: string;
  total: number;
}

export interface UserExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface User {
  country: string;
  display_name: string;
  email: string;
  explicit_content: UserExplicitContent;
  external_urls: SpotifyExternalUrls;
  followers: UserFollowers;
  href: string;
  id: string;
  images: SpotifyImage[];
  product: string;
  type: string;
  uri: string;
}
