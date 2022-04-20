import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/index";
import LandingPage from "./LandingPage";

it("render without crashing LandingPage", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LandingPage />
      </Provider>
    </BrowserRouter>
  );
});
