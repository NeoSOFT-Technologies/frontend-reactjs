import mockApi from "../../resources/testconfig";
import store from "../index";
import { getUserDetails } from "./slice";

test("calling the state of login", async () => {
  mockApi.onGet("/global/mock-data/loginCredentials.json").reply(200, {});
  const state = store.getState().login;

  await store.dispatch(
    getUserDetails({
      username: "deepthi",
      password: "",
    })
  );
  if (state.loading === false) {
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
  }
  if (state.loading === true) {
    console.log(state.loading === true);
  }
});

test("should give an error", async () => {
  mockApi.onGet("/global/mock-data/loginCredentials.json").reply(404);
  const state = store.getState().login;
  await store.dispatch(
    getUserDetails({
      username: "deepthi",
      password: "",
    })
  );
  if (state.loading === false) {
    expect("Incorrect Credentials");
  }
});
