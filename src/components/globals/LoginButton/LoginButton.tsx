"use client";
import React, { useMemo } from "react";
import { signIn } from "next-auth/react";

import { LoginButtonProps as Props } from "./LoginButton.types";
import Button from "../Button/Button";
import Link from "next/link";

const LoginButton: React.FC<Props> = props => {
  return <Button onClick={() => signIn("spotify")}>Login with spotify</Button>;
  // return (
  //   <Link
  //     href="/api/auth/signin"
  //     legacyBehavior
  //     onClick={() => signIn("spotify")}
  //   >
  //     <a className="bg-primary ring-primary/50 px-4 py-2 rounded-lg text-white font-medium leading-5 hover:ring-2 transition-all">
  //       Login with Spotify
  //     </a>
  //   </Link>
  // );
};

export default LoginButton;
