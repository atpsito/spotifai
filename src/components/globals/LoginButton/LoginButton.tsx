"use client";
import React, { useMemo } from "react";
import { signIn } from "next-auth/react";

import { LoginButtonProps as Props } from "./LoginButton.types";
import Button from "../Button/Button";

const LoginButton: React.FC<Props> = props => {
  return <Button onClick={() => signIn("spotify")}>Login with spotify</Button>;
};

export default LoginButton;
