import React from "react";

import PlayerControls from "./PlayerControls";
import { render } from "setupTests";

describe("PlayerControls", () => {
  it("renders with default props", () => {
    render(<PlayerControls />);
  });
});
