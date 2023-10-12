import React from "react";

import SearchInput from "./SearchInput";
import { render } from "setupTests";

describe("SearchInput", () => {
  it("renders with default props", () => {
    render(<SearchInput />);
  });
});
