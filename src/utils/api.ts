import axios from "axios";

const defaultBaseUrl =
  process.env.REACT_APP_API_BASEURL || "http://localhost:3000/";

// Todo : Make default URL based on Environment ['dev', 'staging', 'test', 'prod']

const transformResponse = (input: string) => {
  try {
    return JSON.parse(input);
  } catch {
    /* Ignore */
  }
};

const buildHeader = (obj = {}) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  Object.assign(header, obj);
  return header;
};

const apiFactory = (baseUrl: string = defaultBaseUrl, header = {}) => {
  const service = axios.create({
    baseURL: baseUrl,
    headers: buildHeader(header),
    transformResponse: [
      (data) => {
        if (typeof data === "string") {
          return transformResponse(data);
        }
        return data;
      },
    ],
  });

  return service;
};

export default apiFactory;
