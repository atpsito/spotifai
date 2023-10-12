"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NavigationProps as Props } from "./Navigation.types";
import { mockUser } from "./Navigation.helpers";
import BackSVG from "images/back.svg";
import SearchInput from "@/components/globals/SearchInput/SearchInput";
import { searchValidatorSchema } from "@/utils/form.util";
import { SearchFormValues } from "@/types/common.types";

const Navigation: React.FC<Props> = props => {
  const formMethods = useForm({
    defaultValues: {
      search: ""
    },
    resolver: zodResolver(searchValidatorSchema)
  });
  const { handleSubmit, register } = formMethods;

  const submitHandler = (value: SearchFormValues) => {
    console.log({ value });
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
      <Image
        src={mockUser.images[0].url}
        width={24}
        height={24}
        alt={mockUser.display_name}
        className="rounded-full"
      />
    </div>
  );
};

export default Navigation;
