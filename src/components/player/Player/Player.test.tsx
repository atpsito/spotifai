import React from "react";

import Player from "./Player";
import { render } from "setupTests";

describe("Player", () => {
  it("renders with default props", () => {
    render(<Player />);
  });
});
