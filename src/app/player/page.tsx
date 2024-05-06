import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Player from "@/components/player/Player/Player";
import { authOptions } from "@/config/auth.config";
import { useSpotifyStore } from "@/stores/spotify/spotify.store";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const PlayerPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }
  // @ts-ignore
  useSpotifyStore.setState({ token: session?.accessToken });

  return (
    <div className="h-screen max-h-screen">
      <Player />
    </div>
  );
};

export default PlayerPage;
