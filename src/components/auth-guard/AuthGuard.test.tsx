import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";
import AuthGuard from "./AuthGuard";
import Error401 from "../../pages/error-pages/Error401";
import LandingPage from "../../pages/landing/LandingPage";
import "../../i18n/config";
const authGuard = new AuthGuard(<Error401 />);

it("render without crashing Loader", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        {authGuard.protect(<LandingPage />, false)}
      </Provider>
    </BrowserRouter>
  );
});
it("render without crashing Loader", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        {authGuard.protect(<LandingPage />, true)}
      </Provider>
    </BrowserRouter>
  );
});
