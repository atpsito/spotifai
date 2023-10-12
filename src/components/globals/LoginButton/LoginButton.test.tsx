import React from "react";

import LoginButton from "./LoginButton";
import { render } from "setupTests";

describe("LoginButton", () => {
  it("renders with default props", () => {
    render(<LoginButton />);
  });
});
