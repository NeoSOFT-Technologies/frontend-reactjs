import FileUploaderHttpClient from "./file-uploader";
import mockApi from "../../resources/testconfig";
let payload: File[];
test("calling the file-uploader method", async () => {
  mockApi.onPost("/URL").reply(200, {});
  await FileUploaderHttpClient.FileUploader(payload);
});
