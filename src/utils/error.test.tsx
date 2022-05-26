import error from "./error";

test("calling the function of error", () => {
  try {
    throw new Error("testing error");
  } catch (_error) {
    const errString = error(_error);
    expect(errString).toEqual("testing error");
  }
});
