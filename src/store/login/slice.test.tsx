import mockApi from "../../resources/testconfig";
import store from "../index";
import { getUserDetails } from "./slice";

test("calling the state of login", async () => {
  mockApi.onGet("/global/mock-data/loginCredentials.json").reply(200, {});
  const state = store.getState().getUserDetails;

  await store.dispatch(
    getUserDetails({
      username: "deepthi",
      password: "deepthi@123",
    })
  );
  if (state.loading === false) {
    expect(state.error).toBeUndefined();
  }
});

test("should give an error", async () => {
  mockApi.onGet("/global/mock-data/loginCredentials.json").reply(404);
  await store.dispatch(
    getUserDetails({
      username: "deepthi",
      password: "deepthi@123",
    })
  );
  //   expect(result.type).toBe("login/user/rejected");
});
