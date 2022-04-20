import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
it("render without crashing Dashboard", () => {
  render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
});
