import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import FileUploader from "./FileUploader";
import React from "react";
it("render without crashing FileUploader", () => {
  render(
    <BrowserRouter>
      <FileUploader />
    </BrowserRouter>
  );
});
it("checking the input fields", async () => {
  render(
    <BrowserRouter>
      <FileUploader />
    </BrowserRouter>
  );
  const fileBox = screen.getByTestId("file-input");
  expect(fileBox).toBeInTheDocument();
  expect(fileBox).toHaveAttribute("type", "file");
  fireEvent.change(fileBox);

  const uploadBtn = screen.getByTestId("upload-btn");
  expect(uploadBtn).toBeInTheDocument();
  expect(uploadBtn).toHaveAttribute("type", "submit");
  fireEvent.click(uploadBtn);
});
