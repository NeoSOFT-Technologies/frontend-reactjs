import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import LanguageChange from "./LanguageChange";
import "../../i18n/config";
it("render without crashing Loader", () => {
  render(
    <BrowserRouter>
      <LanguageChange />
    </BrowserRouter>
  );
});
it("render ", () => {
  render(
    <BrowserRouter>
      <LanguageChange />
    </BrowserRouter>
  );

  const englishBtn = screen.getByTestId("english-btn");
  expect(englishBtn).toBeInTheDocument();
  fireEvent.click(englishBtn);
  const hindiBtn = screen.getByTestId("hindi-btn");
  expect(hindiBtn).toBeInTheDocument();
  fireEvent.click(hindiBtn);
});
