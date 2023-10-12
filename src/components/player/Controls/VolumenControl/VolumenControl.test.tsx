import React from "react";

import VolumenControl from "./VolumenControl";
import { render } from "setupTests";

describe("VolumenControl", () => {
  it("renders with default props", () => {
    render(<VolumenControl />);
  });
});
