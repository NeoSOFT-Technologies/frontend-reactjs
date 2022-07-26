import mockApi from "../../resources/testconfig";
import store from "../index";
import { getUserDetails } from "./slice";
import "../../i18n/config";

test("should give an error", async () => {
  mockApi.onGet("/url").reply(404);
  const result = await store.dispatch(
    getUserDetails({
      username: "deepthi",
      password: "",
    })
  );
  expect(result.type).toBe("login/user/rejected");
});
test("calling the state of login", async () => {
  mockApi.onGet("/url").reply(200, {});

  await store.dispatch(
    getUserDetails({
      username: "deepthi",
      password: "",
    })
  );
});
