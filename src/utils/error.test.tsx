import error from "./error";

test("calling the function of error", () => {
  try {
    throw new Error("testing error");
  } catch (error_) {
    const errString = error(error_);
    expect(errString).toEqual("testing error");
  }
});
