import HttpClient from "../http-client/http-client";

export interface ILoginResponse {
  username: string;
  password: string;
  title: string;
  description: string;
}

export default class LoginHttpClient {
  /**
   * login 

   * @returns
   */
  public static async loginresponse(): Promise<ILoginResponse> {
    // login API
    const {
      data: { username, password, title, description },
    } = await HttpClient.get("/global/mock-data/loginCredentials.json");
    const response: ILoginResponse = {
      username,
      password,
      title,
      description,
    };

    return response;
  }
}
