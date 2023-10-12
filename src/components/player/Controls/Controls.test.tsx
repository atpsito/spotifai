import React from "react";

import Controls from "./Controls";
import { render } from "setupTests";

describe("Controls", () => {
  it("renders with default props", () => {
    render(<Controls />);
  });
});
