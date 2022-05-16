import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/index";
import Registration from "./Registration";
import "../../i18n/config";
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

  fireEvent.change(nameBox, { target: { value: "Deepthi" } });
  expect(nameBox).toHaveValue("Deepthi");

  fireEvent.change(emailBox, { target: { value: "Deepthi@gmail.com" } });
  expect(emailBox).toHaveValue("Deepthi@gmail.com");

  fireEvent.change(passwordBox, { target: { value: "Deepthi@1234" } });
  expect(passwordBox).toHaveValue("Deepthi@1234");
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
