import LoginHttpClient from "./login";
import mockApi from "../../resources/testconfig";
test("calling the get method", async () => {
  mockApi.onGet("/global/mock-data/loginCredentials.json").reply(200, {});

  await LoginHttpClient.loginresponse();
});
