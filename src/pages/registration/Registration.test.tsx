import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/index";
import Registration from "./Registration";

it("render without crashing Registration", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Registration />
      </Provider>
    </BrowserRouter>
  );
});

it("test if input box is present", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Registration />
      </Provider>
    </BrowserRouter>
  );

  const nameBox = screen.getByTestId("username-input");
  expect(nameBox).toBeInTheDocument();
  expect(nameBox).toHaveAttribute("type", "text");

  const emailBox = screen.getByTestId("email-input");
  expect(emailBox).toBeInTheDocument();
  expect(emailBox).toHaveAttribute("type", "email");

  const passwordBox = screen.getByTestId("password-input");
  expect(passwordBox).toBeInTheDocument();
  expect(passwordBox).toHaveAttribute("type", "password");
});

it("test if input box take input", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Registration />
      </Provider>
    </BrowserRouter>
  );

  const nameBox = screen.getByTestId("username-input");
  fireEvent.change(nameBox, { target: { value: "Deepthi" } });
  expect(screen.getByTestId("username-input")).toHaveValue("Deepthi");

  const emailBox = screen.getByTestId("email-input");
  fireEvent.change(emailBox, { target: { value: "Deepthi@gmail.com" } });
  expect(screen.getByTestId("email-input")).toHaveValue("Deepthi@gmail.com");

  const passwordBox = screen.getByTestId("password-input");
  fireEvent.change(passwordBox, { target: { value: "Deepthi@1234" } });
  expect(screen.getByTestId("password-input")).toHaveValue("Deepthi@1234");
});
it("if submit button and cancel button renders", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Registration />
      </Provider>
    </BrowserRouter>
  );
  const submitBtn = screen.getByTestId("signup-button");
  expect(submitBtn).toBeInTheDocument();
  fireEvent.click(submitBtn);
});
