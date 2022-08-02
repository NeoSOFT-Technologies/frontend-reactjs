import HttpClient from "../http-client/http-client";

export interface IFileUploadResponse {
  id: string;
  status: string;
}

export default class FileUploaderHttpClient {
  private static FILE_UPLOAD_API = "URL";

  public static async FileUploader(
    payload: File
  ): Promise<IFileUploadResponse> {
    const {
      data: { id, status },
    } = await HttpClient.post(this.FILE_UPLOAD_API, payload);
    const response: IFileUploadResponse = {
      id,
      status,
    };

    return response;
  }
}
