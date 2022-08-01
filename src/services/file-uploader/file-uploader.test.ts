import FileUploaderHttpClient from "./file-uploader";
import mockApi from "../../resources/testconfig";
let payload: File[];
test("calling the post method", async () => {
  mockApi.onPost("http://localhost:8899/api/neostore/upload").reply(200, {});

  await FileUploaderHttpClient.FileUploader(payload);
});
