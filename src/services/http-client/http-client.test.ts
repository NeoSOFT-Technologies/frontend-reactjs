import HttpClient from "./http-client";
import mockApi from "../../resources/testconfig";
test("calling the get method", async () => {
  mockApi.onGet("/url").reply(200, {});

  const response = await HttpClient.get("url");
  expect(response.status).toBe(200);
});

test("calling the post method", async () => {
  mockApi.onPost("/url").reply(200, {});

  const response = await HttpClient.post("url", " payload");
  expect(response.status).toBe(200);
});

test("calling the patch method", async () => {
  mockApi.onPatch("/url").reply(200, {});

  const response = await HttpClient.patch("url", " payload");
  expect(response.status).toBe(200);
});

test("calling the put method", async () => {
  mockApi.onPut("/url").reply(200, {});

  const response = await HttpClient.put("url", " payload");
  expect(response.status).toBe(200);
});

test("calling the delete method", async () => {
  mockApi.onDelete("/url").reply(200, {});

  const response = await HttpClient.delete("url");
  expect(response.status).toBe(200);
});
