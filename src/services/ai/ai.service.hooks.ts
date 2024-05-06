import { useMutation } from "@tanstack/react-query";

import { fetchAiSongs } from "./ai.service";
import { Track } from "@/types/spotify.types";
import { FetchAiSongsPayload } from "./ai.service.types";

export const useFetchAiSongs = () => {
  return useMutation<Track[], Error, FetchAiSongsPayload>(fetchAiSongs);
};
