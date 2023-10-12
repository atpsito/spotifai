import React from "react";

import { HomeProps as Props } from "./Home.types";
import LoginButton from "../globals/LoginButton/LoginButton";

const Home: React.FC<Props> = props => {
  return (
    <div className="Home h-screen flex flex-col justify-center items-center">
      <h1>SpotifAI</h1>
      <p>AI generated playlists</p>
      <LoginButton />
    </div>
  );
};

export default Home;
