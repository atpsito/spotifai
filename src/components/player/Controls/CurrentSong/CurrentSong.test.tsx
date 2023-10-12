import React from "react";

import CurrentSong from "./CurrentSong";
import { render } from "setupTests";

describe("CurrentSong", () => {
  it("renders with default props", () => {
    render(<CurrentSong />);
  });
});
