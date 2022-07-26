import { fireEvent, render, screen } from "@testing-library/react";
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

  const submitBtn = screen.getByTestId("signup-button");
  expect(submitBtn).toBeInTheDocument();
  fireEvent.click(submitBtn);

  fireEvent.change(nameBox, { target: { value: "deepthi" } });

  fireEvent.change(emailBox, { target: { value: "deepthi@gmail.com" } });

  fireEvent.change(passwordBox, { target: { value: "deepthi@123" } });

  fireEvent.click(submitBtn);
});
