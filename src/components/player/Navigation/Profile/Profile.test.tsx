import React from "react";

import Profile from "./Profile";
import { render } from "setupTests";

describe("Profile", () => {
  it("renders with default props", () => {
    render(<Profile />);
  });
});
