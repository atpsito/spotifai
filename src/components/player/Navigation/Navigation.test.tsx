import React from "react";

import Navigation from "./Navigation";
import { render } from "setupTests";

describe("Navigation", () => {
  it("renders with default props", () => {
    render(<Navigation />);
  });
});
