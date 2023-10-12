import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Player from "@/components/player/Player/Player";
import { authOptions } from "@/config/auth.config";

const PlayerPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-screen max-h-screen">
      <Player />
    </div>
  );
};

export default PlayerPage;
