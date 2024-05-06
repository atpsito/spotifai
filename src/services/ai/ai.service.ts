import axios from "axios";
import { getSession } from "next-auth/react";
import { FetchAiSongsPayload } from "./ai.service.types";

export const fetchAiSongs = async (payload: FetchAiSongsPayload) => {
  const { deviceId, prompt } = payload;
  const session = await getSession();
  if (!session) throw new Error("No session");
  // @ts-ignore TODO: Fix this
  const { accessToken } = session;
  console.log("accessToken", accessToken);
  const { data } = await axios.get("api/ai", {
    params: { prompt, deviceId },
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  return data;
};
