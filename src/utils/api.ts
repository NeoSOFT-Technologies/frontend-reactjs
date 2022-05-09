import axios from "axios";

const defaultBaseUrl =
  process.env.REACT_APP_API_BASEURL || "http://localhost:3000";
class ApiFactoryWrapper {
  private baseURL;
  constructor(URL: string = defaultBaseUrl) {
    this.baseURL = URL;
  }

  transformResponse = (input: string) => {
    try {
      return JSON.parse(input);
    } catch {
      /* Ignore */
    }
  };

  buildHeader = (obj = {}) => {
    const header = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    Object.assign(header, obj);
    return header;
  };

  apiFactory = (header = {}) => {
    const service = axios.create({
      baseURL: this.baseURL,
      headers: this.buildHeader(header),
      transformResponse: [
        (data) => {
          if (typeof data === "string") {
            return this.transformResponse(data);
          }
          return data;
        },
      ],
    });

    return service;
  };
}

const apiFactory = new ApiFactoryWrapper().apiFactory;
export default apiFactory;
