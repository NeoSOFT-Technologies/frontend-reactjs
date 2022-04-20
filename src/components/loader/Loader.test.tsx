import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Loader";
it("render without crashing Loader", () => {
  render(
    <BrowserRouter>
      <Loader />
    </BrowserRouter>
  );
});
