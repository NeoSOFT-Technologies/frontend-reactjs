import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";
import PasswordButtons from "./PasswordButtons";

it("render without crashing Password Component", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <PasswordButtons viewPassword={true} setViewPassword={() => true} />
      </Provider>
    </BrowserRouter>
  );
});

it("should have set-view-password-false button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <PasswordButtons viewPassword={true} setViewPassword={() => true} />
      </Provider>
    </BrowserRouter>
  );

  const changePasswordViewBtn = screen.getByTestId("set-view-password-false");
  expect(changePasswordViewBtn).toBeInTheDocument();
  fireEvent.click(changePasswordViewBtn);
});

it("should have set-view-password-true button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <PasswordButtons viewPassword={false} setViewPassword={() => false} />
      </Provider>
    </BrowserRouter>
  );

  const changePasswordViewBtn = screen.getByTestId("set-view-password-true");
  expect(changePasswordViewBtn).toBeInTheDocument();
  fireEvent.click(changePasswordViewBtn);
});
