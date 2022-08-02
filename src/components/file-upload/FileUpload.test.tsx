import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import FileUpload from "./FileUpload";
import React from "react";
it("render without crashing FileUploader", () => {
  render(
    <BrowserRouter>
      <FileUpload />
    </BrowserRouter>
  );
});
it("checking the input fields", async () => {
  render(
    <BrowserRouter>
      <FileUpload />
    </BrowserRouter>
  );
  const fileBox = screen.getByTestId("file-input");
  expect(fileBox).toBeInTheDocument();
  expect(fileBox).toHaveAttribute("type", "file");
  fireEvent.change(fileBox);
  fireEvent.change(fileBox, { target: { value: "" } });
});
