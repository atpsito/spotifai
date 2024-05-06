import axios from "axios";
import { getSession } from "next-auth/react";

export const fetchMe = async () => {
  const session = await getSession();
  if (!session) throw new Error("No session");
  // @ts-ignore TODO: Fix this
  const { accessToken } = session;
  const { data } = await axios.get("https://api.spotify.com/v1/me", {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  return data;
};
