"use client";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

import { ProvidersProps as Props } from "./Providers.types";
import { queryClient } from "@/config/queryClient.config";

const Providers = async (props: Props) => {
  const { children } = props;

  return (
    <SessionProvider refetchInterval={30 * 60}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
