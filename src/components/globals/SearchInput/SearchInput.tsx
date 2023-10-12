import React, { forwardRef } from "react";

import { SearchInputProps as Props } from "./SearchInput.types";
import { twMerge } from "tailwind-merge";

import SearchSVG from "images/search.svg";

const SearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, inputClassName, ...rest } = props;

  return (
    <div
      className={twMerge(
        "SearchInput flex p-2 gap-2 bg-white items-center rounded-[100px]",
        className
      )}
    >
      <button type="submit">
        <SearchSVG />
      </button>
      <input
        className={twMerge("h-3 text-2xs w-[240px] text-black", inputClassName)}
        ref={ref}
        placeholder="Artists, songs, or podcasts"
        {...rest}
      />
    </div>
  );
});

export default SearchInput;
