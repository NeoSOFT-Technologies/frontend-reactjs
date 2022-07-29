import HttpClient from "../http-client/http-client";

export interface IFileUploadResponse {
  id: string;
  status: string;
}

export default class FileUploaderHttpClient {
  /**
   

  /**
   * @param payload
   * @returns
   */
  public static async FileUploader(
    payload: File[]
  ): Promise<IFileUploadResponse> {
    const {
      data: { id, status },
    } = await HttpClient.post(
      "http://localhost:8899/api/neostore/upload",
      payload
    );
    const response: IFileUploadResponse = {
      id,
      status,
    };

    return response;
  }
}
