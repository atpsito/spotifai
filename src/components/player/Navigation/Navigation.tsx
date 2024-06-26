"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NavigationProps as Props } from "./Navigation.types";
import BackSVG from "images/back.svg";
import SearchInput from "@/components/globals/SearchInput/SearchInput";
import { searchValidatorSchema } from "@/utils/form.util";
import { SearchFormValues } from "@/types/common.types";
import Profile from "./Profile/Profile";
import { useFetchAiSongs } from "@/services/ai/ai.service.hooks";
import { useSpotifyStore } from "@/stores/spotify/spotify.store";

const Navigation: React.FC<Props> = props => {
  const setTracks = useSpotifyStore(state => state.setTracks);
  const deviceId = useSpotifyStore(state => state.deviceId);
  const formMethods = useForm({
    defaultValues: {
      search: ""
    },
    resolver: zodResolver(searchValidatorSchema)
  });
  const { handleSubmit, register } = formMethods;
  const { mutateAsync: searchSongs } = useFetchAiSongs();

  const submitHandler = async (value: SearchFormValues) => {
    if (!deviceId) return;
    console.log("searching");
    try {
      const { search } = value;
      const response = await searchSongs({ prompt: search, deviceId });
      setTracks(response);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  return (
    <div className="Navigation py-3 flex justify-between items-center">
      <div className="flex gap-6">
        <div className="flex gap-3 items-center">
          <BackSVG />
          <BackSVG className="rotate-180" />
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <SearchInput placeholder="Write a mood" {...register("search")} />
        </form>
      </div>
      <Profile />
    </div>
  );
};

export default Navigation;
