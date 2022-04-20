import httpclient from "../utils/api";

export const validateUserLoginCredentials = async () => {
  const response = await httpclient().get(
    "/global/mock-data/loginCredentials.json"
  );
  return response.data;
};
