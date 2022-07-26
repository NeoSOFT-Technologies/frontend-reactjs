import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/index";

import Login from "./Login";
import "../../i18n/config";

it("render without crashing Loginpage", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
});
it("render the input fields", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  const emailBox = screen.getByTestId("email-input");
  expect(emailBox).toBeInTheDocument();
  expect(emailBox).toHaveAttribute("type", "email");

  const passwordBox = screen.getByTestId("password-input");
  expect(passwordBox).toBeInTheDocument();
  expect(passwordBox).toHaveAttribute("type", "password");

  const submitBtn = screen.getByTestId("signin-button");
  fireEvent.click(submitBtn);

  const keepSignedInBtn = screen.getByTestId("keep-signed-in");
  expect(keepSignedInBtn).toBeInTheDocument();
  fireEvent.click(keepSignedInBtn);

  fireEvent.change(emailBox, { target: { value: "deepthi@gmail.com" } });

  fireEvent.change(passwordBox, { target: { value: "deepthi@123" } });

  fireEvent.click(submitBtn);
});
