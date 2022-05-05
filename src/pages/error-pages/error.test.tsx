import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";

import Error401 from "./Error401";

it("render without crashing Error401", () => {
  render(
    <BrowserRouter>
      <Error401 />
    </BrowserRouter>
  );
});
