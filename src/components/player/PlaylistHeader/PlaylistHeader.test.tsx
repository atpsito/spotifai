import React from "react";

import PlaylistHeader from "./PlaylistHeader";
import { render } from "setupTests";

describe("PlaylistHeader", () => {
  it("renders with default props", () => {
    render(<PlaylistHeader />);
  });
});
