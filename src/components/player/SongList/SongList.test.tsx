import React from "react";

import SongList from "./SongList";
import { render } from "setupTests";

describe("SongList", () => {
  it("renders with default props", () => {
    render(<SongList />);
  });
});
