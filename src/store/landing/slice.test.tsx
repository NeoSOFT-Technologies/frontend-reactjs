import mockApi from "../../resources/testconfig";
import store from "../../store/index";
import { getLandingPageDetails } from "./slice";

test("calling the state of landing", async () => {
  mockApi.onGet("/global/mock-data/landing.json").reply(200, {});

  await store.dispatch(getLandingPageDetails());
});

test("calling the state of landing", async () => {
  mockApi.onGet("/global/mock-data/landing.json").reply(404);

  await store.dispatch(getLandingPageDetails());
});
