"use client";
import React, { forwardRef } from "react";

import { SearchInputProps as Props } from "./SearchInput.types";
import { twMerge } from "tailwind-merge";

import SearchSVG from "images/search.svg";

const SearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, inputClassName, iconClassName, ...rest } = props;
  const { withButton = true, ...secondRest } = rest;

  return (
    <div
      className={twMerge(
        "SearchInput flex p-2 gap-2 bg-white items-center rounded-[100px]",
        className
      )}
    >
      {withButton ? (
        <button type="submit">
          <SearchSVG className={iconClassName} />
        </button>
      ) : null}
      <input
        className={twMerge("h-3 text-2xs w-[240px] text-black", inputClassName)}
        ref={ref}
        placeholder="Artists, songs, or podcasts"
        {...secondRest}
      />
    </div>
  );
});

export default SearchInput;
