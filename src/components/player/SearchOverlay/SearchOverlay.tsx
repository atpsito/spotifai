import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";

import { SearchOverlayProps as Props } from "./SearchOverlay.types";
import SearchInput from "@/components/globals/SearchInput/SearchInput";
import Button from "@/components/globals/Button/Button";
import { useFetchAiSongs } from "@/services/ai/ai.service.hooks";
import { useSpotifyStore } from "@/stores/spotify/spotify.store";
import { SearchFormValues } from "@/types/common.types";
import { searchValidatorSchema } from "@/utils/form.util";

const SearchOverlay: React.FC<Props> = props => {
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
    try {
      const { search } = value;
      const response = await searchSongs({ prompt: search, deviceId });
      setTracks(response);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="SearchOverlay h-full justify-center flex flex-col items-center space-x-2"
    >
      <SearchInput
        inputClassName="h-10 w-full text-lg text-center"
        className="w-1/2"
        iconClassName=""
        withButton={false}
        {...register("search")}
        placeholder="Write a mood"
        autoComplete="off"
        type="text"
      />
      <Button className="w-1/4 mt-10" htmlType="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchOverlay;
