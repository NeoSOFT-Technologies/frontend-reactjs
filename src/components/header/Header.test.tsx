import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
it("render without crashing header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});
