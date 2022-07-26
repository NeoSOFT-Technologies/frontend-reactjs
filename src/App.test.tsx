import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./i18n/config";

test("renders learn react link", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  container.querySelector(".landing");
  expect(container.firstChild).toMatchSnapshot();
});
